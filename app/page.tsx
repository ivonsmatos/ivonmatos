import Navigation from '@/components/Navigation';
import Reveal from '@/components/Reveal';
import { contact, stats, expertise, timeline, clients, stack, education } from '@/lib/data';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute -top-24 left-0 z-[999] rounded-br-md bg-[var(--color-ink)] px-4 py-3 text-[var(--color-paper)] focus:top-0"
      >
        Ir para o conteúdo principal
      </a>

      <Navigation />

      <main id="main">
        <Hero />
        <Sobre />
        <Expertise />
        <Trajetoria />
        <Stack />
        <Formacao />
        <Contato />
      </main>

      <Footer />
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */

function Hero() {
  return (
    <section className="relative isolate grid min-h-[100svh] items-center overflow-hidden px-5 pb-24 pt-40 lg:pt-44">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-20" />
      <div aria-hidden className="hero-aurora-1 pointer-events-none absolute right-[-10%] top-[-10%] -z-10 h-[60vh] w-[60vh] animate-[aurora_18s_ease-in-out_infinite]" />
      <div aria-hidden className="hero-aurora-2 pointer-events-none absolute bottom-[-20%] left-[-15%] -z-10 h-[55vh] w-[55vh] animate-[aurora_22s_ease-in-out_infinite_reverse]" />

      <div className="mx-auto w-full max-w-[1200px]">
        <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--color-line)] bg-[color-mix(in_srgb,white_70%,transparent)] px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-muted)] backdrop-blur-md">
          <span className="dot-live inline-block h-2 w-2 rounded-full" />
          Chief AI Officer · São Paulo, Brasil
        </p>

        <h1
          id="hero-title"
          className="mb-7 max-w-[17ch] font-[family-name:var(--font-display)] text-[clamp(2.6rem,7.4vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.035em]"
        >
          <span className="block animate-[rise_.9s_var(--ease-out-soft)_.1s_forwards] opacity-0">
            Construindo
          </span>
          <span className="block animate-[rise_.9s_var(--ease-out-soft)_.25s_forwards] opacity-0">
            <em className="text-shimmer not-italic font-[400] italic">
              ecossistemas de IA
            </em>
          </span>
          <span className="block animate-[rise_.9s_var(--ease-out-soft)_.4s_forwards] opacity-0">
            que vão&nbsp;além do hype.
          </span>
        </h1>

        <p
          id="hero-tagline"
          className="mb-10 max-w-[56ch] animate-[rise_1s_var(--ease-out-soft)_.6s_forwards] text-[clamp(1.05rem,1.4vw+.5rem,1.3rem)] leading-[1.55] text-[var(--color-muted)] opacity-0"
        >
          Arquiteto de <strong className="font-semibold text-[var(--color-fg)]">Agentes Autônomos</strong> e{' '}
          <strong className="font-semibold text-[var(--color-fg)]">Sistemas RAG</strong>. Conecto Python,
          IA Generativa e interfaces modernas para resolver problemas reais de negócio com governança,
          segurança e escala.
        </p>

        <div className="mb-20 flex animate-[rise_1s_var(--ease-out-soft)_.75s_forwards] flex-wrap gap-4 opacity-0">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-sm font-semibold text-[var(--color-paper)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-bronze)] hover:text-[var(--color-ink)]"
          >
            <span>Vamos conversar</span>
            <svg
              className="transition-transform group-hover:translate-x-1"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#trajetoria"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--color-fg)]"
          >
            Ver trajetória
          </a>
        </div>

        <dl className="grid max-w-[720px] animate-[rise_1s_var(--ease-out-soft)_.9s_forwards] grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-8 opacity-0">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="mb-1 font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,2.75rem)] font-medium leading-none tracking-[-.03em]">
                {s.value}
              </dt>
              <dd className="text-sm leading-snug text-[var(--color-muted)]">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 grid h-9 w-[22px] -translate-x-1/2 place-items-center rounded-[14px] border-[1.5px] border-[var(--color-muted)] opacity-60"
      >
        <span className="block h-[7px] w-[3px] animate-[scroll-cue_1.8s_var(--ease-out-soft)_infinite] rounded-[3px] bg-[var(--color-fg)]" />
      </a>
    </section>
  );
}

/* ============================================================
   SOBRE
   ============================================================ */

