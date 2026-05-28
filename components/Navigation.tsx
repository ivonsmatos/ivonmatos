'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#stack', label: 'Stack' },
  { href: '#formacao', label: 'Formação' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[color:var(--color-line)] bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)] backdrop-blur-md backdrop-saturate-150'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex w-[min(100%-2.5rem,1200px)] items-center justify-between gap-8 py-4">
        <a href="#" className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-[1.1rem] font-semibold tracking-tight">
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[9px] bg-[var(--color-ink)]">
            <span className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_48%,var(--color-bronze)_50%,transparent_52%)] opacity-70" />
            <span className="relative z-10 h-2 w-2 rounded-full bg-[var(--color-bronze)] shadow-[0_0_14px_1px_rgba(194,146,108,.7)]" />
          </span>
          <span>Ivon&nbsp;Matos</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`block h-[1.5px] w-5.5 bg-[var(--color-fg)] transition-transform duration-300 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-5.5 bg-[var(--color-fg)] transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-[1.5px] w-5.5 bg-[var(--color-fg)] transition-transform duration-300 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>

        <ul
          id="nav-menu"
          className={`fixed inset-x-0 top-16 z-40 flex h-[calc(100vh-4rem)] flex-col items-start gap-7 border-t border-[color:var(--color-line)] bg-[var(--color-bg)] p-10 text-[1.4rem] transition-transform duration-400 md:static md:h-auto md:flex-row md:items-center md:gap-8 md:border-0 md:p-0 md:text-[.94rem] ${
            open ? 'translate-y-0' : '-translate-y-[120%] md:translate-y-0'
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="group relative font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[var(--color-bronze)] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-[var(--color-ink)] px-4 py-2 text-[var(--color-paper)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-bronze)] hover:text-[var(--color-ink)]"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
