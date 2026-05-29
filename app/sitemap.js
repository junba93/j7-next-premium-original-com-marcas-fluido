export default function sitemap() {
  const baseUrl = 'https://j7energiasolar.com.br'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
