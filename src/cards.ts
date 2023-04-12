import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from './types';

const cards: Card[] = [
  {
    id: uuid(),
    description:
      'Define quais as tecnologias disponíveis para realizar as demais decisões arquiteturais.',
    question:
      '[V ou F] A escolha da tecnologia é realizada apenas pelo arquiteto pois é a pessoa com mais experiência no time de projeto.',
    solution: 'F',
    solutionText:
      'A escolha da tecnologia pode ser feita tanto pelo arquiteto de software como por terceiros.',
    stars: 3,
    type: CardTypes.ArchDecisions,
    used: false,
  },
  {
    id: uuid(),
    description: 'teste 2',
    question: '[V ou F] resposta V',
    solution: 'V',
    solutionText:
      'A escolha da tecnologia pode ser feita tanto pelo arquiteto de software como por terceiros.',
    stars: 5,
    type: CardTypes.QualityAttributes,
    used: false,
  },
  {
    id: uuid(),
    description: 'teste 3',
    question: '[V ou F] resposta F',
    solution: 'F',
    solutionText:
      'A escolha da tecnologia pode ser feita tanto pelo arquiteto de software como por terceiros.',
    stars: 5,
    type: CardTypes.QualityAttributes,
    used: false,
  },
  {
    id: uuid(),
    description: 'teste 4',
    question: '[V ou F] resposta V',
    solution: 'V',
    solutionText:
      'A escolha da tecnologia pode ser feita tanto pelo arquiteto de software como por terceiros.',
    stars: 3,
    type: CardTypes.ArchPattern,
    used: false,
  },
  {
    id: uuid(),
    description: 'Avance três casas no tabuleiro!',
    type: CardTypes.LuckOrBackLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
];

export default cards;
