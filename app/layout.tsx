import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ClerkProvider } from '@clerk/nextjs';
import {esES} from "@clerk/localizations"

export const metadata: Metadata = {
  title: "GreenCycle - Reciclaje de Aparatos Electrónicos",
  description:
    "Plataforma web de reciclaje de aparatos eléctricos y electrónicos (RAEE). Conectamos personas y empresas con puntos de recolección sostenibles.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={esES} >   
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
    </ClerkProvider>
  )
}
