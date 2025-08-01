import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog - Dra. Bárbara Klein",
  description:
    "Artigos e dicas sobre dermatologia, estética e cuidados com a pele.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Nav currentPage="blog" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Artigos e dicas sobre dermatologia, estética e cuidados com a pele
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                messageType="consultation"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm px-8 py-4 text-lg"
              >
                Agendar Consulta
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
