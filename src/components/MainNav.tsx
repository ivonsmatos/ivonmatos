import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/curriculum", label: "Currículo" },
  { href: "/contato", label: "Contato" },
];

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleNavigate = () => setIsMenuOpen(false);
  const ariaExpanded: "true" | "false" = isMenuOpen ? "true" : "false";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
      aria-label="Navegação principal"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Ivon Matos
        </NavLink>
        <button
          className="navbar-toggler touch-friendly"
          type="button"
          aria-controls="navbar-conteudo"
          aria-expanded={ariaExpanded}
          aria-label="Alternar menu"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbar-conteudo"
        >
          <ul className="navbar-nav align-items-lg-center me-lg-3 gap-lg-2">
            {NAV_LINKS.map((item) => (
              <li className="nav-item" key={item.href}>
                <NavLink
                  className={({ isActive }: { isActive: boolean }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={item.href}
                  onClick={handleNavigate}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink className="btn btn-cta touch-friendly" to="/contato" onClick={handleNavigate}>
            Vamos Conversar
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
