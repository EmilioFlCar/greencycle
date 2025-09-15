"use client"

import { StaticMapComponent } from "./static-map"

interface MapWidgetProps {
  className?: string
}

export function MapWidget({ className = "" }: MapWidgetProps) {
  // Featured collection points for homepage with X,Y coordinates for static map
  const featuredPoints = [
    {
      id: 1,
      name: "EcoTech Apartadó Centro",
      address: "Carrera 100 #98-45, Apartadó",
      phone: "+57 4 123 4567",
      hours: "Lun-Vie: 8:00-17:00",
      rating: 4.8,
      services: ["Destrucción de datos", "Certificados"],
      x: 50, // Center of Apartadó
      y: 45,
    },
    {
      id: 2,
      name: "Green Point Barrio Obrero",
      address: "Calle 99 #101-23, Apartadó",
      phone: "+57 4 234 5678",
      hours: "Lun-Vie: 8:30-17:30",
      rating: 4.6,
      services: ["Reciclaje móviles", "Electrodomésticos"],
      x: 65, // East side
      y: 40,
    },
    {
      id: 3,
      name: "RecycleTech El Reposo",
      address: "Carrera 102 #97-89, Apartadó",
      phone: "+57 4 345 6789",
      hours: "Lun-Vie: 7:30-16:30",
      rating: 4.9,
      services: ["Ordenadores", "Tablets"],
      x: 45, // North-west area
      y: 35,
    },
  ]

  return (
    <div className={className}>
      <StaticMapComponent collectionPoints={featuredPoints} />
    </div>
  )
}
