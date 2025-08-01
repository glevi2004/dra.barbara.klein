import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

interface NavProps {
  currentPage?: "home" | "blog" | "service";
}

export default function Nav({ currentPage = "home" }: NavProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Dra. Bárbara Klein"
                width={140}
                height={80}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#sobre"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </Link>
              <Link
                href="/#servicos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </Link>
              <Link
                href="/blog"
                className={`transition-colors font-medium ${
                  currentPage === "blog"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/#depoimentos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Depoimentos
              </Link>
              <Link
                href="/#clinica"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Clínica
              </Link>
              <Link
                href="/#contato"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </Link>
            </div>
          </div>
          <WhatsAppButton className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
            Agendar Consulta
          </WhatsAppButton>
        </div>
      </div>
    </nav>
  );
}
