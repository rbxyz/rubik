import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Site de Editais
        </Link>
        <div>
          <Link
            href="/login"
            className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-100"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
