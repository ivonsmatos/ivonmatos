import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "../(components)/AnimatedSection";
import { posts } from "@/data/posts";

const categories = Array.from(new Set(posts.map((post) => post.category)));

export const metadata: Metadata = {
  title: "Blog e Insights",
  description:
    "Artigos de Ivon Matos sobre arquitetura em IA, estratégia de dados, educação e liderança técnica.",
};

export default function BlogPage() {
  return (
    <>
      <AnimatedSection id="blog-intro" className="pt-6">
        <div className="container text-center">
          <span className="badge-soft mb-3">Blog</span>
          <h1 className="mb-3">Insights para arquitetar inteligência</h1>
          <p className="mx-auto max-w-44">
            Curadoria de aprendizados, frameworks e estudos de caso em
            Inteligência Artificial, dados e educação executiva.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
            {categories.map((category) => (
              <span key={category} className="badge-soft">
                {category}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="blog-conteudo" className="section-muted">
        <div className="container">
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-12 col-lg-4" key={post.slug}>
                <article className="blog-card hover-activate h-100">
                  <span className="badge-soft mb-3">{post.category}</span>
                  <h2 className="mb-3 h3">{post.title}</h2>
                  <p className="mb-3">{post.excerpt}</p>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="badge-soft">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link className="stretched-link" href={`/blog/${post.slug}`}>
                    <span className="visually-hidden">Ler {post.title}</span>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="blog-newsletter">
        <div className="container text-center">
          <h2 className="mb-3">Aprendizados direto no seu e-mail</h2>
          <p className="mx-auto max-w-40 mb-4">
            Cadastre-se para receber resumos mensais com novidades sobre
            arquitetura de IA, cases em dados e experiências em sala de aula.
          </p>
          <form className="row g-3 justify-content-center" aria-label="Assine a newsletter">
            <div className="col-12 col-md-5">
              <label className="visually-hidden" htmlFor="newsletter-email">
                E-mail
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                className="form-control"
                placeholder="seuemail@empresa.com"
                required
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-cta touch-friendly" type="submit">
                Receber novidades
              </button>
            </div>
          </form>
          <small className="d-block mt-3 text-muted">
            Sem spam. Você pode cancelar a assinatura quando quiser.
          </small>
        </div>
      </AnimatedSection>
    </>
  );
}
