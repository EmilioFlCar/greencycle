import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <Leaf className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">GreenCycle</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transformando el futuro a través del reciclaje responsable de tecnología.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-accent">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-muted-foreground hover:text-accent">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="/puntos-recoleccion" className="text-muted-foreground hover:text-accent">
                  Puntos de Recolección
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">info@greencycle.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">3219876543</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Apartadó, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 GreenCycle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
