import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from '../types';

const archDecisionsCards: Card[] = [
  {
    id: uuid(),
    title: 'Escolha da Tecnologia',
    description:
      'Define quais as tecnologias disponíveis para realizar as demais decisões arquiteturais.',
    question:
      '[V ou F] A escolha da tecnologia é realizada apenas pelo arquiteto pois é a pessoa com mais experiência no time de projeto.',
    solution: 'F',
    solutionText:
      'A escolha da tecnologia pode ser feita tanto pelo arquiteto de software como por terceiros.',
    stars: 2,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-1.png',
  },
  {
    id: uuid(),
    title: 'Escolha da Tecnologia',
    description:
      'Define quais as tecnologias disponíveis para realizar as demais decisões arquiteturais.',
    question:
      '[V ou F] Durante a escolha da tecnologia é analisado a familiaridade interna do time de projeto com a tecnologia como também a disponibilidade de suporte externo.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-2.png',
  },
  {
    id: uuid(),
    title: 'Modelo de dados',
    description:
      'Representa a coleção de dados de interesse e como eles são interpretados.',
    question:
      '[V ou F] O modelo de dados identifica os recursos que precisam ser gerenciados pelo sistema.',
    solution: 'F',
    solutionText:
      'Falso, o modelo de dados identifica as responsabilidades importantes: funções básicas do sistema, infraestrutura arquitetural e satisfação aos critérios de qualidade.',
    stars: 4,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-3.png',
  },
  {
    id: uuid(),
    title: 'Modelo de dados',
    description:
      'Representa a coleção de dados de interesse e como eles são interpretados.',
    question:
      '[V ou F] O modelo de dados determina todos os custos que envolvem as tecnologias do projeto.',
    solution: 'F',
    solutionText:
      'Falso, determina como as responsabilidades serão alocadas em elementos estruturais e comportamentais (módulos, componentes e conectores).',
    stars: 4,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-4.png',
  },
  {
    id: uuid(),
    title: 'Mapeamento entre elementos',
    description: 'Representa o mapeamento dos elementos de uma arquitetura.',
    question:
      '[V ou F] Um exemplo de mapeamento é o realizado entre unidades de desenvolvimento (módulos) para unidades de execução (processos).',
    solution: 'V',
    solutionText:
      'Verdadeiro. outro exemplo é o mapeamento de processos para CPUs específicas onde esses processos são executados.',
    stars: 2,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-5.png',
  },
  {
    id: uuid(),
    title: 'Mapeamento entre elementos',
    description: 'Representa o mapeamento dos elementos de uma arquitetura.',
    question:
      '[V ou F] Uma arquitetura prover dois tipos de mapeamento: (1) entre os elementos em diferentes visões; (2) entre os elementos de software para elementos de hardware.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-6.png',
  },
  {
    id: uuid(),
    title: 'Binding Time',
    description:
      'Introduzem faixas de variações permitidas sobre decisões arquiteturais.',
    question:
      '[V ou F] Uma decisão binding time define o escopo, o ponto de ciclo de vida e ainda os mecanismos para atender à variação.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-7.png',
  },
  {
    id: uuid(),
    title: 'Binding Time',
    description:
      'Introduzem faixas de variações permitidas sobre decisões arquiteturais.',
    question:
      '[V ou F] Ao tomar uma decisão binding time é preciso considerar tanto os custos para implementar a decisão como os custos para fazer uma modificação após a implementação.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-8.png',
  },
  {
    id: uuid(),
    title: 'Gerenciamento de recursos',
    description:
      'Refere-se a utilização de recursos compartilhados na arquitetura.',
    question:
      '[V ou F] As decisões de gerenciamento de recursos determinam as funções básicas do sistema e a infraestrutura arquitetural.',
    solution: 'F',
    solutionText:
      'Falso, identifica os recursos que devem ser gerenciados e determina os limites de cada um. Indicando o impacto da saturação em diferentes recursos.',
    stars: 6,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-9.png',
  },
  {
    id: uuid(),
    title: 'Gerenciamento de recursos',
    description:
      'Refere-se a utilização de recursos compartilhados na arquitetura.',
    question:
      '[V ou F] A CPU é um exemplo de recurso compartilhado considerado no gerenciamento de recursos.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-10.png',
  },
  {
    id: uuid(),
    title: 'Alocação de responsabilidades',
    description:
      'Referem-se às decisões que incluem a decomposição funcional, modelagem de objetos do mundo real e agrupamento.',
    question:
      '[V ou F] As decisões de alocação de responsabilidades identificam funções básicas do sistema, a infraestrutura arquitetural e a satisfação aos critérios de qualidade.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-11.png',
  },
  {
    id: uuid(),
    title: 'Alocação de responsabilidades',
    description:
      'Referem-se às decisões que incluem a decomposição funcional, modelagem de objetos do mundo real e agrupamento.',
    question:
      '[V ou F] A alocação de responsabilidades determina os mecanismos de comunicação interna e externa ao sistema.',
    solution: 'F',
    solutionText:
      'Falso, essa ação é realizada com decisões de modelo de coordenação.',
    stars: 4,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-12.png',
  },
  {
    id: uuid(),
    title: 'Modelo de coordenação',
    description: 'Compreende os mecanismos de comunicação entre os elementos.',
    question:
      '[V ou F] Decisões de modelo de coordenação identificam e atribuem elementos em tempo de execução para processadores',
    solution: 'F',
    solutionText:
      'Falso, o modelo de coordenação identifica os elementos do sistema que devem ou não devem coordenar.',
    stars: 4,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-13.png',
  },
  {
    id: uuid(),
    title: 'Modelo de coordenação',
    description: 'Compreende os mecanismos de comunicação entre os elementos.',
    question:
      '[V ou F] As decisões de modelo de coordenação determinam as propriedades de comunicação como segurança, testabilidade e desempenho.',
    solution: 'F',
    solutionText:
      'Falso, são exemplos de propriedades de comunicação: pontualidade, concorrência, completude, corretude e consistência',
    stars: 4,
    type: CardTypes.ArchDecisions,
    used: false,
    imgUrl: 'arch-decision-14.png',
  },
];

export default archDecisionsCards.slice(0, 3);
