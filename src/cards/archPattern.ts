import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from '../types';

const archPatternCards: Card[] = [
  {
    _id: uuid(),
    title: 'Divisão em camadas',
    description:
      'Estruturas de aplicações que podem ser decompostas em subáreas (camadas).',
    question:
      '[V ou F] Podem existir várias camadas em um mesmo nível de abstração dependendo de camadas inferiores.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-1.png',
  },
  {
    _id: uuid(),
    title: 'Broker',
    description:
      'Estruturação de sistemas distribuíbos que precisam interagir através de invocação remota de serviços.',
    question:
      '[V ou F] Brokers facilitam alterações dinâmicas nas conexões entre usuários e fornecedores.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-2.png',
  },
  {
    _id: uuid(),
    title: 'Model-View-Controller',
    description:
      'Aplicações divididas em três componentes: Model, View e Controller.',
    question:
      '[V ou F] O MVC é utilizado quando há a necessidade de várias interfaces com o usuário.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-3.png',
  },
  {
    _id: uuid(),
    title: 'Cliente - Servidor',
    description:
      'Baseado em programas clientes que estabelecem conexões e programas servidores que executam serviços.',
    question:
      '[V ou F] Uma das vantagens do padrão cliente-servidor, é a redução dos custos de cumunicação.',
    solution: 'F',
    solutionText: 'Falso, há grandes custos com comunicação.',
    stars: 4,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-4.png',
  },
  {
    _id: uuid(),
    title: 'Blackboard',
    description:
      'Coleções de programas independentes que trabalham cooperativamente numa estrutura de dados comum.',
    question:
      '[V ou F] O Blackboard apoia a resolução de problemas por meio da chamada de componentes independentes.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-5.png',
  },
  {
    _id: uuid(),
    title: 'Ponto-a-ponto (P2P)',
    description:
      'Conecta um conjunto de entidades computacionais por meio de um protocolo comum.',
    question:
      '[V ou F] No P2P cada nó de comunicação é cliente e servidor ao mesmo tempo.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-6.png',
  },
  {
    _id: uuid(),
    title: 'Repositório',
    description:
      'Subsistemas manipulam uma mesma base de dados compartilhados.',
    question:
      '[V ou F] Em repositório, os dados estão centralizados, tornando mais fácil evoluí-los.',
    solution: 'F',
    solutionText:
      'Falso, a evolução de dados em repositórios é difícil e dispendiosa.',
    stars: 4,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-7.png',
  },
  {
    _id: uuid(),
    title: 'Piper-and-filter',
    description:
      'Desenvolvimento de sistemas que processa ou transforma um stream de dados.',
    question:
      '[V ou F] Com o piper-and-filter, dados são processados paralelamente por meio de condutores (pipers) e filtros (filters).',
    solution: 'F',
    solutionText: 'Falso, os dados são processados sequencialmente.',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-8.png',
  },
  {
    _id: uuid(),
    title: 'Publish-Subscribe',
    description:
      'Consiste na criação e publicação de dados por Publishers e no consumo desses dados por Subscribe.',
    question:
      '[V ou F] Para receberem informações, os Subscribes precisam se conectar a um broker e se inscrever em tópicos disponibilizados por Publishers.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-9.png',
  },
  {
    _id: uuid(),
    title: 'Map-Reduce',
    description:
      'Permite realizar uma ordenação distribuída e paralela de um grande volume de dados.',
    question:
      '[V ou F] O Map-Reduce facilita tanto a leitura, como a análise dos dados após o processamento.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-10.png',
  },
  {
    _id: uuid(),
    title: 'Arquitetura Orientada a serviços',
    description:
      'Promove a integração do negócio com a tecnologia da informação por meio de componentes de serviços.',
    question:
      '[V ou F] Este tipo de arquitetura evita replicação de dados e facilita a manutenção dos sistemas.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-11.png',
  },
  /* {
    _id: uuid(),
    title: '',
    description: '',
    question: '',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-12.png',
  },
  {
    _id: uuid(),
    title: '',
    description: '',
    question: '',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-13.png',
  },
  {
    _id: uuid(),
    title: '',
    description: '',
    question: '',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchPattern,
    used: false,
    imgUrl: 'arch-pattern-14.png',
  }, */
];

export default archPatternCards;
