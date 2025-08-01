import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  getServiceBySlug,
  getRelatedServices,
  services,
} from "@/data/services";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
    };
  }

  return {
    title: `${service.title} - Dra. Bárbara Klein`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Dra. Bárbara Klein`,
      description: service.description,
      type: "website",
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug, service.category, 2);

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Nav currentPage="service" />

      {/* Breadcrumb */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">
              Início
            </a>
            <span>/</span>
            <a
              href="/#servicos"
              className="hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Service Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                messageType="consultation"
                customMessage={`Olá! Gostaria de agendar uma consulta para ${service.title}.`}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm px-8 py-4 text-lg"
              >
                Agendar Consulta
              </WhatsAppButton>
              <WhatsAppButton
                messageType="info"
                customMessage={`Olá! Gostaria de saber mais sobre ${service.title}.`}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg"
              >
                Tirar Dúvidas
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: service.detailedDescription.replace(
                        /\n/g,
                        "<br />"
                      ),
                    }}
                  />
                </div>

                {/* Benefits */}
                <div className="mt-12">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Benefícios
                  </h3>
                  <div className="grid gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"
                      >
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mt-12">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Como Funciona
                  </h3>
                  <div className="grid gap-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Service Info */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Informações do Serviço
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-5 w-5 text-primary"
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
                        <span className="text-muted-foreground">
                          Duração: {service.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-muted-foreground">
                          Local: {service.location}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 text-primary mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <div>
                          <span className="text-muted-foreground">Inclui:</span>
                          <ul className="mt-1 text-sm text-muted-foreground">
                            {service.includes.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact */}
                  <Card className="bg-primary text-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">
                        Agende Sua Consulta
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-primary-foreground/80 mb-4 text-sm">
                        Receba atendimento especializado em dermatologia.
                      </p>
                      <WhatsAppButton
                        messageType="consultation"
                        customMessage={`Olá! Gostaria de agendar ${service.title}.`}
                        variant="outline"
                        className="w-full justify-center py-3 text-sm border-white text-primary hover:bg-white hover:text-primary"
                      >
                        Agendar Agora
                      </WhatsAppButton>
                    </CardContent>
                  </Card>

                  {/* Emergency */}
                  <Card className="bg-red-50 border-red-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-800">
                        Emergência?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-700 mb-4 text-sm">
                        Em caso de emergência médica, procure imediatamente o
                        pronto-socorro mais próximo.
                      </p>
                      <div className="text-sm text-red-600">
                        <p className="font-semibold">SAMU: 192</p>
                        <p className="font-semibold">Bombeiros: 193</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Outros Serviços
              </h2>
              <p className="text-xl text-muted-foreground">
                Conheça outros serviços especializados em dermatologia
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedServices.map((relatedService) => (
                <ServiceCard
                  key={relatedService.slug}
                  title={relatedService.title}
                  description={relatedService.description}
                  slug={relatedService.slug}
                />
              ))}
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
              Agende sua consulta e receba orientações especializadas para sua
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
                href="/#servicos"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors duration-200 h-14"
              >
                Ver Todos os Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
