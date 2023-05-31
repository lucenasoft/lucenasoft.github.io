import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Como desenvolvedor back-end na Web Intelligence, trabalho com Java e Spring Boot para o desenvolvimento de aplicações
  web. Além disso, tenho experiência em outras tecnologias como Javascript e Python, bem como em frameworks como Django,
  AdonisJS e Express.
  
  Minhas atividades principais envolvem o desenvolvimento de servidores, APIs e bancos de dados seguros e escaláveis.
  Tenho um forte foco na busca por soluções inovadoras e tecnologias atualizadas para melhorar o desempenho e a eficiência
  do sistema.
  
  Tenho habilidades de monitoramento de desempenho, solução de problemas e colaboração com a equipe para identificar e
  implementar novas funcionalidades. Sempre busco contribuir de forma significativa para projetos desafiadores e para o
  sucesso da empresa em que trabalho.`,
  "Back-end Developer",
  "Web Intelligence",
  "Mar 2022 - Até o momento"
);

hoverChangeExperience(
  ".zuplae",
  `Auxiliando no processo de implantação de sistema para automação de
  processos hospitalares, dando suporte aos usuários, fazendo montagem,
  reparos e configurações de equipamentos, hardware, software e redes.
  Participando de processos de análise de novos softwares e de processos de
  compra de novos softwares e elaborando programas que facilitem o dia a dia
  do funcionário.`,
  "Analista de rede",
  "Hospital Do Tricentenario",
  "Set 2022 - Mar 2023 (7 meses)"
);

hoverChangeExperience(
  ".contweb",
  `Como Técnico em Manutenção e Suporte em Informática, resolvo problemas relacionados à tecnologia da
  informação, incluindo manutenção e reparo de hardware e software, instalação e configuração de sistemas
  operacionais e aplicativos, gerenciamento de redes e segurança de dados. Tendo sólidos conhecimentos em
  sistemas operacionais Windows e Linux, linguagens de programação, banco de dados e ferramentas de suporte
  remoto. Realizando diagnósticos e solucionando problemas de forma ágil, trabalhando em equipe ou individualmente
  para garantir a continuidade das operações da empresa. Buscando atualização constante para garantir a
  qualidade e eficiência do meu trabalho.`,
  "Téc. Em manutenção e suporte em informática",
  "GLTEC Acessórios & Assistencia",
  "Jan 2016 - Ago 2019 (3 anos 8 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".adonisjs",
  "AdonisJS é um framework web para Node.js, com TypeScript. É poderoso e eficiente, facilitando o desenvolvimento de aplicativos web."
);
hoverChangeDescription(
  ".nodejs",
  "Node.js é uma plataforma de desenvolvimento web de código aberto, baseada no motor JavaScript V8. É conhecido por permitir a criação de aplicações escaláveis e de alto desempenho, utilizando uma abordagem assíncrona e baseada em eventos."
);
hoverChangeDescription(
  ".java",
  "Java é uma linguagem de programação de alto nível, amplamente utilizada para desenvolvimento de aplicativos em diferentes plataformas. É conhecida por sua portabilidade, segurança e robustez. Com Java, os desenvolvedores podem criar programas independentes, aplicativos para desktop, aplicativos móveis e até mesmo sistemas empresariais complexos. Sua sintaxe simples e orientada a objetos torna o desenvolvimento mais intuitivo e eficiente."
);
hoverChangeDescription(
  ".spring",
  "O Spring é um framework Java amplamente utilizado para desenvolvimento de aplicativos empresariais. Com recursos como injeção de dependência e inversão de controle, ele simplifica a construção de aplicativos escaláveis e robustos. O Spring suporta diversas tecnologias, como Spring MVC para APIs RESTful e Spring Boot para facilitar a configuração. Com uma comunidade ativa e boas práticas de desenvolvimento, o Spring é uma escolha popular entre os desenvolvedores."
);
hoverChangeDescription(
  ".python",
  "Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. Amplamente utilizada em diversos campos, como desenvolvimento web, ciência de dados e automação, Python oferece uma vasta coleção de bibliotecas que facilitam tarefas como análise de dados e machine learning. Com sua sintaxe clara e biblioteca padrão abrangente, Python é uma escolha popular entre os desenvolvedores."
);
hoverChangeDescription(
  ".django",
  "Django é um framework web em Python conhecido por sua robustez e eficiência no desenvolvimento de aplicativos web. Com uma arquitetura poderosa e uma ampla gama de recursos integrados, o Django oferece uma experiência completa para a criação de sites e aplicações web de alta qualidade. Sua abordagem baseada em convenções, juntamente com sua comunidade ativa, tornam o Django uma escolha popular para projetos de diferentes escalas e complexidades."
);
hoverChangeDescription(
  ".docker",
  "Docker é uma plataforma de código aberto que permite empacotar, distribuir e executar aplicativos de forma isolada em containers. Com o Docker, é possível criar ambientes consistentes e portáteis, eliminando problemas de dependências e incompatibilidades entre diferentes sistemas operacionais."
);
hoverChangeDescription(
  ".aws",
  "A Amazon Web Services (AWS) é uma plataforma de serviços em nuvem líder no mercado, oferecida pela Amazon. Ela fornece uma ampla gama de serviços de computação, armazenamento, banco de dados, análise, inteligência artificial, Internet das Coisas (IoT) e muito mais."
);
hoverChangeDescription(
  ".mysql",
  "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, amplamente utilizado em aplicações web e empresariais. Ele oferece uma plataforma confiável e escalável para armazenar, gerenciar e manipular dados estruturados."
);
hoverChangeDescription(
  ".postgresql",
  "O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua confiabilidade, desempenho e recursos avançados. Ele oferece uma plataforma robusta para armazenar e gerenciar dados estruturados, sendo amplamente utilizado em diferentes aplicações."
);
hoverChangeDescription(
  ".mongodb",
  "MongoDB é um banco de dados NoSQL de alto desempenho, projetado para armazenar e gerenciar grandes volumes de dados não estruturados ou semi-estruturados. Diferente dos bancos de dados relacionais tradicionais, o MongoDB utiliza um modelo de documentos flexível, onde os dados são armazenados em formato BSON (Binary JSON) dentro de documentos."
);


