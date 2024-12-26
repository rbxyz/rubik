import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string | null;
      name: string | null;
      image: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    image: string;
    password?: string;
  }

  interface JWT {
    id: string;
  }
}
