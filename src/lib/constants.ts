export const BRAND_COLORS = {
  primary: '#6f0d44', // Wine color from logo
  secondary: '#8b1155', // Brighter wine
  accent: '#a71466', // Rose wine
  muted: '#d4899b', // Soft rose
  background: '#fff5f8', // Soft rose background
  white: '#ffffff',
  dark: '#2d0d1f', // Dark wine
} as const;

export const NAVIGATION_ITEMS = [
  { 
    title: 'Home',
    href: '/'
  },
  {
    title: 'Sobre',
    subItems: [
      { title: 'Perfil', href: '/profile' },
      { title: 'Clínica', href: '/clinic' },
      { title: 'Cursos', href: '/courses' }
    ]
  },
  {
    title: 'Peles Étnicas',
    href: '/ethnic-skin'
  },
  {
    title: 'Peles Brasileiras',
    href: '/brazilian-skin'
  },
  {
    title: 'Dermatologia Estética',
    href: '/aesthetic'
  },
  {
    title: 'Tratamentos',
    href: '/treatments',
    subItems: [
      { title: 'Fios de PDO', href: '/treatments/fios-pdo' },
      { title: 'Toxina Botulínica', href: '/treatments/toxina-botulinica' },
      { title: 'Preenchimento', href: '/treatments/preenchimento' },
      { title: 'Laser e Tecnologias', href: '/treatments/laser' },
      { title: 'Bioestimuladores', href: '/treatments/bioestimuladores' },
      { title: 'Harmonização Facial', href: '/treatments/harmonizacao-facial' }
    ]
  },
  {
    title: 'Artigos',
    href: '/articles',
    subItems: [
      { title: 'Imprensa', href: '/press' },
      { title: 'Vídeos', href: '/articles/videos' },
      { title: 'Blog', href: '/articles/blog/all' }
    ]
  },
  {
    title: 'Contato',
    href: '/contact',
    subItems: [
      { title: 'Trabalhe Conosco', href: '/contact/careers' },
      { title: 'Agende Sua Consulta', href: '/contact/appointment' },
      { title: 'Localização', href: '/contact/location' }
    ]
  }
] as const;