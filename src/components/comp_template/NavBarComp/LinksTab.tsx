import Link from "next/link";

export default function LinksTab() {
  return (
    <ul className="flex flex-row items-center justify-center font-semibold gap-7 w-full text-lg">
      {/* Notícias */}
      <li className="w-full md:w-auto">
        <Link href="/" className="hover:text-yellow-300 transition">
          Início
        </Link>
      </li>

      {/* Cursos */}
      <li className="w-full md:w-auto">
        <Link href="/provas" className="hover:text-yellow-300 transition">
          Provas
        </Link>
      </li>

      {/* Home Icon */}
      <li className="w-full md:w-auto">
        <Link href="/sobre" className="hover:text-yellow-300 transition">
          Sobre
        </Link>
      </li>
    </ul>
  );
}
