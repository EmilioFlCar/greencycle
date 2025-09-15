import { Truck, Shield, Award, Users, Smartphone, Laptop, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiciosPage() {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-eco-600" />,
      title: "Recolección a domicilio",
      description: "Servicio de recolección en tu hogar u oficina para grandes volúmenes de equipos electrónicos.",
      features: ["Programación flexible", "Servicio gratuito para empresas", "Certificado de recolección"],
    },
    {
      icon: <Shield className="h-12 w-12 text-eco-600" />,
      title: "Destrucción segura de datos",
      description:
        "Garantizamos la eliminación completa y segura de toda la información almacenada en tus dispositivos.",
      features: ["Certificado de destrucción", "Cumplimiento GDPR", "Proceso auditado"],
    },
    {
      icon: <Award className="h-12 w-12 text-eco-600" />,
      title: "Certificación ambiental",
      description: "Recibe certificados que acreditan tu compromiso con el reciclaje responsable y la sostenibilidad.",
      features: ["Certificado digital", "Reporte de impacto", "Validez oficial"],
    },
    {
      icon: <Users className="h-12 w-12 text-eco-600" />,
      title: "Consultoría empresarial",
      description:
        "Asesoramiento especializado para empresas en gestión de residuos electrónicos y cumplimiento normativo.",
      features: ["Auditoría inicial", "Plan personalizado", "Seguimiento continuo"],
    },
  ]

  const deviceTypes = [
    {
      icon: <Smartphone className="h-8 w-8 text-eco-600" />,
      name: "Teléfonos móviles",
      description: "Smartphones, teléfonos básicos, accesorios",
    },
    {
      icon: <Laptop className="h-8 w-8 text-eco-600" />,
      name: "Equipos informáticos",
      description: "Computadoras, laptops, tablets, monitores",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-eco-600" />,
      name: "Electrodomésticos pequeños",
      description: "Microondas, tostadoras, cafeteras, aspiradoras",
    },
    {
      icon: <Laptop className="h-8 w-8 text-eco-600" />,
      name: "Equipos de audio y video",
      description: "Televisores, equipos de sonido, cámaras",
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
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-eco-900 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto mb-12">
            Ofrecemos soluciones integrales para el reciclaje responsable de residuos de aparatos eléctricos y
            electrónicos (RAEE).
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-bold text-eco-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-eco-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-eco-600">
                      <div className="w-2 h-2 bg-eco-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Types */}
      <section className="py-16 bg-eco-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-eco-900 text-center mb-12">Tipos de dispositivos que reciclamos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deviceTypes.map((device, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{device.icon}</div>
                <h3 className="font-semibold text-eco-900 mb-2">{device.name}</h3>
                <p className="text-sm text-eco-600">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-eco-700 to-eco-500 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-green-800">¿Necesitas un servicio personalizado?</h2>
            <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto font-medium">
              Contáctanos para diseñar una solución que se adapte a las necesidades específicas de tu empresa u
              organización.
            </p>
            <a
              href="/contacto"
              className="bg-green-200 text-green-800 hover:bg-green-300 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
