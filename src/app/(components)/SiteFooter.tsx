const currentYear = new Date().getFullYear();

const socialLinks = [
  { href: "https://www.linkedin.com/in/ivonmatos", label: "LinkedIn" },
  { href: "https://github.com/ivonsmatos", label: "GitHub" },
  { href: "mailto:contato@ivonmatos.com.br", label: "E-mail" },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <p className="mb-2">
          &copy; {currentYear} Ivon Matos. Todos os direitos reservados.
        </p>
        <p className="mb-3">
          Inteligência Artificial, Arquitetura de Dados e Educação para negócios
          guiados por dados.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
