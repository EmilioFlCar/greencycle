"use client"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, MapPin, Phone, Star } from "lucide-react"
import Link from "next/link"
import { MapWidget } from "@/components/map-widget"
import { Protect, UserButton, useUser } from "@clerk/nextjs"
import { StaticMapComponent } from "@/components/static-map"


export default function DashboardPage() {
    const collectionPoints = [
    {
      id: 1,
      name: "EcoTech Apartadó Centro",
      address: "Carrera 100 #98-45, Apartadó",
      phone: "+57 4 123 4567",
      hours: "Lun-Vie: 8:00-17:00, Sáb: 9:00-13:00",
      rating: 4.8,
      services: ["Destrucción de datos", "Certificados", "Recolección empresarial"],
      distance: "0.5 km",
      x: 50, // Center of Apartadó
      y: 45,
    },
    {
      id: 2,
      name: "Green Point Barrio Obrero",
      address: "Calle 99 #101-23, Apartadó",
      phone: "+57 4 234 5678",
      hours: "Lun-Vie: 8:30-17:30, Sáb: 8:00-14:00",
      rating: 4.6,
      services: ["Reciclaje móviles", "Electrodomésticos", "Baterías"],
      distance: "1.2 km",
      x: 65, // East side
      y: 40,
    },
    {
      id: 3,
      name: "RecycleTech El Reposo",
      address: "Carrera 102 #97-89, Apartadó",
      phone: "+57 4 345 6789",
      hours: "Lun-Vie: 7:30-16:30, Sáb: 9:00-12:00",
      rating: 4.9,
      services: ["Ordenadores", "Tablets", "Componentes"],
      distance: "2.1 km",
      x: 45, // North-west area
      y: 35,
    },
    {
      id: 4,
      name: "EcoCenter La Chinita",
      address: "Calle 98 #103-34, Apartadó",
      phone: "+57 4 456 7890",
      hours: "Lun-Vie: 8:00-16:00, Sáb: 9:00-13:00",
      rating: 4.7,
      services: ["Todo tipo de RAEE", "Servicio a domicilio", "Empresas"],
      distance: "3.5 km",
      x: 55, // East-central area
      y: 50,
    },
    {
      id: 5,
      name: "GreenTech Policarpa",
      address: "Carrera 99 #96-67, Apartadó",
      phone: "+57 4 567 8901",
      hours: "Lun-Vie: 8:00-17:00, Sáb: 10:00-14:00",
      rating: 4.5,
      services: ["Móviles", "Accesorios", "Reparación"],
      distance: "4.2 km",
      x: 40, // West-central area
      y: 38,
    },
  ]
    const {isSignedIn, user} = useUser()
      if (!isSignedIn) {
        redirect("/auth/login")
      }

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-eco-100">
      <div className="container mx-auto px-4 py-4 justify-between flex items-center">
        <Link href="/">
          <Button variant="ghost" className="text-eco-600 hover:text-eco-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
        <UserButton />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-eco-900 mb-6">¡Bienvenido a GreenCycle!</h1>
          <div className="bg-eco-50 border border-eco-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-eco-800 mb-2">
              Hola, {user?.firstName || "Usuario"}!
            </h2>
            <p className="text-eco-600">
              Tu cuenta ha sido creada exitosamente. Desde aquí podrás gestionar tus dispositivos electrónicos para
              reciclaje y encontrar puntos de recolección cercanos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
          </div>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-eco-900 mb-6">Mapa Interactivo</h2>
            <StaticMapComponent collectionPoints={collectionPoints} />
            <div className="mt-4 text-sm text-eco-600">
              <p>💡 Haz clic en los marcadores verdes para ver más información de cada punto de recolección</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Points List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-eco-900 text-center mb-12">Puntos de Recolección Disponibles</h2>

          <div className="grid gap-6">
            {collectionPoints.map((point) => (
              <div key={point.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-eco-900 mb-2">{point.name}</h3>
                        <div className="flex items-center text-eco-600 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{point.address}</span>
                          <span className="ml-4 text-xs bg-eco-100 text-eco-700 px-2 py-1 rounded-full">
                            {point.distance}
                          </span>
                        </div>
                        <div className="flex items-center text-eco-600 mb-2">
                          <Phone className="h-4 w-4 mr-2" />
                          <span className="text-sm">{point.phone}</span>
                        </div>
                        <div className="flex items-center text-eco-600 mb-4">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">{point.hours}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium text-eco-700">{point.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-eco-800 mb-2">Servicios disponibles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {point.services.map((service, index) => (
                          <span key={index} className="text-xs bg-eco-100 text-eco-700 px-3 py-1 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                    <button
                      className="px-4 py-2 bg-eco-600 text-white rounded-md hover:bg-eco-700 transition-colors text-sm font-medium"
                      onClick={() => {
                        // Scroll to map and center on this point
                        const mapSection = document.querySelector("section:nth-child(2)")
                        mapSection?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Ver en mapa
                    </button>
                    <button className="px-4 py-2 border border-eco-600 text-eco-600 rounded-md hover:bg-eco-50 transition-colors text-sm font-medium">
                      Más info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  )
}