function Sobre() {
  return (
    <section
      id="sobre"
      className="relative border-y border-[var(--color-line)] bg-[var(--color-bg-alt)] px-5 py-24 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal as="header" className="mb-16 max-w-[880px]">
          <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-bronze)]">
            01 · Sobre
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-.025em]">
            Da análise de dados à{' '}
            <em className="font-normal italic text-[var(--color-bronze)]">engenharia cognitiva.</em>
          </h2>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <Reveal>
            <p
              id="sobre-lead"
              className="mb-7 font-[family-name:var(--font-display)] text-[clamp(1.35rem,1.6vw+.6rem,1.85rem)] font-normal leading-[1.4] tracking-[-.012em]"
            >
              Apaixonado por construir o futuro da tecnologia, combino uma sólida experiência
              executiva com o desenvolvimento prático de soluções de Inteligência Artificial.
            </p>
            <p className="mb-5 text-[1.025rem] leading-[1.75] text-[var(--color-muted)]">
              Como <strong className="font-semibold text-[var(--color-fg)]">Chief AI Officer (CAIO) na Scaledata</strong>,
              orquestro a governança de dados, a democratização e a estratégia corporativa para a
              adoção de IA. Minha expertise evoluiu da análise tradicional para a engenharia de IA e
              o desenvolvimento Full-Stack integrado.
            </p>
            <p className="text-[1.025rem] leading-[1.75] text-[var(--color-muted)]">
              Foco em <strong className="font-semibold text-[var(--color-fg)]">Engenharia de Soluções Cognitivas</strong>:
              arquiteturas que conectam Python, agentes autônomos e interfaces React modernas. Implemento
              soluções <strong className="font-semibold text-[var(--color-fg)]">RAG</strong> robustas e
              orquestração de modelos para resolver problemas reais de negócio.
            </p>

            <blockquote className="mt-10 border-l-2 border-[var(--color-bronze)] py-1 pl-5 font-[family-name:var(--font-display)] text-[1.18rem] italic leading-[1.5]">
              &ldquo;Desmistificar a tecnologia e liderar a construção de aplicações seguras, escaláveis e
              inovadoras.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={100}>
            <aside className="relative overflow-hidden rounded-[18px] bg-[var(--color-ink)] p-8 text-[var(--color-paper)] shadow-[0_30px_60px_-30px_rgba(0,1,13,.35)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--color-bronze)_30%,transparent),transparent_60%)]"
              />
              <CardRow label="Atual" value="Chief AI Officer" />
              <CardRow label="Em" value="Scaledata" />
              <CardRow label="Foco" value="Agentes Autônomos · RAG" />
              <CardRow label="Base" value="São Paulo · BR" />
              <CardRow label="Línguas" value="Português · Espanhol" />
              <div className="relative mt-4 flex items-center gap-2.5 text-sm text-[var(--color-mist)]">
                <span className="dot-live inline-block h-2 w-2 rounded-full" />
                <span>Disponível para novos projetos</span>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CardRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative flex flex-col gap-0.5 border-t border-white/10 pt-4 first:border-t-0 first:pt-0 [&+&]:mt-4">
      <span className="font-[family-name:var(--font-mono)] text-[.7rem] uppercase tracking-[.14em] text-[var(--color-mist)]/70">
        {label}
      </span>
      <span className="text-[1.05rem] font-medium">{value}</span>
    </div>
  );
}

/* ============================================================
   EXPERTISE
   ============================================================ */

