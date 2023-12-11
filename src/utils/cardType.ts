import { ICard, IMiddleCard, ISpecialCard } from '../components/Game/data.ts';

export const isSpecial = (card: ICard | ISpecialCard | IMiddleCard): card is ISpecialCard => !('rent' in card);
export const isMiddle = (card: ICard | ISpecialCard | IMiddleCard): card is IMiddleCard =>
  'rent' in card && card.rent.length === 4;

export const hasColor = (card: ICard | ISpecialCard | IMiddleCard): card is ICard | IMiddleCard =>
  isMiddle(card) || isCard(card);
export const isCard = (card: ICard | ISpecialCard | IMiddleCard): card is ICard =>
  'rent' in card && card.rent.length === 6;
