import './globals.css'

export const metadata = {
  title: 'J7 Energia Solar | Energia Solar em Pernambuco',
  description: 'Projetos personalizados de energia solar para residências, empresas e propriedades rurais em Pernambuco.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
