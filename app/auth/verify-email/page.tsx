import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-eco-100 flex items-center justify-center p-4">
      <div className="absolute top-8 left-8">
        <Link href="/auth/login">
          <Button variant="ghost" className="text-eco-600 hover:text-eco-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al login
          </Button>
        </Link>
      </div>

      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-eco-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <CardTitle className="text-2xl font-bold text-eco-900">¡Revisa tu email!</CardTitle>
            <CardDescription className="text-eco-600">Te hemos enviado un enlace de confirmación</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-eco-700 mb-6">
              Hemos enviado un enlace de confirmación a tu dirección de email. Por favor, revisa tu bandeja de entrada y
              haz clic en el enlace para activar tu cuenta.
            </p>
            <p className="text-sm text-eco-600 mb-4">¿No recibiste el email? Revisa tu carpeta de spam.</p>
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-eco-600 text-white hover:bg-eco-700 h-10 px-4 py-2"
            >
              Volver al inicio de sesión
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
