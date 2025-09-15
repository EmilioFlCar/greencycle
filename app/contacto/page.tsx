"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-eco-600" />,
      title: "Email",
      content: "contacto@greencycle.com",
      description: "Respuesta en 24 horas",
    },
    {
      icon: <Phone className="h-6 w-6 text-eco-600" />,
      title: "Teléfono",
      content: "+57 4 123 4567",
      description: "Lunes a Viernes 8:00-17:00",
    },
    {
      icon: <MapPin className="h-6 w-6 text-eco-600" />,
      title: "Oficina",
      content: "Carrera 100 #98-15, Apartadó",
      description: "Visitas con cita previa",
    },
    {
      icon: <Clock className="h-6 w-6 text-eco-600" />,
      title: "Horario",
      content: "Lun - Vie: 8:00 - 17:00",
      description: "Sáb: 9:00 - 13:00",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-white">
            <div className="container mx-auto px-4 py-4 justify-between flex items-center">
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
          <h1 className="text-4xl md:text-5xl font-bold text-eco-900 mb-6">Contacta con Nosotros</h1>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto mb-12">
            ¿Tienes preguntas sobre nuestros servicios? ¿Necesitas ayuda con el reciclaje de tus dispositivos? Estamos
            aquí para ayudarte.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-eco-900">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-eco-900 mb-2">¡Mensaje enviado!</h3>
                    <p className="text-eco-700">Gracias por contactarnos. Te responderemos pronto.</p>
                    <Button onClick={() => setSubmitted(false)} className="mt-4 bg-eco-600 hover:bg-eco-700 text-white">
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-eco-800">
                          Nombre *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-eco-200 focus:border-eco-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-eco-800">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-eco-200 focus:border-eco-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-eco-800">
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-eco-200 focus:border-eco-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-eco-800">
                          Asunto *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="border-eco-200 focus:border-eco-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-eco-800">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-eco-200 focus:border-eco-500"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-eco-600 hover:bg-eco-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-eco-900 mb-6">Información de contacto</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-eco-900 mb-1">{info.title}</h3>
                      <p className="text-eco-700 font-medium">{info.content}</p>
                      <p className="text-sm text-eco-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-eco-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-eco-900 mb-4">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-eco-800 mb-2">¿Qué dispositivos aceptan?</h4>
                  <p className="text-sm text-eco-700">
                    Aceptamos todo tipo de dispositivos electrónicos: móviles, ordenadores, electrodomésticos pequeños,
                    etc.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-eco-800 mb-2">¿El servicio tiene costo?</h4>
                  <p className="text-sm text-eco-700">
                    El reciclaje básico es gratuito. Algunos servicios especializados pueden tener costo adicional.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-eco-800 mb-2">¿Cómo garantizan la seguridad de datos?</h4>
                  <p className="text-sm text-eco-700">
                    Ofrecemos certificados de destrucción segura de datos siguiendo estándares internacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
