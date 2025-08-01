import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src="/logo.png"
                  alt="Dra. Bárbara Klein"
                  width={100}
                  height={60}
                  className="ph-10 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#sobre"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Sobre
                </a>
                <a
                  href="#procedimentos"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Procedimentos
                </a>
                <a
                  href="#depoimentos"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Depoimentos
                </a>
                <a
                  href="#clinica"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Clínica
                </a>
                <a
                  href="#contato"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Contato
                </a>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
              Agendar Consulta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl py-20 sm:py-0">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-shadow-sm">
                Dra. Bárbara Klein
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-light">
                Dermatologia Clínica & Estética
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mestre em Engenharia Biomédica, especializada em tratamentos
                avançados que realçam sua beleza natural com ciência e cuidado
                personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm"
                >
                  Agendar Consulta
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Conhecer Procedimentos
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-peach rounded-3xl p-8 shadow-soft overflow-hidden">
                <Image
                  src="/portrait.png"
                  alt="Dra. Bárbara Klein"
                  width={500}
                  height={600}
                  className="w-full h-[500px] rounded-2xl object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Sobre Dra. Bárbara Klein
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unindo ciência e beleza para cuidar da sua pele com excelência
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Formação Acadêmica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Mestre em Engenharia Biomédica e doutoranda, combinando
                  conhecimento científico com prática clínica avançada.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Abordagem Humanizada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Cuidado personalizado e acolhedor, priorizando o bem-estar e a
                  confiança de cada paciente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Excelência Técnica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tratamentos de alta qualidade utilizando as mais modernas
                  tecnologias em dermatologia e estética.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section id="procedimentos" className="py-20 bg-gradient-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Procedimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tratamentos especializados para realçar sua beleza natural
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fios de PDO",
                description:
                  "Sustentação e colágeno para firmeza e contornos definidos, com efeito lifting imediato.",
              },
              {
                title: "Harmonização Facial",
                description:
                  "Cuidar de si não é luxo, é necessidade! Seu corpo, sua mente e sua pele merecem atenção e carinho diariamente.",
              },
              {
                title: "Esvaziadores de Gordura",
                description:
                  "Menos volume, mais definição! Reduz gordura localizada sem dor e sem cortes.",
              },
              {
                title: "Scizer",
                description:
                  "Gordura localizada nunca mais! Tecnologia avançada para reduzir medidas sem cirurgia.",
              },
              {
                title: "Vzet",
                description:
                  "Efeito lifting sem cortes! Combate a flacidez e melhora a textura da pele com tecnologia inovadora.",
              },
              {
                title: "Emptiers",
                description:
                  "Remodelação facial sem cortes! Diga adeus ao excesso de volume com efeito natural e harmônico.",
              },
            ].map((procedure, index) => (
              <Card
                key={index}
                className="hover:shadow-warm transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{procedure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {procedure.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              O que dizem nossas pacientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiências reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Dra. Bárbara é uma profissional excepcional. O cuidado e atenção com que me atendeu foram únicos. Os resultados superaram minhas expectativas!",
                rating: 5,
              },
              {
                name: "Ana Carolina",
                text: "Ambiente acolhedor e tratamentos de qualidade. Me sinto mais confiante e feliz com os cuidados da Dra. Bárbara. Recomendo de olhos fechados!",
                rating: 5,
              },
              {
                name: "Juliana Santos",
                text: "A combinação de conhecimento técnico e sensibilidade humana da Dra. Bárbara é impressionante. Cada consulta é uma experiência transformadora.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-warm transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Section */}
      <section id="clinica" className="py-20 bg-gradient-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Nossa Clínica
            </h2>
            <p className="text-lg text-muted-foreground">
              Um ambiente acolhedor e sofisticado para seu bem-estar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Ambiente Pensado Para Você
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Nossa clínica foi cuidadosamente projetada para oferecer
                  conforto, privacidade e tranquilidade. Cada detalhe foi
                  pensado para proporcionar uma experiência única e acolhedora.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Equipamentos de última geração, ambiente climatizado e uma
                  equipe dedicada garantem que cada visita seja especial e
                  segura.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Horários Flexíveis
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Seg-Sex: 8h às 18h
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Localização</p>
                    <p className="text-sm text-muted-foreground">
                      Centro da cidade
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 rounded-2xl p-8 shadow-soft">
              <div className="bg-gradient-warm rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <p className="font-medium">Fotos da clínica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Agende sua consulta e comece sua jornada de cuidados
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-muted-foreground">
                      contato@barbaraklein.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <p className="text-muted-foreground">@dra.barbaraklein</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123
                      <br />
                      Centro - São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea placeholder="Como podemos ajudar você?" rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
