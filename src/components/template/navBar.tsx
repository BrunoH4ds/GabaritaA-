import LinksTab from "../comp_template/NavBarComp/LinksTab";
import Logo from "../shared/Logo";

export default function NavBar() {
  return (
    <nav className="dark:bg-blue-950 bg-blue-600 text-white p-5 shadow-md rounded-md">
      <div className="flex items-center justify-center sm:justify-between">
        {/* Logo + Nome */}
        <div className="hidden sm:flex items-center gap-3">
          <Logo/>
        </div>

        {/* Links de navegação */}
        <div className="flex gap-6 font-medium">
          <LinksTab/>
        </div>
      </div>
    </nav>
  );
}
