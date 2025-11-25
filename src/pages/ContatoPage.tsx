import { Helmet } from "react-helmet-async";

import AnimatedSection from "@/components/AnimatedSection";

const canais = [
  {
    label: "E-mail",
    value: "contato@ivonmatos.com.br",
    href: "mailto:contato@ivonmatos.com.br",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ivonmatos",
    href: "https://www.linkedin.com/in/ivonmatos",
  },
  {
    label: "GitHub",
    value: "github.com/ivonsmatos",
    href: "https://github.com/ivonsmatos",
  },
];

export default function ContatoPage() {
  return (
    <>
      <Helmet>
        <title>Contato</title>
        <meta
          name="description"
          content="Entre em contato com Ivon Matos para projetos de arquitetura em IA, dados e programas educacionais corporativos."
        />
        <link rel="canonical" href="https://ivonmatos.com.br/contato" />
      </Helmet>

      <AnimatedSection id="contato-intro" className="pt-6">
        <div className="container text-center">
          <span className="badge-soft mb-3">Contato</span>
          <h1 className="mb-3">Vamos conversar sobre o seu próximo desafio</h1>
          <p className="mx-auto max-w-40">
            Projetos de arquitetura em IA, dados e programas educacionais personalizados para times que precisam acelerar
            com segurança.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contato-formulario" className="section-muted">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div className="contact-card">
                <h2 className="mb-4">Conte a sua necessidade</h2>
                <form className="row g-3" method="post" noValidate>
                  <div className="col-12">
                    <label className="form-label" htmlFor="nome">
                      Nome completo
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className="form-control"
                      placeholder="Como posso te chamar?"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="email">
                      E-mail corporativo
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="voce@empresa.com"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="empresa">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      className="form-control"
                      placeholder="Nome da organização"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="mensagem">
                      Como posso ajudar?
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      className="form-control"
                      rows={5}
                      placeholder="Compartilhe contexto, metas e prazos."
                      required
                    />
                  </div>
                  <div className="col-12 d-flex align-items-center gap-3">
                    <button className="btn btn-cta touch-friendly" type="submit">
                      Enviar mensagem
                    </button>
                    <small className="text-muted">Responderei em até 2 dias úteis.</small>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card-portfolio h-100">
                <h2 className="mb-4">Outros canais</h2>
                <ul className="list-unstyled mb-4">
                  {canais.map((canal) => (
                    <li className="mb-3" key={canal.label}>
                      <span className="d-block text-muted small">{canal.label}</span>
                      <a className="hover-activate" href={canal.href} target="_blank" rel="noopener noreferrer">
                        {canal.value}
                      </a>
                    </li>
                  ))}
                </ul>
                <h3 className="mb-3">Preferências de reunião</h3>
                <p className="mb-3">
                  Atendo em português, inglês e espanhol. Virtualmente, uso MS Teams, Google Meet ou Zoom. Reuniões
                  presenciais podem ser agendadas em Belo Horizonte ou São Paulo.
                </p>
                <p className="mb-0">
                  Para convites de palestras e aulas, inclua tema desejado, público e formato ao entrar em contato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
