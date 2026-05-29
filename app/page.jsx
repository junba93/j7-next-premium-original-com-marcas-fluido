"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  MessageCircle, CalendarDays, CreditCard, ShieldCheck, MapPin,
  Home, Building2, Tractor, Wrench, FileText, Search, ClipboardCheck,
  Zap, ArrowRight, Star, SunMedium
} from "lucide-react"

const phoneNumber = "5581981225438"
const whatsapp = `https://wa.me/${phoneNumber}?text=Ol%C3%A1%2C%20quero%20fazer%20um%20or%C3%A7amento%20de%20energia%20solar`

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function BudgetForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    conta: "",
    tipo: "Residencial",
  })

  function updateField(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function sendToWhatsApp(e) {
    e.preventDefault()

    const message = `Olá, quero fazer um orçamento de energia solar.

Nome: ${form.nome}
Telefone: ${form.telefone}
Cidade: ${form.cidade}
Conta média: ${form.conta}
Tipo de imóvel: ${form.tipo}`

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <form onSubmit={sendToWhatsApp} className="rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
      <h3 className="text-2xl font-black text-blue-950">Solicite sua análise gratuita</h3>
      <p className="mt-2 text-sm text-slate-600">Preencha os dados e envie direto para nosso WhatsApp.</p>

      <div className="mt-6 grid gap-4">
        <input name="nome" value={form.nome} onChange={updateField} required placeholder="Seu nome" className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition duration-300 focus:border-amber-400 focus:ring-4 focus:ring-amber-100" />
        <input name="telefone" value={form.telefone} onChange={updateField} required placeholder="Seu telefone" className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition duration-300 focus:border-amber-400 focus:ring-4 focus:ring-amber-100" />
        <input name="cidade" value={form.cidade} onChange={updateField} required placeholder="Cidade" className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition duration-300 focus:border-amber-400 focus:ring-4 focus:ring-amber-100" />
        <input name="conta" value={form.conta} onChange={updateField} required placeholder="Valor médio da conta de energia" className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition duration-300 focus:border-amber-400 focus:ring-4 focus:ring-amber-100" />
        <select name="tipo" value={form.tipo} onChange={updateField} className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition duration-300 focus:border-amber-400 focus:ring-4 focus:ring-amber-100">
          <option>Residencial</option>
          <option>Comercial</option>
          <option>Rural</option>
          <option>Condomínio</option>
        </select>
      </div>

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-7 py-4 font-black text-white shadow-xl shadow-green-600/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-green-500">
        <MessageCircle size={22} /> Enviar para o WhatsApp
      </button>
    </form>
  )
}

