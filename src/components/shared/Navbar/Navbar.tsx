import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/todos">Todos (Static)</Link>
      <Link href="/server-todos">Todos (SSR)</Link>
      <Link href="/client-todos">Todos (Client)</Link>
    </nav>
  );
}
