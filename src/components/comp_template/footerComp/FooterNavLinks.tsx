import Link from "next/link";

export default function FooterNavLinks() {
  return (
    <div className="flex justify-center gap-7 text-center">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-3">Navegação</h3>
          <Link href="/" className="text-blue-100 hover:text-yellow-300 transition">Início</Link>
          <Link href="/provas" className="text-blue-100 hover:text-yellow-300 transition">Provas</Link>
          <Link href="/estudo" className="text-blue-100 hover:text-yellow-300 transition">Estudo</Link>
          <Link href="/redacao" className="text-blue-100 hover:text-yellow-300 transition">Redação</Link>
          <Link href="/sobre" className="text-blue-100 hover:text-yellow-300 transition">Sobre</Link>
      </div>
    </div>
  );
}
