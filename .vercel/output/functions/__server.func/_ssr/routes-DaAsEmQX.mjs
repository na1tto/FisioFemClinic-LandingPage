import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DaAsEmQX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cuidado_maos_default = "/assets/cuidado-maos-CCBDEcic.jpg";
var fisiofemclinic_maternidade_default = "/assets/fisiofemclinic-maternidade-CkAvIaNM.jpg";
var fisiofemclinic_logo_default = "/assets/fisiofemclinic-logo-Bv530hHO.png";
function Index() {
	const [formStatus, setFormStatus] = (0, import_react.useState)("idle");
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormStatus("sent");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "font-sans text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "bg-creme",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: fisiofemclinic_logo_default,
								alt: "FisioFemClinic",
								className: "h-14 w-36 object-contain sm:h-16 sm:w-44"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#servicos",
									className: "hover:text-ink",
									children: "Serviços"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cuidado",
									className: "hover:text-ink",
									children: "Cuidado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#planos",
									className: "hover:text-ink",
									children: "Valores"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#depoimentos",
									className: "hover:text-ink",
									children: "Depoimentos"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contato",
							className: "inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-creme transition-transform duration-300 hover:-translate-y-0.5",
							children: "Agendar"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-creme",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-12 lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-sage/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-sage",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-sage" }), "Fisioterapia obstétrica"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-6 max-w-[20ch] font-serif text-5xl font-medium leading-tight tracking-tight text-ink text-balance lg:text-6xl",
									children: "FisioFem: Onde o cuidado com o seu corpo encontra o amor da sua maternidade"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-[48ch] text-base leading-relaxed text-ink/70 text-pretty lg:text-lg",
									children: "Cuidamos da sua pelve e do seu corpo com a delicadeza que o seu momento pede. Acompanhamento individual para gestantes e puérperas, em um espaço pensado para você."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#planos",
										className: "inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white ring-1 ring-rose transition-transform duration-300 hover:-translate-y-0.5",
										children: ["Conhecer valores", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0",
											children: "→"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#cuidado",
										className: "inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-ink ring-1 ring-ink/20 transition-transform duration-300 hover:-translate-y-0.5",
										children: "Como cuidamos"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-4 text-sm text-ink/60 sm:gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-terra" }), "Atendimento individual"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-sage" }), "Equipe especializada"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-rose" }), "Opções avulsas e pacotes"]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 -z-0 size-40 rounded-full bg-rose/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-8 bottom-8 -z-0 size-28 rounded-full bg-sage/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: fisiofemclinic_maternidade_default,
										alt: "Gestante acariciando a barriga em um campo florido",
										width: 1024,
										height: 1280,
										className: "aspect-[4/5] w-full rounded-[2.5rem] object-cover outline outline-1 -outline-offset-1 outline-ink/5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute -bottom-6 left-4 flex items-center gap-3 rounded-[1.75rem] bg-white/70 px-5 py-4 ring-1 ring-ink/5 lg:left-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-10 items-center justify-center rounded-full bg-sage/25 font-serif text-sage",
											children: "✿"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-ink",
											children: "+1.200 gestantes"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-ink/55",
											children: "cuidadas com carinho"
										})] })]
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "servicos",
				className: "bg-nude",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-terra",
							children: "Nossos cuidados"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-[40ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl",
							children: "Três formas de cuidar do seu corpo em cada fase"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-5 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-12 items-center justify-center rounded-full bg-rose/25 font-serif text-xl text-rose",
										children: "◍"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-serif text-2xl font-semibold text-ink",
										children: "Fisioterapia pélvica"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ink/70",
										children: "Alívio de desconfortos, fortalecimento e preparação segura para o parto com sessões individualizadas."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contato",
										className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-all hover:gap-2.5",
										children: ["Agendar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0",
											children: "→"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-12 items-center justify-center rounded-full bg-sage/25 font-serif text-xl text-sage",
										children: "❋"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-serif text-2xl font-semibold text-ink",
										children: "Pilates para gestantes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ink/70",
										children: "Movimentos suaves que sustentam a coluna ao longo da gravidez e aceleram a recuperação pós-parto."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contato",
										className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-all hover:gap-2.5",
										children: ["Agendar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0",
											children: "→"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-12 items-center justify-center rounded-full bg-terra/25 font-serif text-xl text-terra",
										children: "☾"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-serif text-2xl font-semibold text-ink",
										children: "Recursos manuais"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ink/70",
										children: "Massagem relaxante e drenagem linfática para reduzir inchaço, tensões e o peso do dia a dia."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contato",
										className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-all hover:gap-2.5",
										children: ["Agendar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0",
											children: "→"
										})]
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cuidado",
				className: "bg-creme",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-2 lg:order-1 lg:col-span-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cuidado_maos_default,
								alt: "Fisioterapeuta apoiando a barriga de uma gestante com delicadeza",
								width: 1024,
								height: 1024,
								loading: "lazy",
								className: "aspect-square w-full rounded-[2.5rem] object-cover outline outline-1 -outline-offset-1 outline-ink/5"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "order-1 lg:order-2 lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-sage",
									children: "Cuidado individualizado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-[40ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl",
									children: "Nenhuma gestação é igual à outra — e o cuidado também não"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-[48ch] text-base leading-relaxed text-ink/70 text-pretty lg:text-lg",
									children: "Cada avaliação começa com uma conversa longa. Ajustamos cada sessão ao seu trimestre, à sua história e ao que seu corpo está pedindo naquele dia."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-8 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-rose/25 text-xs text-rose",
												children: "1"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm text-ink/75",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "font-semibold text-ink",
														children: "Avaliação inicial aprofundada"
													}),
													" ",
													"— história, exames e objetivo pessoal."
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-sage/25 text-xs text-sage",
												children: "2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm text-ink/75",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "font-semibold text-ink",
													children: "Plano no seu ritmo"
												}), " — frequência e técnica ajustadas a cada semana."]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-terra/25 text-xs text-terra",
												children: "3"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm text-ink/75",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "font-semibold text-ink",
														children: "Atendimento humanizado e acolhedor"
													}),
													" ",
													"— escuta atenta e respeito às necessidades de cada mulher."
												]
											})]
										})
									]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "planos",
				className: "bg-rose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-terra",
									children: "Serviços e valores"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-serif text-4xl font-medium tracking-tight text-white text-balance lg:text-5xl",
									children: "Escolha o cuidado ideal para o seu momento"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-[48ch] text-base leading-relaxed text-white/80 text-pretty",
									children: "Valores acessíveis, com opções avulsas, ciclos, pacotes e planos mensais para gestantes e puérperas."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-10 max-w-3xl rounded-2xl bg-creme/95 px-6 py-5 text-center ring-1 ring-white/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-ink",
								children: "Avaliação fisioterapêutica pélvica inicial — R$ 120,00"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-ink/60",
								children: "Cobrada separadamente e não incluída nos ciclos ou pacotes."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid items-stretch gap-5 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-[2rem] bg-creme/95 p-8 ring-1 ring-white/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-[0.16em] text-terra",
											children: "Atendimento individual"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-2xl font-semibold text-ink",
											children: "Fisioterapia pélvica"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-6 flex-1 divide-y divide-ink/10 text-sm text-ink/75",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Sessão avulsa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 350,00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Ciclo de 4 sessões" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 1.380,00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Ciclo de 8 sessões" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 2.720,00"
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contato",
											className: "mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5",
											children: "Agendar fisioterapia"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-[2rem] bg-ink p-8 ring-1 ring-ink",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-[0.16em] text-rose",
											children: "Aulas em grupo"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-2xl font-semibold text-creme",
											children: "Pilates para gestantes e puérperas"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-6 flex-1 divide-y divide-creme/15 text-sm text-creme/80",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Aula avulsa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-creme",
														children: "R$ 110,00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "1 aula por semana" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-creme",
														children: "R$ 420,00/mês"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "2 aulas por semana" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-creme",
														children: "R$ 830,00/mês"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "3 aulas por semana" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-creme",
														children: "R$ 1.230,00/mês"
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contato",
											className: "mt-7 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5",
											children: "Escolher plano de Pilates"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-[2rem] bg-creme/95 p-8 ring-1 ring-white/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-[0.16em] text-sage",
											children: "Bem-estar materno"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-2xl font-semibold text-ink",
											children: "Drenagem linfática materna"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-6 flex-1 divide-y divide-ink/10 text-sm text-ink/75",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Sessão avulsa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 160,00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Pacote com 5 sessões" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 750,00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Pacote com 10 sessões" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 1.400,00"
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contato",
											className: "mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5",
											children: "Agendar drenagem"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-[2rem] bg-creme/95 p-8 ring-1 ring-white/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-[0.16em] text-terra",
											children: "Relaxamento"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-2xl font-semibold text-ink",
											children: "Terapia manual relaxante"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-6 flex-1 divide-y divide-ink/10 text-sm text-ink/75",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Sessão avulsa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 180,00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Pacote com 4 sessões" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 700,00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Pacote com 8 sessões" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "font-semibold text-ink",
														children: "R$ 1.360,00"
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contato",
											className: "mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-creme transition-transform duration-300 hover:-translate-y-0.5",
											children: "Agendar terapia manual"
										})
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "depoimentos",
				className: "bg-nude",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-terra",
							children: "Depoimentos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-[40ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl",
							children: "Quem já se sentiu segura aqui"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-5 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-lg leading-relaxed text-ink",
									children: "\"Cheguei com muito medo do parto. Saí entendendo meu corpo e sabendo exatamente o que esperar.\""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 border-t border-ink/10 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-ink",
										children: "Mariana S."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-ink/55",
										children: "Gestante no 3º trimestre"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-lg leading-relaxed text-ink",
									children: "\"A drenagem mudou minha semana. Voltei a me reconhecer no espelho depois do pós-parto.\""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 border-t border-ink/10 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-ink",
										children: "Camila R."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-ink/55",
										children: "Puérpera"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-lg leading-relaxed text-ink",
									children: "\"Cada sessão parecia feita só para mim. Nunca me senti tão cuidada em uma clínica.\""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 border-t border-ink/10 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-ink",
										children: "Beatriz L."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-ink/55",
										children: "Gestante no 2º trimestre"
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contato",
				className: "bg-creme",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 rounded-[2.5rem] bg-nude p-8 ring-1 ring-ink/5 lg:grid-cols-2 lg:p-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-terra",
								children: "Comece agora"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-[30ch] font-serif text-4xl font-medium tracking-tight text-ink text-balance lg:text-5xl",
								children: "Vamos escolher o cuidado ideal para você"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-[42ch] text-ink/70",
								children: "Preencha seus dados e escolha o serviço que faz sentido para o seu momento. Entraremos em contato em até 24 horas."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-3 text-sm text-ink/75",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✦ Atendimento exclusivo para gestantes e puérperas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✦ Opções avulsas, ciclos, pacotes e planos mensais" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✦ Avaliação pélvica inicial cobrada separadamente" })
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							onSubmit: handleSubmit,
							className: "rounded-[2rem] bg-creme p-8 ring-1 ring-ink/5",
							children: formStatus === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center py-10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-14 items-center justify-center rounded-full bg-sage/25 text-2xl text-sage",
										children: "✓"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-serif text-2xl font-semibold text-ink",
										children: "Recebemos o seu interesse!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-[32ch] text-sm text-ink/70",
										children: "Nossa equipe vai entrar em contato em breve para combinar os próximos passos."
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "nome",
										className: "block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60",
										children: "Nome"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "nome",
										name: "nome",
										type: "text",
										required: true,
										className: "mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2",
										placeholder: "Seu nome completo"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "email",
											className: "block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60",
											children: "E-mail"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "email",
											name: "email",
											type: "email",
											required: true,
											className: "mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2",
											placeholder: "seu@email.com"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "telefone",
											className: "block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60",
											children: "WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "telefone",
											name: "telefone",
											type: "tel",
											required: true,
											className: "mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2",
											placeholder: "(11) 99999-9999"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "plano",
										className: "block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60",
										children: "Serviço de interesse"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "plano",
										name: "plano",
										required: true,
										className: "mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Selecione uma opção"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "avaliacao",
												children: "Avaliação pélvica inicial"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "fisioterapia",
												children: "Fisioterapia pélvica"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "pilates",
												children: "Pilates em grupo"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "drenagem",
												children: "Drenagem linfática materna"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "terapia-manual",
												children: "Terapia manual relaxante"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "duvida",
												children: "Ainda tenho dúvidas"
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "mensagem",
										className: "block text-xs font-semibold uppercase tracking-[0.1em] text-ink/60",
										children: "Mensagem"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "mensagem",
										name: "mensagem",
										rows: 3,
										className: "mt-1.5 w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm text-ink outline-none ring-rose/30 transition focus:border-rose focus:ring-2",
										placeholder: "Conte um pouco sobre você e o seu momento"
									})] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "mt-6 w-full rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white ring-1 ring-rose transition-transform duration-300 hover:-translate-y-0.5",
								children: "Quero agendar meu cuidado"
							})] })
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-ink text-creme",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-16 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: fisiofemclinic_logo_default,
							alt: "FisioFemClinic",
							className: "h-24 w-52 object-contain object-left"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed text-creme/70",
							children: "Fisioterapia obstétrica com cuidado individualizado para gestantes e puérperas."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-rose",
									children: "Fale conosco"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-creme/85",
									children: "(94) 9 9786-1238"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-creme/85",
									children: "ola@fisiofemclinic.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-creme/60",
									children: "R. Cinco de Abril - Velha Marabá, Marabá - PA, 68500-040"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-creme/15 pt-6 text-xs text-creme/50 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 FisioFemClinic. Todos os direitos reservados." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cuidado, segurança e acolhimento." })]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
