"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  
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

      </div>
    </div>
  )
}
