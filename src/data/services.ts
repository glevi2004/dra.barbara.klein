export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  detailedDescription: string;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  includes: string[];
  duration: string;
  location: string;
  price?: string;
  image?: string;
  category: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "fios-pdo",
    title: "Fios de PDO",
    description:
      "Sustentação e colágeno para firmeza e contornos definidos, com efeito lifting imediato.",
    fullDescription:
      "Os fios de PDO são uma técnica revolucionária de lifting não cirúrgico que utiliza fios absorvíveis para criar sustentação e estimular a produção de colágeno.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    benefits: [
      "Efeito lifting imediato",
      "Estimulação de colágeno",
      "Melhora da firmeza da pele",
      "Contornos faciais definidos",
      "Procedimento minimamente invasivo",
    ],
    process: [
      {
        title: "Avaliação",
        description:
          "Análise da estrutura facial e definição dos pontos de sustentação",
      },
      {
        title: "Aplicação",
        description:
          "Inserção dos fios de PDO nos pontos estratégicos do rosto",
      },
      {
        title: "Ajuste",
        description:
          "Posicionamento e tensão adequada dos fios para o resultado desejado",
      },
      {
        title: "Finalização",
        description: "Verificação do resultado e orientações pós-procedimento",
      },
    ],
    includes: [
      "Consulta médica completa",
      "Aplicação dos fios de PDO",
      "Orientações pós-procedimento",
      "Retorno de acompanhamento",
    ],
    duration: "60 minutos",
    location: "Consultório médico",
    category: "Procedimentos",
    featured: true,
  },
  {
    slug: "harmonizacao-facial",
    title: "Harmonização Facial",
    description:
      "Cuidar de si não é luxo, é necessidade! Seu corpo, sua mente e sua pele merecem atenção e carinho diariamente.",
    fullDescription:
      "A harmonização facial é um conjunto de procedimentos que visa equilibrar as proporções faciais, realçando a beleza natural de forma harmoniosa.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    benefits: [
      "Equilíbrio das proporções faciais",
      "Realce da beleza natural",
      "Resultado personalizado",
      "Procedimentos combinados",
      "Acompanhamento especializado",
    ],
    process: [
      {
        title: "Planejamento",
        description:
          "Avaliação facial completa e definição do plano de harmonização",
      },
      {
        title: "Execução",
        description:
          "Aplicação dos procedimentos escolhidos de forma sequencial",
      },
      {
        title: "Ajustes",
        description: "Refinamentos e ajustes para atingir o resultado ideal",
      },
      {
        title: "Acompanhamento",
        description: "Retornos para avaliação e manutenção dos resultados",
      },
    ],
    includes: [
      "Avaliação facial completa",
      "Planejamento personalizado",
      "Aplicação dos procedimentos",
      "Acompanhamento pós-tratamento",
    ],
    duration: "90 minutos",
    location: "Consultório médico",
    category: "Procedimentos",
    featured: true,
  },
  {
    slug: "esvaziadores-gordura",
    title: "Esvaziadores de Gordura",
    description:
      "Menos volume, mais definição! Reduz gordura localizada sem dor e sem cortes.",
    fullDescription:
      "Os esvaziadores de gordura são procedimentos que visam reduzir o volume de gordura localizada em áreas específicas do corpo.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    benefits: [
      "Redução de gordura localizada",
      "Procedimento não invasivo",
      "Resultados progressivos",
      "Sem período de recuperação",
      "Aplicação em múltiplas áreas",
    ],
    process: [
      {
        title: "Identificação",
        description: "Mapeamento das áreas com acúmulo de gordura",
      },
      {
        title: "Aplicação",
        description: "Injeção dos esvaziadores nas áreas selecionadas",
      },
      {
        title: "Ativação",
        description: "Processo de quebra e eliminação da gordura",
      },
      {
        title: "Resultado",
        description: "Redução progressiva do volume nas áreas tratadas",
      },
    ],
    includes: [
      "Avaliação das áreas a tratar",
      "Aplicação dos esvaziadores",
      "Orientações pós-procedimento",
      "Retorno para avaliação",
    ],
    duration: "45 minutos",
    location: "Consultório médico",
    category: "Procedimentos",
    featured: true,
  },
  {
    slug: "scizer",
    title: "Scizer",
    description:
      "Gordura localizada nunca mais! Tecnologia avançada para reduzir medidas sem cirurgia.",
    fullDescription:
      "O Scizer é uma tecnologia inovadora que utiliza ultrassom focalizado para reduzir gordura localizada de forma eficaz e segura.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    benefits: [
      "Redução de gordura localizada",
      "Tecnologia de ultrassom avançada",
      "Procedimento não invasivo",
      "Resultados duradouros",
      "Sem período de recuperação",
    ],
    process: [
      {
        title: "Avaliação",
        description: "Identificação das áreas com gordura localizada",
      },
      {
        title: "Configuração",
        description: "Ajuste dos parâmetros do equipamento para cada área",
      },
      {
        title: "Tratamento",
        description: "Aplicação do ultrassom focalizado nas áreas selecionadas",
      },
      {
        title: "Acompanhamento",
        description: "Avaliação dos resultados e planejamento de sessões",
      },
    ],
    includes: [
      "Avaliação personalizada",
      "Tratamento com Scizer",
      "Orientações pós-procedimento",
      "Acompanhamento dos resultados",
    ],
    duration: "60 minutos",
    location: "Consultório médico",
    category: "Procedimentos",
    featured: false,
  },
  {
    slug: "vzet",
    title: "Vzet",
    description:
      "Efeito lifting sem cortes! Combate a flacidez e melhora a textura da pele com tecnologia inovadora.",
    fullDescription:
      "O Vzet é um procedimento que combina diferentes tecnologias para combater a flacidez e melhorar a textura da pele.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et harum quidem rerum facilis est et expedita distinctio.",
    benefits: [
      "Combate à flacidez",
      "Melhora da textura da pele",
      "Efeito lifting natural",
      "Procedimento não invasivo",
      "Resultados progressivos",
    ],
    process: [
      {
        title: "Análise",
        description: "Avaliação da flacidez e textura da pele",
      },
      {
        title: "Tratamento",
        description: "Aplicação das tecnologias combinadas do Vzet",
      },
      {
        title: "Estimulação",
        description: "Ativação da produção de colágeno e elastina",
      },
      {
        title: "Resultado",
        description: "Melhora progressiva da firmeza e textura",
      },
    ],
    includes: [
      "Avaliação da pele",
      "Tratamento com Vzet",
      "Orientações de cuidados",
      "Acompanhamento dos resultados",
    ],
    duration: "75 minutos",
    location: "Consultório médico",
    category: "Procedimentos",
    featured: false,
  },
  {
    slug: "emptiers",
    title: "Emptiers",
    description:
      "Remodelação facial sem cortes! Diga adeus ao excesso de volume com efeito natural e harmônico.",
    fullDescription:
      "O Emptiers é um procedimento que visa reduzir o excesso de volume facial de forma natural e harmoniosa.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    benefits: [
      "Redução de volume facial",
      "Resultado natural e harmônico",
      "Procedimento não invasivo",
      "Sem período de recuperação",
      "Acompanhamento especializado",
    ],
    process: [
      {
        title: "Avaliação",
        description: "Identificação das áreas com excesso de volume",
      },
      {
        title: "Aplicação",
        description: "Injeção dos produtos para redução de volume",
      },
      {
        title: "Remodelação",
        description: "Processo de redução progressiva do volume",
      },
      {
        title: "Harmonização",
        description: "Ajustes para resultado natural e equilibrado",
      },
    ],
    includes: [
      "Avaliação facial completa",
      "Aplicação do Emptiers",
      "Orientações pós-procedimento",
      "Retorno para avaliação",
    ],
    duration: "60 minutos",
    location: "Consultório médico",
    category: "Procedimentos",
    featured: false,
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter((service) => service.featured);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter((service) => service.category === category);
};

export const getRelatedServices = (
  currentSlug: string,
  category: string,
  limit: number = 3
): Service[] => {
  return services
    .filter(
      (service) => service.slug !== currentSlug && service.category === category
    )
    .slice(0, limit);
};
