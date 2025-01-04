import NextAuth, { NextAuthOptions } from "next-auth"; // Importando diretamente NextAuth
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { Session, User, JWT } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            return null;
          }

          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValidPassword) {
            return null;
          }

          const userData: User = {
            id: user.id.toString(),
            email: user.email,
            name: user.username,
            password: user.password,
            image: "",
          };

          return userData;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User | null }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

// Exportando NextAuth com as opções definidas
export default NextAuth(authOptions);
