import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import ContatoPage from "@/pages/ContatoPage";
import CurriculumPage from "@/pages/CurriculumPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import SobrePage from "@/pages/SobrePage";

export default function App() {
  return (
    <BrowserRouter>
      <Helmet defaultTitle="Ivon Matos | Arquiteto em Inteligência Artificial" titleTemplate="%s | Ivon Matos">
        <meta
          name="description"
          content="Portfólio de Ivon Matos com projetos de arquitetura em IA, dados e programas educacionais corporativos."
        />
        <meta
          name="keywords"
          content="Ivon Matos, Inteligência Artificial, Arquitetura de Dados, Estratégia de Dados, Educação Executiva"
        />
        <meta property="og:site_name" content="Ivon Matos" />
        <meta property="og:image" content="https://ivonmatos.com.br/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivon Matos | Arquitetura em IA e Dados" />
        <meta
          name="twitter:description"
          content="Estratégia, engenharia e educação para organizações guiadas por inteligência artificial."
        />
        <meta name="twitter:image" content="https://ivonmatos.com.br/og-image.jpg" />
      </Helmet>

      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <MainNav />
      <main id="conteudo" className="layout-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}
