import Footer from "./footer";
import NavBar from "./navBar";

export interface MainProps {
  children: React.ReactNode;
  className?: string;
  semCabecalho?: boolean;
  semRodape?: boolean;
}

export default function Main({
  children,
  className,
  semCabecalho,
  semRodape,
}: MainProps) {
  return (
    <div
      className={`relative flex flex-col bg-gradient-to-br dark:from-blue-950 dark:to-gray-900
 from-blue-100 to-blue-200 p-5 ${className}`}
    >
      {/* Condicional para exibir ou não o cabeçalho */}
      {!semCabecalho && <NavBar />}

      {/* Conteúdo */}
      <main className="min-h-screen my-5">
        {children}
      </main>

      {/* Rodapé condicional */}
      {!semRodape && <Footer />}
    </div>
  );
}
