import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} - Dra. Bárbara Klein`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - Dra. Bárbara Klein`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 2);

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Nav currentPage="blog" />

      {/* Breadcrumb */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">
              Início
            </a>
            <span>/</span>
            <a href="/blog" className="hover:text-primary transition-colors">
              Blog
            </a>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{post.readTime} min de leitura</span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div
                    className="markdown-content text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/\n/g, "<br />"),
                    }}
                  />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-12 p-6 bg-primary/5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {post.author}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Dermatologista especializada em dermatologia clínica e
                        estética. Mestre em Engenharia Biomédica com mais de 10
                        anos de experiência.
                      </p>
                      <WhatsAppButton
                        messageType="consultation"
                        className="text-sm px-4 py-2"
                      >
                        Agendar Consulta
                      </WhatsAppButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Quick Contact */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Precisa de Ajuda?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Entre em contato para esclarecer dúvidas ou agendar sua
                        consulta.
                      </p>
                      <WhatsAppButton
                        messageType="info"
                        customMessage={`Olá! Li o artigo "${post.title}" e gostaria de saber mais.`}
                        className="w-full justify-center py-3 text-sm bg-primary text-white hover:bg-primary/90"
                      >
                        Entre em contato
                      </WhatsAppButton>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="text-sm text-primary mb-2">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-3 line-clamp-2">
                        <a
                          href={`/blog/${relatedPost.slug}`}
                          className="hover:text-primary transition-colors duration-200"
                        >
                          {relatedPost.title}
                        </a>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>
                          {new Date(relatedPost.date).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                        <span>{relatedPost.readTime} min</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Transforme Sua Beleza Natural
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Agende uma consulta e receba orientações personalizadas para sua
              saúde e beleza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                messageType="consultation"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-primary hover:bg-white hover:text-primary h-14"
              >
                Agendar Consulta
              </WhatsAppButton>
              <a
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors duration-200 h-14"
              >
                Ler Mais Artigos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
