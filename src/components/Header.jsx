import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">JulyDevops</h1>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:underline">
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-blue-700 space-y-4 pb-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="hover:underline text-lg"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
