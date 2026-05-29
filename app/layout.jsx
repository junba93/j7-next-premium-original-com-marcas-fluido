import './globals.css'

export const metadata = {
  title: 'J7 Energia Solar | Energia Solar em Recife e Pernambuco',
  description: 'A J7 Energia Solar desenvolve projetos personalizados de energia solar para residências, empresas, condomínios e propriedades rurais em Pernambuco.',
  keywords: [
    'energia solar Recife',
    'energia solar Pernambuco',
    'energia solar Jaboatão',
    'instalação de energia solar',
    'projeto fotovoltaico',
    'J7 Energia Solar',
    'Junior Barreto'
  ],
  openGraph: {
    title: 'J7 Energia Solar | Energia Solar em Pernambuco',
    description: 'Projetos personalizados, instalação profissional, financiamento facilitado e suporte completo.',
    type: 'website',
    locale: 'pt_BR'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
