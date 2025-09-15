import { Calendar, User, ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import blogPosts from "./data"  

export default function BlogPage() {
  const categories = [
    "Todos",
    "Innovación",
    "Guías",
    "Medio Ambiente",
    "Economía",
    "Legislación",
    "Casos de Éxito",
    "Tecnología",
  ]

  // El primer post es el destacado
  const [featuredPost, ...otherPosts] = blogPosts

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
          <h1 className="text-4xl md:text-5xl font-bold text-eco-900 mb-6">Blog GreenCycle</h1>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto mb-12">
            Mantente informado sobre las últimas tendencias en reciclaje electrónico, sostenibilidad y tecnología verde.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-eco-900 mb-4">Artículo Destacado</h2>
          </div>
          {featuredPost && (
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-eco-100 text-eco-700 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="ml-4 text-sm text-eco-600">Destacado</span>
                  </div>
                  <h3 className="text-2xl font-bold text-eco-900 mb-4">{featuredPost.title}</h3>
                  {/* <p className="text-eco-700 mb-6 leading-relaxed">{featuredPost.excerpt}</p> */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-eco-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <span>{featuredPost.readTime} lectura</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-eco-600 text-white hover:bg-eco-700">
                      Leer artículo completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "Todos"
                    ? "bg-eco-600 text-white"
                    : "bg-white text-eco-600 border border-eco-200 hover:bg-eco-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-eco-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-eco-900 mb-3 line-clamp-2">{post.title}</h3>
                  {/* <p className="text-eco-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p> */}
                  <div className="flex items-center justify-between text-xs text-eco-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
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
            <h2 className="text-3xl font-bold text-eco-900 mb-4">Mantente Informado</h2>
            <p className="text-eco-700 mb-8">
              Suscríbete a nuestro newsletter y recibe las últimas noticias sobre reciclaje electrónico y
              sostenibilidad.
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
