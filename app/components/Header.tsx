import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Rubik
        </Link>
        <div>
          <Link
            href="/login"
            className="px-4 py-2 bg-white text-primary rounded hover:bg-gray-100 transition duration-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
