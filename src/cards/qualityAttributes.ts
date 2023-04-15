import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from '../types';

const qualityAttributesCards: Card[] = [
  {
    id: uuid(),
    title: 'Disponibilidade',
    description:
      'Refere-se a capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.',
    question:
      '[V ou F] Não se pode mensurar a disponibilidade de um sistema que esteja disponível 24 horas, em 7 dias por semana.',
    solution: 'F',
    solutionText:
      'Falso, a disponibilidade pode ser medida pelo tempo percentual, o tempo para detectar uma falha, o tempo para reparar uma falha.',
    stars: 4,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-1.png',
  },
  {
    id: uuid(),
    title: 'Disponibilidade',
    description:
      'Refere-se a capacidade de um sistema para mascarar um período de interrupção do serviço num intervalo de tempo.',
    question:
      '[V ou F] A disponibilidade de um sistema está intimamente relacionado com a segurança, desempenho e qualquer outro atributo que envolva o conceito de falha inaceitável.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-2.png',
  },
  {
    id: uuid(),
    title: 'Interoperabilidade',
    description:
      'Refere-se ao grau em que dois ou mais sistemas podem trocar informações úteis através de interfaces em um contexto específico.',
    question:
      '[V ou F] É possível medir a interoperabilidade entre sistemas através de uma pré análise do que se pode alterar no sistema.',
    solution: 'F',
    solutionText:
      'Falso, é possível medí-la através da porcentagem de troca de informações processadas corretamente ou informações corretamente rejeitadas entre sistemas.',
    stars: 6,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-3.png',
  },
  {
    id: uuid(),
    title: 'Interoperabilidade',
    description:
      'Refere-se ao grau em que dois ou mais sistemas podem trocar informações úteis através de interfaces em um contexto específico.',
    question:
      '[V ou F] Dois sistemas podem trocar informações sem se comunicarem diretamente.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-4.png',
  },
  {
    id: uuid(),
    title: 'Modificabilidade',
    description:
      'Refere-se à mudança, no custo e nos riscos de fazer alterações no sistema.',
    question:
      '[V ou F] Para realizar uma alteração no sistema é preciso que se considere a probabilidade da alteração, quando a alteração será feita, por quem e qual seu custo.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-5.png',
  },
  {
    id: uuid(),
    title: 'Modificabilidade',
    description:
      'Refere-se à mudança, no custo e nos riscos de fazer alterações no sistema.',
    question:
      '[V ou F] Tornar um sistema mais modificável envolve o custo da introdução dos mecanismos para torná-lo mais modificável e o custo da modificação usando esses mecanismos.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-6.png',
  },
  {
    id: uuid(),
    title: 'Desempenho',
    description:
      'Refere-se ao tempo e à capacidade do sistema de atender aos requisitos de tempo.',
    question:
      '[V ou F] O desempenho do sistema está geralmente associado diretamente à sua escalabilidade.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-7.png',
  },
  {
    id: uuid(),
    title: 'Desempenho',
    description:
      'Refere-se ao tempo e à capacidade do sistema de atender aos requisitos de tempo.',
    question:
      '[V ou F] É possível medir o desempenho de um sistema pelo grau de satisfação do usuário em utilizá-lo.',
    solution: 'F',
    solutionText:
      'Falso, o desempenho de um sistema pode ser medido pela taxa de perda, instabilidade, vazão e latência.',
    stars: 2,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-8.png',
  },
  {
    id: uuid(),
    title: 'Segurança',
    description:
      'Refere-se a uma medida da capacidade do sistema de proteger dados e informações contra acessos não autorizados.',
    question:
      '[V ou F] É possível medir a segurança de um sistema pelo número de ataques detidos, pelo tempo de recuperação após um ataque bem sucedido.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-9.png',
  },
  {
    id: uuid(),
    title: 'Segurança',
    description:
      'Refere-se a uma medida da capacidade do sistema de proteger dados e informações contra acessos não autorizados.',
    question:
      '[V ou F] É possível caracterizar a segurança diante de três características simples: Integridade, confidencialidade, disponibilidade.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 4,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-10.png',
  },
  {
    id: uuid(),
    title: 'Testabilidade',
    description:
      'Refere-se à facilidade com que o software pode ser feito para demonstrar suas falhas.',
    question:
      '[V ou F] Se um software gera poucas falhas com diversos testes e tipos de entradas diferentes, ele tem uma alta testabilidade.',
    solution: 'F',
    solutionText:
      'Falso, para ter uma alta testabilidade o software tende a gerar muita falhas de acordo com os testes. A ocultação de falhas tende à baixa testabilidade.',
    stars: 4,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-11.png',
  },
  {
    id: uuid(),
    title: 'Testabilidade',
    description:
      'Refere-se à facilidade com que o software pode ser feito para demonstrar suas falhas.',
    question:
      '[V ou F] A escolha da tecnologia determina quais tecnologias estão disponíveis para ajudar a alcançar os cenários de testabilidade que se aplicam à arquitetura.',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-12.png',
  },
  {
    id: uuid(),
    title: 'Usabilidade',
    description:
      'Refere-se à facilidade com que o usuário realiza uma tarefa desejada e com o tipo de suporte que o sistema oferece.',
    question:
      '[V ou F] Por não ser possível medir-la, a usabilidade é uma das questões mais dificeis no desenvolvimento de um software.',
    solution: 'F',
    solutionText:
      'Falso, é possível medir a usabilidade através do número de erros e de tarefas executadas pelo usuário, pela satisfação do usuário, pelo tempo de tarefa, etc.',
    stars: 4,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-13.png',
  },
  {
    id: uuid(),
    title: 'Usabilidade',
    description:
      'Refere-se à facilidade com que o usuário realiza uma tarefa desejada e com o tipo de suporte que o sistema oferece.',
    question:
      '[V ou F] Para considerar a usabilidade, é preciso que o sistema forneça as funcionalidades necessárias ao usuário e antecipe suas necessidades. ',
    solution: 'V',
    solutionText: 'Verdadeiro',
    stars: 2,
    type: CardTypes.QualityAttributes,
    used: false,
    imgUrl: 'quality-attr-14.png',
  },
];

export default qualityAttributesCards;