function Expertise() {
  return (
    <section id="expertise" className="px-5 py-24 lg:py-36">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal as="header" className="mb-16 max-w-[880px]">
          <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-bronze)]">
            02 · Expertise
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-.025em]">
            Quatro pilares,{' '}
            <em className="font-normal italic text-[var(--color-bronze)]">um único objetivo:</em>{' '}
            resultado.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e, i) => (
            <Reveal key={e.n} delay={i * 80}>
              <article className="tilt-card group relative h-full overflow-hidden rounded-[18px] border border-[var(--color-line)] bg-[var(--color-bg-alt)] p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,transparent_60%,color-mix(in_srgb,var(--color-bronze)_25%,transparent)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="mb-6 font-[family-name:var(--font-mono)] text-xs tracking-[.14em] text-[var(--color-bronze)]">
                    {e.n}
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-medium leading-[1.2] tracking-[-.015em]">
                    {e.title}
                  </h3>
                  <p className="mb-6 text-[.98rem] leading-[1.6] text-[var(--color-muted)]">{e.desc}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-[var(--color-mist)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[.7rem] tracking-wide text-[var(--color-ink)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRAJETORIA
   ============================================================ */

function Trajetoria() {
  return (
    <section
      id="trajetoria"
      className="relative border-y border-[var(--color-line)] bg-[var(--color-bg-alt)] px-5 py-24 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal as="header" className="mb-16 max-w-[880px]">
          <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-bronze)]">
            03 · Trajetória
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-.025em]">
            Mais de duas décadas{' '}
            <em className="font-normal italic text-[var(--color-bronze)]">moldando ecossistemas digitais.</em>
          </h2>
        </Reveal>

        <ol className="relative mx-auto max-w-[880px] pl-8">
          <span
            aria-hidden
            className="absolute bottom-2 left-2 top-2 w-px bg-[linear-gradient(to_bottom,transparent,var(--color-line)_8%,var(--color-line)_92%,transparent)]"
          />
          {timeline.map((t, i) => (
            <Reveal key={t.role + t.org} as="li" delay={i * 60} className="relative pb-12 pl-7 last:pb-0">
              <span
                aria-hidden
                className={`absolute -left-[1.4rem] top-2 h-[17px] w-[17px] rounded-full border-[1.5px] transition-all ${
                  t.current
                    ? 'border-[var(--color-bronze)] bg-[var(--color-bronze)] shadow-[0_0_0_6px_color-mix(in_srgb,var(--color-bronze)_18%,transparent)]'
                    : 'border-[var(--color-graphite)] bg-[var(--color-bg-alt)]'
                }`}
              />
              <span className="mb-2 inline-block font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.08em] text-[var(--color-bronze)]">
                {t.period}
              </span>
              <h3 className="mb-1 font-[family-name:var(--font-display)] text-[1.4rem] font-medium tracking-[-.015em]">
                {t.role}
              </h3>
              <p className="mb-2 font-medium text-[var(--color-fg)]">{t.org}</p>
              {t.desc && <p className="text-[.98rem] leading-[1.65] text-[var(--color-muted)]">{t.desc}</p>}
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20 border-t border-[var(--color-line)] pt-10">
          <p className="mb-6 text-center font-[family-name:var(--font-mono)] text-[.82rem] uppercase tracking-[.14em] text-[var(--color-muted)]">
            Marcas que já confiaram no meu trabalho
          </p>
          <div className="marquee-wrapper relative overflow-hidden">
            <div className="marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <span
                  key={c + i}
                  className="font-[family-name:var(--font-display)] text-[clamp(1.4rem,2.2vw,1.9rem)] font-normal tracking-[-.015em] text-[var(--color-muted)] opacity-70 transition-opacity hover:opacity-100 hover:text-[var(--color-fg)]"
                >
                  {c}
                </span>
              ))}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg-alt)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg-alt)] to-transparent"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   STACK
   ============================================================ */

