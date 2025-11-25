import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import AnimatedSection from "@/components/AnimatedSection";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <AnimatedSection className="pt-6">
        <div className="container text-center">
          <span className="badge-soft mb-3">Erro 404</span>
          <h1 className="mb-3">Conteúdo não localizado</h1>
          <p className="mx-auto max-w-40 mb-4">
            O endereço informado não existe ou foi movido. Utilize o menu para continuar explorando o portfólio.
          </p>
          <Link className="btn btn-cta touch-friendly" to="/">
            Voltar para a página inicial
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
