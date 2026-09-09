import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroMaternity from "@/assets/hero-maternity.jpg";
import cuidadoMaos from "@/assets/cuidado-maos.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Fisio Fem Clinic — Fisioterapia Obstétrica para Gestantes e Puérperas",
      },
      {
        name: "description",
        content:
          "Cuidado individualizado em fisioterapia pélvica, pilates para gestantes e recursos manuais. Planos mensais para gestantes e puérperas em São Paulo.",
      },
      { property: "og:title", content: "Fisio Fem Clinic" },
      {
        property: "og:description",
        content:
          "Fisioterapia obstétrica com cuidado individualizado para gestantes e puérperas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sent");
  };

  return (
    <main className="font-sans text-ink">
      {/* Header */}
      <header className="bg-creme">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-rose/25 ring-1 ring-rose/40">
              <span className="size-3.5 rounded-full bg-rose" />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Fisio Fem Clinic
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#servicos" className="hover:text-ink">
              Serviços
            </a>
            <a href="#cuidado" className="hover:text-ink">
              Cuidado
            </a>
            <a href="#planos" className="hover:text-ink">
              Planos
            </a>
            <a href="#depoimentos" className="hover:text-ink">
              Depoimentos
            </a>
          </nav>
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-creme transition-transform duration-300 hover:-translate-y-0.5"
          >
            Assinar plano
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-creme">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-sage/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-sage">
                <span className="size-1.5 rounded-full bg-sage" />
                Fisioterapia obstétrica
              </span>
              <h1 className="mt-6 max-w-[20ch] font-serif text-5xl font-medium leading-tight tracking-tight text-ink text-balance lg:text-6xl">
                Um acolhimento do primeiro movimento à primeira respiração
              </h1>
              <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-ink/70 text-pretty lg:text-lg">
                Cuidamos da sua pelve e do seu corpo com a delicadeza que o seu
                momento pede. Acompanhamento individual para gestantes e
                puérperas, em um espaço pensado para você.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white ring-1 ring-rose transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Ver planos mensais
                  <span className="shrink-0">→</span>
                </a>
                <a
                  href="#cuidado"
                  className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-ink ring-1 ring-ink/20 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Como cuidamos
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-ink/60 sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-terra" />
                  Atendimento individual
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-sage" />
                  Equipe especializada
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-rose" />
                  Plano por assinatura
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="absolute -right-6 -top-6 -z-0 size-40 rounded-full bg-rose/20" />
              <div className="absolute -left-8 bottom-8 -z-0 size-28 rounded-full bg-sage/20" />
              <div className="relative z-10">
                <img
                  src={heroMaternity}
                  alt="Gestante serena em ambiente acolhedor com luz quente"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full rounded-[2.5rem] object-cover outline outline-1 -outline-offset-1 outline-ink/5"
                />
                <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-[1.75rem] bg-white/70 px-5 py-4 ring-1 ring-ink/5 lg:left-8">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-sage/25 font-serif text-sage">
                    ✿
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      +1.200 gestantes
                    </p>
                    <p className="text-xs text-ink/55">cuidadas com carinho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="bg-nude">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra">
              Nossos cuidados
            </p>
            <h2 className="mt-3 max-w-[40ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl">
              Três formas de cuidar do seu corpo em cada fase
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1.5">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-rose/25 font-serif text-xl text-rose">
                ◍
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                Fisioterapia pélvica
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Alívio de desconfortos, fortalecimento e preparação segura para
                o parto com sessões individualizadas.
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-all hover:gap-2.5"
              >
                Agendar <span className="shrink-0">→</span>
              </a>
            </div>
            <div className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1.5">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-sage/25 font-serif text-xl text-sage">
                ❋
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                Pilates para gestantes
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Movimentos suaves que sustentam a coluna ao longo da gravidez e
                aceleram a recuperação pós-parto.
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-all hover:gap-2.5"
              >
                Agendar <span className="shrink-0">→</span>
              </a>
            </div>
            <div className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1.5">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-terra/25 font-serif text-xl text-terra">
                ☾
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                Recursos manuais
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Massagem relaxante e drenagem linfática para reduzir inchaço,
                tensões e o peso do dia a dia.
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-all hover:gap-2.5"
              >
                Agendar <span className="shrink-0">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Individualized care */}
      <section id="cuidado" className="bg-creme">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <img
                src={cuidadoMaos}
                alt="Fisioterapeuta apoiando a barriga de uma gestante com delicadeza"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full rounded-[2.5rem] object-cover outline outline-1 -outline-offset-1 outline-ink/5"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Cuidado individualizado
              </p>
              <h2 className="mt-3 max-w-[40ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl">
                Nenhuma gestação é igual à outra — e o cuidado também não
              </h2>
              <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-ink/70 text-pretty lg:text-lg">
                Cada avaliação começa com uma conversa longa. Ajustamos cada
                sessão ao seu trimestre, à sua história e ao que seu corpo está
                pedindo naquele dia.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-rose/25 text-xs text-rose">
                    1
                  </span>
                  <span className="text-sm text-ink/75">
                    <strong className="font-semibold text-ink">
                      Avaliação inicial aprofundada
                    </strong>{" "}
                    — história, exames e objetivo pessoal.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-sage/25 text-xs text-sage">
                    2
                  </span>
                  <span className="text-sm text-ink/75">
                    <strong className="font-semibold text-ink">
                      Plano no seu ritmo
                    </strong>{" "}
                    — frequência e técnica ajustadas a cada semana.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-terra/25 text-xs text-terra">
                    3
                  </span>
                  <span className="text-sm text-ink/75">
                    <strong className="font-semibold text-ink">
                      Acompanhamento contínuo
                    </strong>{" "}
                    — revisão constante e suporte entre sessões.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="bg-rose">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra">
              Planos mensais
            </p>
            <h2 className="mt-3 max-w-[35ch] font-serif text-4xl font-medium tracking-tight text-white text-balance lg:text-5xl">
              Um plano que acompanha você todo o mês
            </h2>
            <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-white/80 text-pretty">
              Assine, escolha seu ritmo e alterne os serviços quando precisar.
              Sem fidelidade.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-[2rem] bg-white/85 p-8 ring-1 ring-white/40">
              <h3 className="font-serif text-xl font-semibold text-ink">
                Essencial
              </h3>
              <p className="mt-1 text-sm text-ink/60">
                Para começar com segurança
              </p>
              <div className="mt-6 flex items-end gap-1.5">
                <span className="font-serif text-5xl font-medium text-ink">
                  R$249
                </span>
                <span className="mb-2 text-sm text-ink/55">/mês</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/75">
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>4 sessões do serviço à
                  sua escolha
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>Avaliação trimestral
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>Suporte por WhatsApp
                </li>
              </ul>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-ink/10 px-6 py-3 text-sm font-semibold text-ink ring-1 ring-ink/20 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Assinar
              </a>
            </div>

            <div className="relative flex flex-col rounded-[2rem] bg-ink p-8 ring-1 ring-ink md:-translate-y-3">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terra px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                Recomendado
              </span>
              <h3 className="font-serif text-xl font-semibold text-white">
                Equilíbrio
              </h3>
              <p className="mt-1 text-sm text-white/60">
                O mais escolhido pelas gestantes
              </p>
              <div className="mt-6 flex items-end gap-1.5">
                <span className="font-serif text-5xl font-medium text-white">
                  R$429
                </span>
                <span className="mb-2 text-sm text-white/60">/mês</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-white/85">
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>8 sessões com serviços
                  alternáveis
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>Pilates + pélvica
                  inclusos
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>1 sessão de recurso
                  manual
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>Acompanhamento contínuo
                </li>
              </ul>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white ring-1 ring-rose transition-transform duration-300 hover:-translate-y-0.5"
              >
                Assinar Equilíbrio
              </a>
            </div>

            <div className="flex flex-col rounded-[2rem] bg-white/85 p-8 ring-1 ring-white/40">
              <h3 className="font-serif text-xl font-semibold text-ink">
                Contínuo
              </h3>
              <p className="mt-1 text-sm text-ink/60">
                Para quem quer tudo, junto
              </p>
              <div className="mt-6 flex items-end gap-1.5">
                <span className="font-serif text-5xl font-medium text-ink">
                  R$690
                </span>
                <span className="mb-2 text-sm text-ink/55">/mês</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/75">
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>Sessões ilimitadas de
                  pélvica
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>8 sessões de pilates
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>4 sessões de recurso
                  manual
                </li>
                <li className="flex gap-2">
                  <span className="text-rose">✿</span>Prioridade de agenda
                </li>
              </ul>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-ink/10 px-6 py-3 text-sm font-semibold text-ink ring-1 ring-ink/20 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Assinar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="bg-nude">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra">
              Depoimentos
            </p>
            <h2 className="mt-3 max-w-[40ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl">
              Quem já se sentiu segura aqui
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <figure className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5">
              <p className="font-serif text-lg leading-relaxed text-ink">
                "Cheguei com muito medo do parto. Saí entendendo meu corpo e
                sabendo exatamente o que esperar."
              </p>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial1}
                  alt="Mariana S."
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">Mariana S.</p>
                  <p className="text-xs text-ink/55">
                    Gestante no 3º trimestre
                  </p>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5">
              <p className="font-serif text-lg leading-relaxed text-ink">
                "A drenagem mudou minha semana. Voltei a me reconhecer no
                espelho depois do pós-parto."
              </p>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial2}
                  alt="Camila R."
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">Camila R.</p>
                  <p className="text-xs text-ink/55">Puérpera</p>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5">
              <p className="font-serif text-lg leading-relaxed text-ink">
                "Cada sessão parecia feita só para mim. Nunca me senti tão
                cuidada em uma clínica."
              </p>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial3}
                  alt="Beatriz L."
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">Beatriz L.</p>
                  <p className="text-xs text-ink/55">
                    Gestante no 2º trimestre
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Contact / Subscription */}
      <section id="contato" className="bg-creme">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 rounded-[2.5rem] bg-nude p-8 ring-1 ring-ink/5 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra">
                Comece agora
              </p>
              <h2 className="mt-3 max-w-[30ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl">
                Vamos desenhar o seu plano juntas
              </h2>
              <p className="mt-5 max-w-[42ch] text-ink/70">
                Preencha seus dados e escolha o plano que faz sentido para o
                seu momento. Entraremos em contato em até 24 horas.
              </p>
              <div className="mt-8 space-y-3 text-sm text-ink/75">
                <p>✦ Atendimento exclusivo para gestantes e puérperas</p>
                <p>✦ Planos sem fidelidade</p>
                <p>✦ Avaliação inicial inclusa no primeiro mês</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5"
            >
              {formStatus === "sent" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-sage/25 text-2xl text-sage">
                    ✓
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                    Recebemos o seu interesse!
                  </h3>
                  <p className="mt-2 max-w-[32ch] text-sm text-ink/70">
                    Nossa equipe vai entrar em contato em breve para combinar os
                    próximos passos.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60"
                      >
                        Nome
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60"
                        >
                          E-mail
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefone"
                          className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60"
                        >
                          WhatsApp
                        </label>
                        <input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          required
                          className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="plano"
                        className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60"
                      >
                        Plano de interesse
                      </label>
                      <select
                        id="plano"
                        name="plano"
                        required
                        className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2"
                      >
                        <option value="">Selecione um plano</option>
                        <option value="essencial">Essencial — R$249/mês</option>
                        <option value="equilibrio">
                          Equilíbrio — R$429/mês
                        </option>
                        <option value="continuo">Contínuo — R$690/mês</option>
                        <option value="duvida">Ainda tenho dúvidas</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="mensagem"
                        className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={3}
                        className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2"
                        placeholder="Conte um pouco sobre você e o seu momento"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white ring-1 ring-rose transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Quero assinar meu plano
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-creme">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-rose/30">
                  <span className="size-3.5 rounded-full bg-rose" />
                </span>
                <span className="font-serif text-2xl font-semibold">
                  Fisio Fem Clinic
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-creme/70">
                Fisioterapia obstétrica com cuidado individualizado para
                gestantes e puérperas.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
                Fale conosco
              </p>
              <p className="mt-4 text-sm text-creme/85">(11) 4002-8922</p>
              <p className="text-sm text-creme/85">ola@fisiofemclinic.com</p>
              <p className="mt-4 text-sm text-creme/60">
                Rua das Acácias, 128 · Jardins · São Paulo
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-creme/15 pt-6 text-xs text-creme/50 sm:flex-row sm:items-center">
            <span>
              © 2025 Fisio Fem Clinic. Todos os direitos reservados.
            </span>
            <span>Cuidado, segurança e acolhimento.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
