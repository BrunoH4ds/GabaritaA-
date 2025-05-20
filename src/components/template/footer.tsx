import Logo from "../shared/Logo";
import {
  IconMail,
} from "@tabler/icons-react";
import FooterNavLinks from "../comp_template/footerComp/FooterNavLinks";
import Social from "../comp_template/footerComp/Social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-blue-950 bg-blue-600 text-white p-5 rounded-md shadow-md">
      <div className="items-center grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <Logo width={160} />
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="flex flex-col items-center">
          <FooterNavLinks />
        </div>

        {/* Coluna 3: Contato e Social */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <div className="flex items-center gap-2 mb-2">
            <IconMail size={20} />
            <a
              href="mailto:Example@gmail.com"
              className="text-blue-100 hover:text-yellow-300 transition"
            >
              Example@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Social/>
          </div>
        </div>
      </div>

      <div className="border-t dark:border-blue-900 border-blue-700 mt-6 pt-4 text-center text-sm text-blue-200">
        <div className="flex items-center justify-between">
          <p>
            O GabaritaAí é uma plataforma gratuita para estudo do ENEM com foco
            em praticidade, clareza e eficiência.
          </p>
          <p>&copy; {year} GabaritaAí. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