function Stack() {
  return (
    <section id="stack" className="px-5 py-24 lg:py-36">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal as="header" className="mb-16 max-w-[880px]">
          <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-bronze)]">
            04 · Stack
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-.025em]">
            Ferramentas que{' '}
            <em className="font-normal italic text-[var(--color-bronze)]">uso todos os dias.</em>
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-[1px] gap-px overflow-hidden rounded-[18px] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div
              key={s.col}
              className="bg-[var(--color-bg)] p-7 transition-colors duration-300 hover:bg-[var(--color-bg-alt)]"
            >
              <h3 className="mb-5 font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-bronze)]">
                {s.col}
              </h3>
              <ul>
                {s.items.map((it, i) => (
                  <li
                    key={it}
                    className={`py-2.5 text-base ${
                      i < s.items.length - 1 ? 'border-b border-dashed border-[var(--color-line-soft)]' : ''
                    }`}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FORMAÇÃO
   ============================================================ */

function Formacao() {
  return (
    <section
      id="formacao"
      className="relative border-y border-[var(--color-line)] bg-[var(--color-bg-alt)] px-5 py-24 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal as="header" className="mb-16 max-w-[880px]">
          <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-bronze)]">
            05 · Formação
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-.025em]">
            Educação{' '}
            <em className="font-normal italic text-[var(--color-bronze)]">contínua e diversificada.</em>
          </h2>
        </Reveal>

        <ul className="mx-auto max-w-[880px]">
          {education.map((edu, i) => (
            <Reveal
              key={edu.title}
              as="li"
              delay={i * 60}
              className="group grid gap-3 border-t border-[var(--color-line)] py-7 transition-all duration-300 last:border-b hover:pl-2 sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <span className="pt-1.5 font-[family-name:var(--font-mono)] text-[.82rem] tracking-[.08em] text-[var(--color-bronze)]">
                {edu.period}
              </span>
              <div>
                <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-[1.25rem] font-medium leading-[1.3] tracking-[-.012em]">
                  {edu.title}
                </h3>
                <p className="text-[.98rem] text-[var(--color-muted)]">{edu.org}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   CONTATO
   ============================================================ */

function Contato() {
  const cards = [
    { label: 'E-mail',   value: contact.email,            href: `mailto:${contact.email}` },
    { label: 'WhatsApp', value: contact.phone,            href: contact.whatsapp,            external: true },
    { label: 'LinkedIn', value: '/in/ivon-matos',          href: contact.linkedin,            external: true },
    { label: 'GitHub',   value: '/ivonsmatos',              href: contact.github,              external: true },
  ];

  return (
    <section
      id="contato"
      className="relative px-5 py-24 lg:py-36"
      style={{
        background:
          'radial-gradient(60% 50% at 80% 30%, color-mix(in srgb, var(--color-bronze) 14%, transparent), transparent 70%), var(--color-bg)',
      }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal as="header" className="mb-12 max-w-[880px]">
          <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-[.78rem] uppercase tracking-[.14em] text-[var(--color-bronze)]">
            06 · Contato
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-.025em]">
            Pronto para{' '}
            <em className="font-normal italic text-[var(--color-bronze)]">construir algo extraordinário?</em>
          </h2>
          <p className="max-w-[60ch] text-[1.1rem] text-[var(--color-muted)]">
            Conversemos sobre o seu próximo projeto de IA — estratégia, arquitetura ou implementação.
            Resposta em até 24h úteis.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="tilt-card group relative flex h-full flex-col gap-4 overflow-hidden rounded-[18px] border border-[var(--color-line)] bg-[var(--color-bg-alt)] p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_50%,color-mix(in_srgb,var(--color-bronze)_18%,transparent)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative font-[family-name:var(--font-mono)] text-[.7rem] uppercase tracking-[.14em] text-[var(--color-muted)]">
                  {c.label}
                </span>
                <div className="relative flex flex-1 items-end justify-between gap-3">
                  <span className="min-w-0 break-words font-[family-name:var(--font-display)] text-[clamp(.95rem,1.05vw+.4rem,1.15rem)] font-medium leading-[1.25] tracking-[-.012em]">
                    {c.value}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl leading-none text-[var(--color-bronze)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] px-5 py-12 text-[var(--color-paper)]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="flex items-center gap-3">
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[9px] bg-[var(--color-ink)] ring-1 ring-white/10">
            <span className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_48%,var(--color-bronze)_50%,transparent_52%)] opacity-70" />
            <span className="relative z-10 h-2 w-2 rounded-full bg-[var(--color-bronze)] shadow-[0_0_14px_1px_rgba(194,146,108,.7)]" />
          </span>
          <div>
            <p className="font-[family-name:var(--font-display)] text-base font-medium">Ivon Matos</p>
            <p className="text-[.82rem] text-[var(--color-mist)]/75">
              Chief AI Officer · AI Engineering &amp; Data Strategy
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-[.92rem]">
          <a href="#sobre" className="text-[var(--color-mist)]/80 hover:text-[var(--color-bronze)]">Sobre</a>
          <a href="#expertise" className="text-[var(--color-mist)]/80 hover:text-[var(--color-bronze)]">Expertise</a>
          <a href="#trajetoria" className="text-[var(--color-mist)]/80 hover:text-[var(--color-bronze)]">Trajetória</a>
          <a href="#contato" className="text-[var(--color-mist)]/80 hover:text-[var(--color-bronze)]">Contato</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-mist)]/80 hover:text-[var(--color-bronze)]">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-mist)]/80 hover:text-[var(--color-bronze)]">GitHub</a>
        </nav>

        <p className="flex flex-wrap items-center justify-end gap-2 text-[.85rem] text-[var(--color-mist)]/65">
          <span>São Paulo · Brasil</span>
          <span aria-hidden>·</span>
          <span>© {new Date().getFullYear()} Ivon Matos</span>
        </p>
      </div>
    </footer>
  );
}
