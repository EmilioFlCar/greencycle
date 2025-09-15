import { CheckCircle, Smartphone, MapPin, Recycle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ComoFuncionaPage() {
  const steps = [
    {
      icon: <Smartphone className="h-12 w-12 text-eco-600" />,
      title: "1. Registra tus dispositivos",
      description:
        "Crea una cuenta y registra los dispositivos electrónicos que quieres reciclar. Incluye información como marca, modelo y estado.",
    },
    {
      icon: <MapPin className="h-12 w-12 text-eco-600" />,
      title: "2. Encuentra un punto de recolección",
      description: "Usa nuestro mapa interactivo para encontrar el punto de recolección más cercano a tu ubicación.",
    },
    {
      icon: <Recycle className="h-12 w-12 text-eco-600" />,
      title: "3. Entrega y recicla",
      description:
        "Lleva tus dispositivos al punto de recolección seleccionado. Nuestros socios certificados se encargarán del reciclaje responsable.",
    },
  ]

  const benefits = [
    "Contribuyes a la protección del medio ambiente",
    "Evitas la contaminación por metales pesados",
    "Apoyas la economía circular",
    "Cumples con la normativa de RAEE",
    "Obtienes certificados de reciclaje responsable",
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
          <h1 className="text-4xl md:text-5xl font-bold text-eco-900 mb-6">¿Cómo funciona GreenCycle?</h1>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto mb-12">
            Reciclar tus dispositivos electrónicos nunca fue tan fácil. Sigue estos simples pasos para contribuir al
            cuidado del medio ambiente.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold text-eco-900 mb-4">{step.title}</h3>
                <p className="text-eco-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-eco-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-eco-900 text-center mb-12">Beneficios del reciclaje responsable</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-eco-600 flex-shrink-0" />
                  <span className="text-eco-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-eco-900 mb-6">¿Listo para empezar?</h2>
          <p className="text-xl text-eco-700 mb-8">
            Únete a miles de usuarios que ya están reciclando responsablemente
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-eco-600 text-white hover:bg-eco-700">
              Regístrate ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