export default function HomePage() {
  const projects = [
    { title: "Usina rural", type: "Sistema em solo", img: "/projeto-rural.jpg" },
    { title: "Residencial", type: "Telhado cerâmico", img: "/projeto-residencial.jpg" },
    { title: "Residencial urbano", type: "Fibrocimento e metálico", img: "/projeto-fibrocimento.jpg" },
    { title: "Projeto residencial", type: "Vista aérea", img: "/projeto-aereo.jpg" },
  ]

  const brands = [
    { name: "Sungrow", img: "/sungrow.jpg" },
    { name: "Solis", img: "/solis.jpg" },
    { name: "Solplanet", img: "/solplanet.png" },
    { name: "Astronergy", img: "/astronergy.png" },
    { name: "DMEGC", img: "/dmegc.png" },
    { name: "OSDA", img: "/osda.png" },
    { name: "LONGi", img: "/longi.png" },
    { name: "Ronma", img: "/ronma.png" },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="relative h-14 w-52">
            <Image src="/logo-j7.png" alt="J7 Energia Solar" fill priority className="object-contain object-left" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-blue-950 lg:flex">
            <a href="#inicio" className="hover:text-amber-500">Início</a>
            <a href="#solucoes" className="hover:text-amber-500">Soluções</a>
            <a href="#quem-somos" className="hover:text-amber-500">Quem Somos</a>
            <a href="#depoimentos" className="hover:text-amber-500">Depoimentos</a>
            <a href="#marcas" className="hover:text-amber-500">Marcas</a>
            <a href="#processo" className="hover:text-amber-500">Como funciona</a>
            <a href="#projetos" className="hover:text-amber-500">Projetos</a>
            <a href="#financiamento" className="hover:text-amber-500">Financiamento</a>
            <a href="#contato" className="hover:text-amber-500">Contato</a>
          </nav>

          <a href={whatsapp} className="hidden rounded-2xl bg-green-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-green-600/25 transition hover:-translate-y-0.5 hover:bg-green-500 md:inline-flex">
            Solicitar orçamento
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image src="/projeto-rural.jpg" alt="Usina solar J7 Energia Solar" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/25" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid min-h-[820px] max-w-7xl items-center px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-2xl text-white">
            <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-amber-300 backdrop-blur">
              <SunMedium size={18} /> Energia solar em Pernambuco
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl font-black leading-tight md:text-6xl">
              Economia, segurança e energia limpa para sua casa ou empresa
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Projetos personalizados, instalação profissional, financiamento facilitado e suporte completo do primeiro contato ao pós-venda.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsapp} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-7 py-4 font-black text-white shadow-xl shadow-green-600/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-green-500">
                <MessageCircle size={22} /> Solicitar orçamento
              </a>
              <a href="#projetos" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">
                Ver projetos reais <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75 }} className="mt-10 hidden overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur lg:block">
            <div className="relative h-[455px] overflow-hidden rounded-[1.5rem]">
              <Image src="/projeto-residencial.jpg" alt="Projeto residencial J7" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative mx-auto -mt-20 max-w-6xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl bg-blue-950 text-white shadow-2xl md:grid-cols-4">
            {[
              [CalendarDays, "Instalação", "em até 30 dias"],
              [CreditCard, "Financiamento", "facilitado"],
              [ShieldCheck, "Equipamentos", "de alta qualidade"],
              [MapPin, "Atendimento", "em Pernambuco"],
            ].map(([Icon, title, desc], i) => (
              <div key={i} className="flex items-center gap-4 border-white/10 p-6 md:border-r">
                <Icon className="text-amber-400" size={34} />
                <div>
                  <p className="font-black">{title}</p>
                  <p className="text-sm text-white/75">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="solucoes" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="text-center">
          <motion.p variants={fadeUp} className="text-sm font-black uppercase tracking-widest text-amber-500">Soluções J7</motion.p>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-black text-blue-950 md:text-5xl">Soluções para você economizar mais</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Home, "Energia Solar Residencial", "Economia e sustentabilidade para sua casa com energia limpa e renovável."],
            [Building2, "Energia Solar Comercial", "Reduza custos e aumente a eficiência da sua empresa."],
            [Tractor, "Energia Solar Rural", "Soluções completas para propriedades rurais, sítios e fazendas."],
            [Wrench, "Limpeza e Manutenção", "Mais desempenho, segurança e vida útil para o seu sistema."],
          ].map(([Icon, title, text], i) => (
            <motion.div key={i} variants={fadeUp} className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-blue-950 transition group-hover:bg-amber-100 group-hover:text-amber-600">
                <Icon size={34} />
              </div>
              <h3 className="mt-6 text-xl font-black text-blue-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>



      <section id="quem-somos" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <div className="relative h-[460px]">
              <Image src="/projeto-residencial.jpg" alt="Projeto residencial J7 Energia Solar" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <p className="text-sm font-black uppercase tracking-widest text-amber-300">J7 Energia Solar</p>
                <h2 className="mt-2 text-3xl font-black">Energia solar com compromisso técnico e atendimento próximo</h2>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-black uppercase tracking-widest text-amber-500">Quem somos</motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-black text-blue-950 md:text-5xl">A J7 Energia Solar une experiência, tecnologia e compromisso com cada cliente</motion.h2>
            <motion.p variants={fadeUp} className="mt-6 leading-8 text-slate-600">
              A J7 Energia Solar é uma integradora especializada em projetos fotovoltaicos em Pernambuco, atendendo residências, empresas, condomínios e propriedades rurais com soluções completas, seguras e personalizadas.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 leading-8 text-slate-600">
              À frente da empresa está <strong className="text-blue-950">Junior Barreto</strong>, profissional com formação técnica e experiência nas áreas de tecnologia, eletrotécnica e energia solar. Sua atuação combina visão técnica, gestão e compromisso com o crescimento da geração distribuída no estado.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["+5 anos", "de atuação no setor solar"],
                ["Pernambuco", "atendimento regional"],
                ["Pós-venda", "monitoramento e suporte"],
                ["Projetos", "residenciais, comerciais e rurais"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <p className="text-2xl font-black text-blue-950">{title}</p>
                  <p className="mt-2 text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section id="depoimentos" className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="mx-auto max-w-3xl text-center">
            <motion.p variants={fadeUp} className="text-sm font-black uppercase tracking-widest text-amber-500">Depoimentos</motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-black text-blue-950 md:text-5xl">O que nossos clientes dizem</motion.h2>
            <motion.p variants={fadeUp} className="mt-5 leading-7 text-slate-600">
              Clientes que confiaram na J7 Energia Solar para economizar com segurança, qualidade e acompanhamento profissional.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Carlos", "Recife", "Atendimento excelente do início ao fim. Instalação rápida, equipe organizada e suporte sempre que precisamos."],
              ["Mailson", "Escada", "Fomos muito bem atendidos pela J7. Todo o processo foi explicado de forma clara e transparente."],
              ["Cláudia", "Recife", "Conseguimos reduzir significativamente nossos custos com energia. Recomendo a empresa pela qualidade do serviço."],
              ["Paulo", "Bezerros", "Projeto bem dimensionado, instalação dentro do prazo e excelente acompanhamento após a entrega."],
              ["Helena", "Jaboatão dos Guararapes", "Desde o primeiro contato até a instalação, tudo foi conduzido com profissionalismo e atenção aos detalhes."],
              ["Adamastor", "Ipojuca", "Ótimo atendimento, equipamentos de qualidade e uma equipe que realmente entende do assunto."],
            ].map(([name, city, text], i) => (
              <motion.div key={name} variants={fadeUp} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-lg text-amber-400">★★★★★</div>
                <p className="mt-5 leading-7 text-slate-600">“{text}”</p>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-black text-blue-950">{name}</p>
                  <p className="text-sm text-slate-500">{city} - PE</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-12 grid gap-4 rounded-[2rem] bg-blue-950 p-8 text-white shadow-2xl md:grid-cols-5">
            {[
              "Atendimento em todo Pernambuco",
              "Projetos residenciais, comerciais e rurais",
              "Financiamento facilitado",
              "Equipamentos de alta qualidade",
              "Suporte e pós-venda especializado",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/8 p-4 text-center text-sm font-bold text-white/85">
                ✅ {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="marcas" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="text-center">
          <motion.p variants={fadeUp} className="text-sm font-black uppercase tracking-widest text-amber-500">Marcas que trabalhamos</motion.p>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-black text-blue-950 md:text-5xl">Equipamentos de alta qualidade</motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
            Trabalhamos com marcas reconhecidas no mercado para garantir desempenho, segurança e durabilidade em cada projeto.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group grid h-32 place-items-center rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <Image
                src={brand.img}
                alt={brand.name}
                width={240}
                height={90}
                className="max-h-20 w-auto object-contain transition duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="processo" className="bg-blue-950 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-amber-400">Como funciona</p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">Do projeto à economia em 5 passos</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {[
              [FileText, "Envio da conta", "Você envia sua conta para análise gratuita."],
              [Search, "Análise do consumo", "Identificamos a melhor solução para você."],
              [ClipboardCheck, "Projeto personalizado", "Sistema sob medida para sua necessidade."],
              [Wrench, "Instalação profissional", "Execução com segurança e qualidade."],
              [Zap, "Sistema gerando economia", "Após aprovação, seu sistema começa a gerar economia."],
            ].map(([Icon, title, text], i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-3xl bg-white/8 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-400 text-sm font-black text-blue-950">{i + 1}</span>
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-amber-500">Projetos reais da J7</p>
            <h2 className="mt-2 text-3xl font-black text-blue-950 md:text-5xl">Instalações que entregam segurança, estética e performance</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group overflow-hidden rounded-[2rem] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-[390px] overflow-hidden">
                  <Image src={project.img} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-7 text-white">
                    <p className="text-sm font-black uppercase tracking-widest text-amber-300">{project.type}</p>
                    <h3 className="mt-1 text-2xl font-black">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="atuacao" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-sm font-black uppercase tracking-widest text-amber-500">Números da J7</motion.p>
              <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-black text-blue-950 md:text-5xl">Atuação sólida em Pernambuco</motion.h2>
              <motion.p variants={fadeUp} className="mt-5 leading-7 text-slate-600">
                A J7 Energia Solar atende clientes de diferentes perfis, com projetos desenvolvidos para economia, segurança e desempenho.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["+5", "anos de experiência"],
                  ["+100", "projetos executados"],
                  ["+1 MWp", "em sistemas projetados"],
                  ["+20", "cidades atendidas"],
                ].map(([number, label]) => (
                  <div key={label} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <p className="text-4xl font-black text-blue-950">{number}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: "easeOut" }} className="rounded-[2rem] bg-blue-950 p-8 text-white shadow-2xl">
              <p className="text-sm font-black uppercase tracking-widest text-amber-400">Mapa de atuação</p>
              <h3 className="mt-3 text-3xl font-black">Atendimento em várias regiões de Pernambuco</h3>
              <p className="mt-4 leading-7 text-white/70">
                Atuamos em cidades estratégicas do estado, oferecendo projetos residenciais, comerciais, rurais e serviços de manutenção.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Recife",
                  "Jaboatão dos Guararapes",
                  "Olinda",
                  "Paulista",
                  "Goiana",
                  "Ipojuca",
                  "Escada",
                  "Gravatá",
                  "Bezerros",
                  "Caruaru",
                ].map((city) => (
                  <div key={city} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/85">
                    📍 {city}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="financiamento" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-amber-500">Financiamento facilitado</p>
          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-5xl">Financie seu sistema solar</h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">Parcele seu projeto através de bancos parceiros e comece a economizar com energia limpa e renovável.</p>
          <a href={whatsapp} className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-green-600 px-7 py-4 font-black text-white shadow-xl shadow-green-600/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-green-500">
            Simular financiamento <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { name: "Santander", logo: "/logo-santander.png" },
            { name: "BV", logo: "/logo-bv.png" },
            { name: "Solfácil", logo: "/logo-solfacil.png" },
            { name: "Outros parceiros", logo: null },
          ].map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="grid h-32 place-items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={230}
                  height={90}
                  className="max-h-20 w-auto object-contain"
                />
              ) : (
                <span className="text-2xl font-black text-blue-950">Outros parceiros</span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Atendimento técnico", "Acompanhamento do primeiro contato ao pós-venda."],
            ["Equipamentos de qualidade", "Projetos com marcas confiáveis e tecnologia de alto desempenho."],
            ["Instalação segura", "Execução com padrão técnico e foco em confiabilidade."],
            ["Suporte após instalação", "Monitoramento e orientação sempre que necessário."],
          ].map(([title, text], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Star className="text-amber-400" />
              <h3 className="mt-5 font-black text-blue-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contato" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-blue-950 shadow-2xl lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image src="/projeto-aereo.jpg" alt="Projeto J7 Energia Solar" fill className="object-cover" />
            <div className="absolute inset-0 bg-blue-950/40" />
          </div>
          <div className="bg-slate-50 p-6 md:p-10">
            <BudgetForm />
          </div>
        </div>
      </section>

      <footer className="bg-blue-950 px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <div className="relative h-16 w-52">
              <Image src="/logo-j7.png" alt="J7 Energia Solar" fill className="object-contain object-left brightness-0 invert" />
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">Energia solar com segurança, economia e suporte profissional em Pernambuco.</p>
          </div>
          <div><p className="font-black">Links rápidos</p><p className="mt-3 text-sm text-white/70">Início<br/>Soluções<br/>Quem Somos<br/>Depoimentos<br/>Marcas<br/>Projetos<br/>Financiamento</p></div>
          <div><p className="font-black">Serviços</p><p className="mt-3 text-sm text-white/70">Residencial<br/>Comercial<br/>Rural<br/>Manutenção</p></div>
          <div><p className="font-black">Fale conosco</p><p className="mt-3 text-sm text-white/70">(81) 98122-5438<br/>@j7.energia<br/>Pernambuco</p></div>
        </div>
      </footer>

      <a href={whatsapp} className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full bg-green-600 text-white shadow-2xl shadow-green-600/30 transition hover:scale-110">
        <MessageCircle size={32} />
      </a>
    </main>
  )
}
