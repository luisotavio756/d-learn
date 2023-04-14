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
    imgUrl: 'quality-attr-3.png',
  },
];

export default qualityAttributesCards;
