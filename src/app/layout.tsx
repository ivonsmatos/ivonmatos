import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import MainNav from "./(components)/MainNav";
import SiteFooter from "./(components)/SiteFooter";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivon Matos",
  jobTitle: [
    "Arquiteto em Inteligência Artificial",
    "Professor",
    "Arquiteto de Dados",
  ],
  url: "https://ivonmatos.com.br",
  sameAs: [
    "https://www.linkedin.com/in/ivonmatos",
    "https://github.com/ivonsmatos",
  ],
  description:
    "Portfólio de Ivon Matos, arquiteto em Inteligência Artificial, professor e arquiteto de dados, especialista em soluções inteligentes e escaláveis.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Arquitetura em Inteligência Artificial",
    "Engenharia de Dados",
    "Arquitetura de Dados",
    "Aprendizado de Máquina",
    "Estratégia de Dados",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ivonmatos.com.br"),
  title: {
    default: "Ivon Matos | Arquiteto em Inteligência Artificial",
    template: "%s | Ivon Matos",
  },
  description:
    "Portfólio oficial de Ivon Matos, arquiteto em Inteligência Artificial, professor e arquiteto de dados. Estratégia, engenharia e inovação em soluções inteligentes.",
  keywords: [
    "Ivon Matos",
    "Arquiteto em Inteligência Artificial",
    "Professor",
    "Arquiteto de Dados",
    "Engenharia de Dados",
    "Machine Learning",
    "Consultoria em IA",
  ],
  authors: [{ name: "Ivon Matos" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ivonmatos.com.br",
    title: "Ivon Matos | Arquiteto em Inteligência Artificial",
    description:
      "Descubra projetos, pesquisas e soluções em IA, dados e educação liderados por Ivon Matos.",
    siteName: "Ivon Matos",
    images: [
      {
        url: "https://ivonmatos.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ivon Matos - Arquiteto em Inteligência Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivon Matos | Arquitetura em IA e Dados",
    description:
      "Portfólio de Ivon Matos com projetos em IA, dados e educação.",
    creator: "@ivonmatos",
    images: ["https://ivonmatos.com.br/og-image.jpg"],
  },
  other: {
    "geo.region": "BR-MG",
    "geo.placename": "Belo Horizonte",
    "geo.position": "-19.9191;-43.9386",
    ICBM: "-19.9191, -43.9386",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <MainNav />
        <main id="conteudo" className="layout-content">
          {children}
        </main>
        <SiteFooter />
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
