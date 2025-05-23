import Link from "next/link";

export default function LinksTab({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <ul
      className={`w-full font-semibold text-lg ${
        isMobile
          ? "flex flex-col items-start space-y-4" // vertical para o mobile
          : "flex flex-row items-center justify-center gap-5" // horizontal para desktop
      }`}
    >
      <li>
        <Link href="/" className="hover:text-yellow-300 transition">
          Início
        </Link>
      </li>
      <li>
        <Link href="/provas" className="hover:text-yellow-300 transition">
          Provas
        </Link>
      </li>
      <li>
        <Link href="/estudo" className="hover:text-yellow-300 transition">
          Estudo
        </Link>
      </li>
      <li>
        <Link href="/redacao" className="hover:text-yellow-300 transition">
          Redação
        </Link>
      </li>
      <li>
        <Link href="/sobre" className="hover:text-yellow-300 transition">
          Sobre
        </Link>
      </li>
    </ul>
  );
}
