import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

interface NavProps {
  currentPage?: "home" | "blog" | "service";
}

export default function Nav({ currentPage = "home" }: NavProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Dra. Bárbara Klein"
                width={140}
                height={80}
                className="h-12 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/#sobre"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </a>
              <a
                href="/#servicos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </a>
              <a
                href="/blog"
                className={`transition-colors font-medium ${
                  currentPage === "blog"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Blog
              </a>
              <a
                href="/#depoimentos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Depoimentos
              </a>
              <a
                href="/#clinica"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Clínica
              </a>
              <a
                href="/#contato"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </a>
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
