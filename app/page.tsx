import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Recycle, Users, Award, ArrowRight, MapPin } from "lucide-react"
import { MapWidget } from "@/components/map-widget"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-eco-50 to-white">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-eco-900">
                Transforma el futuro <span className="text-eco-600">reciclando tecnología</span>
              </h1>
              <p className="text-xl text-eco-700 text-balance mb-8 max-w-2xl mx-auto">
                Conectamos personas y empresas con puntos de recolección de aparatos eléctricos y electrónicos para un
                futuro más sostenible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-eco-600 text-white hover:bg-eco-700">
                    Regístrate ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/puntos-recoleccion">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-eco-600 text-eco-600 hover:bg-eco-50 bg-transparent"
                  >
                    Encontrar puntos de recolección
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-eco-900">¿Por qué elegir GreenCycle?</h2>
              <p className="text-xl text-eco-700 max-w-2xl mx-auto">
                Facilitamos el reciclaje responsable de tecnología con soluciones innovadoras y sostenibles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg border-0">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-eco-100 rounded-full flex items-center justify-center mb-4">
                    <Recycle className="h-6 w-6 text-eco-600" />
                  </div>
                  <CardTitle className="text-eco-900">Reciclaje Fácil</CardTitle>
                  <CardDescription className="text-eco-700">
                    Encuentra puntos de recolección cercanos y programa recogidas de manera sencilla.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center shadow-lg border-0">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-eco-100 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-eco-600" />
                  </div>
                  <CardTitle className="text-eco-900">Impacto Ambiental</CardTitle>
                  <CardDescription className="text-eco-700">
                    Contribuye a la reducción de residuos electrónicos y protege el medio ambiente.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center shadow-lg border-0">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-eco-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-eco-600" />
                  </div>
                  <CardTitle className="text-eco-900">Comunidad</CardTitle>
                  <CardDescription className="text-eco-700">
                    Únete a una comunidad comprometida con la sostenibilidad y el reciclaje responsable.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 bg-eco-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-eco-900">Puntos de Recolección Cercanos</h2>
              <p className="text-xl text-eco-700 max-w-2xl mx-auto">
                Descubre los puntos de recolección más cercanos a tu ubicación en Apartadó
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-eco-600 mr-3" />
                <h3 className="text-xl font-semibold text-eco-900">Mapa Interactivo</h3>
              </div>
              <MapWidget className="h-96" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-eco-900">Nuestro Impacto</h2>
              <p className="text-xl text-eco-700">Juntos estamos creando un futuro más sostenible</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-eco-600 mb-2">1,250+</div>
                <div className="text-eco-700">Dispositivos reciclados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-eco-600 mb-2">50+</div>
                <div className="text-eco-700">Puntos de recolección</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-eco-600 mb-2">2.5T</div>
                <div className="text-eco-700">CO₂ evitado</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-eco-600 mb-2">800+</div>
                <div className="text-eco-700">Usuarios activos</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-eco-50">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-eco-600 to-eco-700 border-0 text-green shadow-2xl">
              <CardContent className="p-12 text-center">
                <Award className="mx-auto h-16 w-16 text-green-800 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Únete al movimiento sostenible</h2>
                <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
                  Forma parte de la solución al problema de los residuos electrónicos. Regístrate hoy y comienza a hacer
                  la diferencia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auth/register">
                    <Button size="lg" className="bg-white text-eco-600 hover:bg-eco-50">
                      Comenzar ahora
                    </Button>
                  </Link>
                  <Link href="/sobre-nosotros">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 bg-green-700"
                    >
                      Conoce más
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
