import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import cuidadoMaos from "@/assets/cuidado-maos.jpg";
import heroAsset from "@/assets/fisiofemclinic-maternidade.jpg.asset.json";
import logoAsset from "@/assets/fisiofemclinic-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "FisioFemClinic — Fisioterapia Obstétrica em Marabá",
      },
      {
        name: "description",
        content:
          "Cuidado individualizado em fisioterapia pélvica, Pilates e terapias manuais para gestantes e puérperas em Marabá, Pará.",
      },
      { property: "og:title", content: "FisioFemClinic" },
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
            <img
              src={logoAsset.url}
              alt="FisioFemClinic"
              className="h-14 w-36 object-contain sm:h-16 sm:w-44"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#servicos" className="hover:text-ink">
              Serviços
            </a>
            <a href="#cuidado" className="hover:text-ink">
              Cuidado
            </a>
            <a href="#planos" className="hover:text-ink">
              Valores
            </a>
            <a href="#depoimentos" className="hover:text-ink">
              Depoimentos
            </a>
          </nav>
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-creme transition-transform duration-300 hover:-translate-y-0.5"
          >
            Agendar
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
                FisioFem: Onde o cuidado com o seu corpo encontra o amor da sua
                maternidade
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
                  Conhecer valores
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
                  Opções avulsas e pacotes
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="absolute -right-6 -top-6 -z-0 size-40 rounded-full bg-rose/20" />
              <div className="absolute -left-8 bottom-8 -z-0 size-28 rounded-full bg-sage/20" />
              <div className="relative z-10">
                <img
                  src={heroAsset.url}
                  alt="Gestante acariciando a barriga em um campo florido"
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
                      Atendimento humanizado e acolhedor
                    </strong>{" "}
                    — escuta atenta e respeito às necessidades de cada mulher.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="bg-rose">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra">
              Serviços e valores
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white text-balance lg:text-5xl">
              Escolha o cuidado ideal para o seu momento
            </h2>
            <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-white/80 text-pretty">
              Valores acessíveis, com opções avulsas, ciclos, pacotes e planos
              mensais para gestantes e puérperas.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-creme/95 px-6 py-5 text-center ring-1 ring-white/50">
            <p className="text-sm font-semibold text-ink">
              Avaliação fisioterapêutica pélvica inicial — R$ 120,00
            </p>
            <p className="mt-1 text-xs text-ink/60">
              Cobrada separadamente e não incluída nos ciclos ou pacotes.
            </p>
          </div>
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2">
            <article className="flex flex-col rounded-[2rem] bg-creme/95 p-8 ring-1 ring-white/40">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terra">Atendimento individual</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">Fisioterapia pélvica</h3>
              <dl className="mt-6 flex-1 divide-y divide-ink/10 text-sm text-ink/75">
                <div className="flex items-center justify-between gap-4 py-3"><dt>Sessão avulsa</dt><dd className="font-semibold text-ink">R$ 350,00</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>Ciclo de 4 sessões</dt><dd className="font-semibold text-ink">R$ 1.380,00</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>Ciclo de 8 sessões</dt><dd className="font-semibold text-ink">R$ 2.720,00</dd></div>
              </dl>
              <a href="#contato" className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5">Agendar fisioterapia</a>
            </article>

            <article className="flex flex-col rounded-[2rem] bg-ink p-8 ring-1 ring-ink">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose">Aulas em grupo</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-creme">Pilates para gestantes e puérperas</h3>
              <dl className="mt-6 flex-1 divide-y divide-creme/15 text-sm text-creme/80">
                <div className="flex items-center justify-between gap-4 py-3"><dt>Aula avulsa</dt><dd className="font-semibold text-creme">R$ 110,00</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>1 aula por semana</dt><dd className="font-semibold text-creme">R$ 420,00/mês</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>2 aulas por semana</dt><dd className="font-semibold text-creme">R$ 830,00/mês</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>3 aulas por semana</dt><dd className="font-semibold text-creme">R$ 1.230,00/mês</dd></div>
              </dl>
              <a href="#contato" className="mt-7 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5">Escolher plano de Pilates</a>
            </article>

            <article className="flex flex-col rounded-[2rem] bg-creme/95 p-8 ring-1 ring-white/40">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">Bem-estar materno</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">Drenagem linfática materna</h3>
              <dl className="mt-6 flex-1 divide-y divide-ink/10 text-sm text-ink/75">
                <div className="flex items-center justify-between gap-4 py-3"><dt>Sessão avulsa</dt><dd className="font-semibold text-ink">R$ 160,00</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>Pacote com 5 sessões</dt><dd className="font-semibold text-ink">R$ 750,00</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>Pacote com 10 sessões</dt><dd className="font-semibold text-ink">R$ 1.400,00</dd></div>
              </dl>
              <a href="#contato" className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5">Agendar drenagem</a>
            </article>

            <article className="flex flex-col rounded-[2rem] bg-creme/95 p-8 ring-1 ring-white/40">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terra">Relaxamento</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">Terapia manual relaxante</h3>
              <dl className="mt-6 flex-1 divide-y divide-ink/10 text-sm text-ink/75">
                <div className="flex items-center justify-between gap-4 py-3"><dt>Sessão avulsa</dt><dd className="font-semibold text-ink">R$ 180,00</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>Pacote com 4 sessões</dt><dd className="font-semibold text-ink">R$ 700,00</dd></div>
                <div className="flex items-center justify-between gap-4 py-3"><dt>Pacote com 8 sessões</dt><dd className="font-semibold text-ink">R$ 1.360,00</dd></div>
              </dl>
              <a href="#contato" className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5">Agendar terapia manual</a>
            </article>
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
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="text-sm font-semibold text-ink">Mariana S.</p>
                  <p className="text-xs text-ink/55">
                    Gestante no 3º trimestre
                  </p>
              </figcaption>
            </figure>
            <figure className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5">
              <p className="font-serif text-lg leading-relaxed text-ink">
                "A drenagem mudou minha semana. Voltei a me reconhecer no
                espelho depois do pós-parto."
              </p>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="text-sm font-semibold text-ink">Camila R.</p>
                  <p className="text-xs text-ink/55">Puérpera</p>
              </figcaption>
            </figure>
            <figure className="rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5">
              <p className="font-serif text-lg leading-relaxed text-ink">
                "Cada sessão parecia feita só para mim. Nunca me senti tão
                cuidada em uma clínica."
              </p>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="text-sm font-semibold text-ink">Beatriz L.</p>
                  <p className="text-xs text-ink/55">
                    Gestante no 2º trimestre
                  </p>
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
                 Vamos escolher o cuidado ideal para você
              </h2>
              <p className="mt-5 max-w-[42ch] text-ink/70">
                 Preencha seus dados e escolha o serviço que faz sentido para o
                 seu momento. Entraremos em contato em até 24 horas.
              </p>
              <div className="mt-8 space-y-3 text-sm text-ink/75">
                <p>✦ Atendimento exclusivo para gestantes e puérperas</p>
                 <p>✦ Opções avulsas, ciclos, pacotes e planos mensais</p>
                 <p>✦ Avaliação pélvica inicial cobrada separadamente</p>
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
                         Serviço de interesse
                      </label>
                      <select
                        id="plano"
                        name="plano"
                        required
                        className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2"
                      >
                         <option value="">Selecione uma opção</option>
                         <option value="avaliacao">Avaliação pélvica inicial</option>
                         <option value="fisioterapia">Fisioterapia pélvica</option>
                         <option value="pilates">Pilates em grupo</option>
                         <option value="drenagem">Drenagem linfática materna</option>
                         <option value="terapia-manual">Terapia manual relaxante</option>
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
                     Quero agendar meu cuidado
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
               <img
                 src={logoAsset.url}
                 alt="FisioFemClinic"
                 className="h-24 w-52 object-contain object-left"
               />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-creme/70">
                Fisioterapia obstétrica com cuidado individualizado para
                gestantes e puérperas.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
                Fale conosco
              </p>
               <p className="mt-4 text-sm text-creme/85">(94) 9 9786-1238</p>
              <p className="text-sm text-creme/85">ola@fisiofemclinic.com</p>
              <p className="mt-4 text-sm text-creme/60">
                 R. Cinco de Abril - Velha Marabá, Marabá - PA, 68500-040
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-creme/15 pt-6 text-xs text-creme/50 sm:flex-row sm:items-center">
            <span>
               © 2026 FisioFemClinic. Todos os direitos reservados.
            </span>
            <span>Cuidado, segurança e acolhimento.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
