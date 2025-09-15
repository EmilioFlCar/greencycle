import { Download, FileText, Video, BookOpen, ExternalLink, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecursosPage() {
  const resources = [
    {
      id: 1,
      title: "Guía Completa de Reciclaje RAEE",
      description: "Manual detallado sobre cómo reciclar correctamente residuos de aparatos eléctricos y electrónicos.",
      type: "PDF",
      size: "2.5 MB",
      icon: <FileText className="h-6 w-6 text-eco-600" />,
      category: "Guías",
    },
    {
      id: 2,
      title: "Video: Proceso de Reciclaje Paso a Paso",
      description: "Video educativo que muestra el proceso completo de reciclaje de dispositivos electrónicos.",
      type: "Video",
      duration: "12 min",
      icon: <Video className="h-6 w-6 text-eco-600" />,
      category: "Videos",
    },
    {
      id: 3,
      title: "Checklist de Preparación de Dispositivos",
      description: "Lista de verificación para preparar tus dispositivos antes del reciclaje.",
      type: "PDF",
      size: "500 KB",
      icon: <FileText className="h-6 w-6 text-eco-600" />,
      category: "Herramientas",
    },
    {
      id: 4,
      title: "Informe: Impacto Ambiental del E-waste",
      description: "Estudio completo sobre el impacto de los residuos electrónicos en el medio ambiente.",
      type: "PDF",
      size: "4.2 MB",
      icon: <BookOpen className="h-6 w-6 text-eco-600" />,
      category: "Informes",
    },
    {
      id: 5,
      title: "Webinar: Tendencias en Reciclaje 2024",
      description: "Grabación del webinar sobre las últimas tendencias en reciclaje electrónico.",
      type: "Video",
      duration: "45 min",
      icon: <Video className="h-6 w-6 text-eco-600" />,
      category: "Videos",
    },
    {
      id: 6,
      title: "Plantilla de Certificado de Reciclaje",
      description: "Plantilla editable para crear certificados de reciclaje responsable.",
      type: "DOCX",
      size: "150 KB",
      icon: <FileText className="h-6 w-6 text-eco-600" />,
      category: "Herramientas",
    },
  ]

  const externalLinks = [
    {
      title: "Ministerio de Ambiente y Desarrollo Sostenible",
      description: "Información oficial sobre normativas RAEE en Colombia",
      url: "https://www.minambiente.gov.co",
    },
    {
      title: "ANDI - Cámara de la Industria de Electrodomésticos",
      description: "Asociación Nacional de Empresarios de Colombia",
      url: "https://www.andi.com.co",
    },
    {
      title: "Fundación GAIA",
      description: "Organización para la gestión ambiental integral",
      url: "https://www.fundaciongaia.org.co",
    },
  ]

  const categories = ["Todos", "Guías", "Videos", "Herramientas", "Informes"]

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
          <h1 className="text-4xl md:text-5xl font-bold text-eco-900 mb-6">Centro de Recursos</h1>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto mb-12">
            Accede a guías, videos, herramientas y documentos que te ayudarán a reciclar de manera más efectiva y
            responsable.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-12">
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

      {/* Resources Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Card key={resource.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {resource.icon}
                    <span className="bg-eco-100 text-eco-700 px-3 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-eco-900">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-eco-700 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-eco-600 mb-4">
                    <span className="font-medium">{resource.type}</span>
                    <span>{resource.size || resource.duration}</span>
                  </div>
                  <Button className="w-full bg-eco-600 text-white hover:bg-eco-700">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 bg-eco-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-eco-900 text-center mb-12">Enlaces de Interés</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {externalLinks.map((link, index) => (
                <Card key={index} className="shadow-md border-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <ExternalLink className="h-5 w-5 text-eco-600 mt-1" />
                    </div>
                    <h3 className="font-semibold text-eco-900 mb-2">{link.title}</h3>
                    <p className="text-eco-700 text-sm mb-4">{link.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-eco-600 text-eco-600 hover:bg-eco-50 bg-transparent"
                    >
                      Visitar sitio
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-eco-900 mb-6">¿Necesitas más ayuda?</h2>
            <p className="text-eco-700 mb-8">
              Si no encuentras lo que buscas o tienes preguntas específicas, nuestro equipo está aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-eco-600 text-white hover:bg-eco-700">Contactar soporte</Button>
              <Button variant="outline" className="border-eco-600 text-eco-600 hover:bg-eco-50 bg-transparent">
                Ver FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
