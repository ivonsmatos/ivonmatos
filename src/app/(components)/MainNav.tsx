"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/curriculum", label: "Currículo" },
  { href: "/contato", label: "Contato" },
];

export default function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleNavigate = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
      aria-label="Navegação principal"
    >
      <div className="container">
        <Link className="navbar-brand" href="/" onClick={handleNavigate}>
          Ivon Matos
        </Link>
        <button
          className="navbar-toggler touch-friendly"
          type="button"
          aria-controls="navbar-conteudo"
          aria-expanded={isMenuOpen}
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
            {NAV_LINKS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li className="nav-item" key={item.href}>
                  <Link
                    className={`nav-link ${isActive ? "active" : ""}`}
                    href={item.href}
                    onClick={handleNavigate}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            className="btn btn-cta touch-friendly"
            href="/contato"
            onClick={handleNavigate}
          >
            Vamos Conversar
          </Link>
        </div>
      </div>
    </nav>
  );
}
