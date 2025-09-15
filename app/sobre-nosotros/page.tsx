import { Target, Eye, Users, Award, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobreNosotrosPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-eco-600" />,
      title: "Misión",
      description:
        "Facilitar el reciclaje responsable de residuos electrónicos, conectando usuarios con puntos de recolección certificados para proteger el medio ambiente.",
    },
    {
      icon: <Eye className="h-8 w-8 text-eco-600" />,
      title: "Visión",
      description:
        "Ser la plataforma líder en gestión de RAEE, promoviendo una economía circular y sostenible en el sector tecnológico.",
    },
    {
      icon: <Users className="h-8 w-8 text-eco-600" />,
      title: "Valores",
      description:
        "Sostenibilidad, transparencia, innovación y compromiso social guían todas nuestras acciones y decisiones empresariales.",
    },
    {
      icon: <Award className="h-8 w-8 text-eco-600" />,
      title: "Compromiso",
      description:
        "Garantizamos el cumplimiento de todas las normativas ambientales y la máxima seguridad en el tratamiento de datos personales.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Dispositivos reciclados" },
    { number: "500+", label: "Usuarios registrados" },
    { number: "25", label: "Puntos de recolección" },
    { number: "5", label: "Ciudades cubiertas" },
  ]

  const team = [
    {
      name: "Lina Marcela Merlano Marin",
      role: "Estudiante de derecho",
    },
    {
      name: "Candida Stuard Salas Mendoza",
      role: "Estudiante de derecho",
    },
    {
      name: "Yenifer Thays Ariza de Leon",
      role: "Estudiante de derecho",
    },
    {
      name: "Luisa María Rojas Patiño",
      role: "Estudiante de administración de empresas",
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
          <h1 className="text-4xl md:text-5xl font-bold text-eco-900 mb-6">Sobre GreenCycle</h1>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto mb-12">
            Somos una startup comprometida con la sostenibilidad y la protección del medio ambiente a través del
            reciclaje responsable de residuos electrónicos.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-eco-900 mb-6">Nuestra Historia</h2>
              <div className="prose prose-lg text-eco-700">
                <p className="mb-6">
                  GreenCycle nació  de la necesidad urgente de abordar el creciente problema de los residuos
                  electrónicos en nuestras ciudades. Fundada por un grupo de estudiantes de quinto semestre de derecho y administración de empresas de la
                  Fundación Universitaria del Área Andina (Areandina) comprometidos con la sostenibilidad.
                </p>
                <p className="mb-6">
                  Observamos que muchas personas querían reciclar sus dispositivos electrónicos de manera responsable,
                  pero no sabían dónde hacerlo o cómo garantizar que el proceso fuera seguro y ambientalmente correcto.
                </p>
                <p>
                  Así nació nuestra plataforma: una solución digital que conecta a usuarios conscientes del medio
                  ambiente con puntos de recolección certificados, facilitando el reciclaje responsable y contribuyendo
                  a una economía circular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-eco-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-eco-900 text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-bold text-eco-900 ml-4">{value.title}</h3>
                </div>
                <p className="text-eco-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-eco-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-eco-900 text-center mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-eco-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-eco-600" />
                </div>
                <h3 className="text-xl font-bold text-eco-900 mb-2">{member.name}</h3>
                <p className="text-eco-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
