"use client"

import { Calendar, User, ArrowLeft, Share2, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import blogPosts from "../data"

interface BlogPostPageProps {
  params: { id: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params
  const blogPost = blogPosts.find((post) => post.id === Number(id))

  if (!blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Artículo no encontrado</h1>
        <Link href="/blog" className="text-eco-600 mt-4 underline">
          Volver al blog
        </Link>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((post) => post.id !== blogPost.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-white">
      {/* Botón Volver */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="text-eco-600 hover:text-eco-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Cabecera */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="bg-eco-100 text-eco-700 px-4 py-2 rounded-full text-sm font-medium">
            {blogPost.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-eco-900 mb-6">{blogPost.title}</h1>
          <div className="flex gap-6 text-eco-600 mb-8 flex-wrap">
            <div className="flex items-center">
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" /> {blogPost.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" /> {blogPost.readTime}
            </div>
          </div>
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Contenido */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div
              className="prose prose-lg max-w-none text-eco-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Etiquetas */}
          {Array.isArray(blogPost.tags) && blogPost.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              {blogPost.tags.map((tag: string, i: number) => (
                <span key={i} className="bg-eco-100 text-eco-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Artículos Relacionados */}
      <section className="py-16 bg-eco-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{post.title}</h3>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Leer más
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
