import { Calendar, ArrowRight, TrendingUp, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NoticiasPage() {
  const featuredNews = {
    id: 1,
    title: "Colombia Lidera la Implementación de Nuevas Normativas RAEE en Latinoamérica",
    excerpt:
      "El país se convierte en pionero con la adopción de regulaciones más estrictas para el reciclaje de residuos electrónicos.",
    date: "18 de Marzo, 2024",
    category: "Legislación",
    image: "/colombia-raee-regulations-latinamerica-leadership.jpg",
    trending: true,
  }

  const news = [
    {
      id: 2,
      title: "Nuevo Centro de Reciclaje Abre en Medellín con Tecnología de Vanguardia",
      excerpt: "La instalación procesará 50,000 dispositivos electrónicos al mes utilizando IA y robótica avanzada.",
      date: "16 de Marzo, 2024",
      category: "Tecnología",
      image: "/medellin-recycling-center-ai-robotics.jpg",
    },
    {
      id: 3,
      title: "Estudio Revela Aumento del 40% en Reciclaje de Smartphones en 2024",
      excerpt:
        "Los consumidores colombianos muestran mayor conciencia ambiental en la gestión de dispositivos móviles.",
      date: "14 de Marzo, 2024",
      category: "Estadísticas",
      image: "/smartphone-recycling-statistics-2024-colombia.jpg",
    },
    {
      id: 4,
      title: "Alianza Estratégica Entre GreenCycle y Principales Fabricantes de Electrónicos",
      excerpt: "La colaboración facilitará el reciclaje directo desde los puntos de venta de las marcas participantes.",
      date: "12 de Marzo, 2024",
      category: "Empresas",
      image: "/greencycle-alliance-electronics-manufacturers.jpg",
    },
    {
      id: 5,
      title: "Innovación en Recuperación de Tierras Raras Revoluciona la Industria",
      excerpt: "Nueva tecnología permite extraer el 95% de elementos críticos de dispositivos electrónicos desechados.",
      date: "10 de Marzo, 2024",
      category: "Innovación",
      image: "/rare-earth-recovery-innovation-technology.jpg",
    },
    {
      id: 6,
      title: "Programa Educativo Llega a 500 Escuelas Colombianas",
      excerpt: "Iniciativa nacional enseña a estudiantes sobre la importancia del reciclaje electrónico responsable.",
      date: "8 de Marzo, 2024",
      category: "Educación",
      image: "/educational-program-schools-electronic-recycling.jpg",
    },
    {
      id: 7,
      title: "Récord Histórico: 2 Millones de Dispositivos Reciclados en un Mes",
      excerpt: "La plataforma GreenCycle alcanza una cifra sin precedentes gracias al crecimiento de usuarios activos.",
      date: "6 de Marzo, 2024",
      category: "Logros",
      image: "/record-2-million-devices-recycled-greencycle.jpg",
    },
    {
      id: 8,
      title: "Inversión de 200 Mil Millones de Pesos en Infraestructura de Reciclaje",
      excerpt: "El gobierno anuncia un plan ambicioso para modernizar las instalaciones de tratamiento de RAEE.",
      date: "4 de Marzo, 2024",
      category: "Inversión",
      image: "/200-billion-pesos-investment-recycling-infrastructure.jpg",
    },
    {
      id: 9,
      title: "Certificación Internacional Reconoce Excelencia en Reciclaje Colombiano",
      excerpt: "Organizaciones colombianas reciben reconocimiento por sus prácticas sostenibles en gestión de e-waste.",
      date: "2 de Marzo, 2024",
      category: "Reconocimientos",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-white">
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <Button variant="ghost" className="text-eco-600 hover:text-eco-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-eco-900 mb-6">Noticias y Actualidad</h1>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto mb-12">
            Mantente al día con las últimas noticias sobre reciclaje electrónico, sostenibilidad y tecnología verde.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-eco-600 mr-2" />
              <h2 className="text-2xl font-bold text-eco-900">Noticia Destacada</h2>
            </div>
          </div>

          <Card className="overflow-hidden shadow-2xl border-0">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-eco-100 text-eco-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredNews.category}
                  </span>
                  {featuredNews.trending && (
                    <span className="ml-3 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                      Tendencia
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-eco-900 mb-4">{featuredNews.title}</h3>
                <p className="text-eco-700 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                <div className="flex items-center text-sm text-eco-600 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{featuredNews.date}</span>
                </div>
                <Link href={`/noticias/${featuredNews.id}`}>
                  <Button className="bg-eco-600 text-white hover:bg-eco-700">
                    Leer noticia completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-eco-900 text-center mb-12">Últimas Noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <Card key={article.id} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-eco-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-eco-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-eco-700 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-eco-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Link href={`/noticias/${article.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-eco-600 text-eco-600 hover:bg-eco-50 bg-transparent"
                    >
                      Leer más
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-eco-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-eco-900 mb-4">No te Pierdas Ninguna Noticia</h2>
            <p className="text-eco-700 mb-8">
              Suscríbete a nuestro boletín de noticias y recibe las últimas actualizaciones directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-md border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500"
              />
              <Button className="bg-eco-600 text-white hover:bg-eco-700 px-6">Suscribirse</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
