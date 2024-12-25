import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Rubik Hub Admin</h2>
        </div>
        <nav className="mt-4">
          <Link href="/admin">
            <a className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Dashboard
            </a>
          </Link>
          <Link href="/admin/editais">
            <a className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Gerenciar Editais
            </a>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
