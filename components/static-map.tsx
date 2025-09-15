"use client"

import { useState } from "react"
import { MapPin, Clock, Phone, Star, X } from "lucide-react"
import Image from "next/image"

interface CollectionPoint {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  rating: number
  services: string[]
  x: number // X position percentage on the map image
  y: number // Y position percentage on the map image
}

interface StaticMapComponentProps {
  collectionPoints: CollectionPoint[]
  className?: string
}

export function StaticMapComponent({ collectionPoints, className = "" }: StaticMapComponentProps) {
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null)

  const handleMarkerClick = (point: CollectionPoint) => {
    setSelectedPoint(point)
  }

  const handleInfoWindowClose = () => {
    setSelectedPoint(null)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-eco-50">
        <Image src="/apartado-map.jpg" alt="Mapa de Apartadó con puntos de recolección" fill className="object-cover" />

        {/* Collection point markers */}
        {collectionPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => handleMarkerClick(point)}
            className="absolute transform -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform z-10"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-eco-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-eco-600"></div>
            </div>
          </button>
        ))}

        {/* Info window */}
        {selectedPoint && (
          <div
            className="absolute z-20 bg-white rounded-lg shadow-xl border border-eco-200 p-4 max-w-sm transform -translate-x-1/2"
            style={{
              left: `${selectedPoint.x}%`,
              top: `${Math.max(selectedPoint.y - 20, 5)}%`,
            }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-eco-900 text-sm">{selectedPoint.name}</h3>
              <button onClick={handleInfoWindowClose} className="text-eco-400 hover:text-eco-600 ml-2">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center text-eco-600">
                <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
                <span>{selectedPoint.address}</span>
              </div>
              <div className="flex items-center text-eco-600">
                <Phone className="h-3 w-3 mr-2 flex-shrink-0" />
                <span>{selectedPoint.phone}</span>
              </div>
              <div className="flex items-center text-eco-600">
                <Clock className="h-3 w-3 mr-2 flex-shrink-0" />
                <span>{selectedPoint.hours}</span>
              </div>
              <div className="flex items-center text-eco-600">
                <Star className="h-3 w-3 mr-2 flex-shrink-0 text-yellow-400" />
                <span>{selectedPoint.rating} estrellas</span>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-xs text-eco-700 font-medium mb-1">Servicios:</p>
              <div className="flex flex-wrap gap-1">
                {selectedPoint.services.slice(0, 2).map((service, index) => (
                  <span key={index} className="text-xs bg-eco-100 text-eco-700 px-2 py-1 rounded">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <button className="mt-3 w-full bg-eco-600 text-white text-xs py-2 px-3 rounded hover:bg-eco-700 transition-colors">
              Ver detalles
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
