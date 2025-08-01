import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getFeaturedServices } from "@/data/services";
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
import Link from "next/link";

export default function Home() {
  const featuredServices = getFeaturedServices();

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Nav />

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
                <WhatsAppButton className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm px-8 py-4 text-lg h-14">
                  Agendar Consulta
                </WhatsAppButton>
                <Link
                  href="/servicos/fios-pdo"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors duration-200 h-14"
                >
                  Conhecer Serviços
                </Link>
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

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gradient-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tratamentos especializados para realçar sua beleza natural
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
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
                <WhatsAppButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
                  Enviar Mensagem
                </WhatsAppButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
