import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Dra. Bárbara Klein"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/70 mt-2">
              Dermatologia Clínica & Estética
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm">
              © 2024 Dra. Bárbara Klein. Todos os direitos reservados.
            </p>
            <p className="text-white/70 text-sm mt-1">
              CRM: 123456 | Especialista em Dermatologia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
