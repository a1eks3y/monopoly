import { FC } from 'react';
import { gameData, ICard, IMiddleCard, ISpecialCard } from './data.ts';
import { PerfumeChanel, Special } from './cards_data.ts';
import { hasColor, isSpecial } from '../../utils/cardType.ts';
import { formatMoney } from '../../utils/formatMoney.ts';

const rotateMap = {
  0: '-rotate-90',
  1: '',
  2: '-rotate-90',
  3: '',
};

const costMap = {
  0: { pos: 'bottom-full w-full h-[20px]', rotate: '' },
  1: { pos: 'left-full h-full w-[20px]', rotate: 'rotate-90' },
  2: { pos: 'top-full w-full h-[20px]', rotate: '' },
  3: { pos: 'right-full h-full w-[20px]', rotate: '-rotate-90' },
};
console.log(hasColor(PerfumeChanel), PerfumeChanel);
export const Card: FC<{
  card: ICard | ISpecialCard | IMiddleCard;
  pos: 0 | 1 | 2 | 3;
}> = ({ card, pos }) => {
  return (
    <div className={`w-full h-full bg-white flex justify-center items-center relative`}>
      {hasColor(card) && (
        <div
          className={`absolute ${costMap[pos].pos} flex justify-center items-center`}
          style={{
            backgroundColor: gameData.sortedCards[card.type].fill,
          }}
        >
          <div className={`text-xs ${costMap[pos].rotate}`}>${formatMoney(card.buy)}k</div>
        </div>
      )}
      <img
        src={card.url}
        alt={card.name}
        className={`max-h-[40px] max-w-[80px] object-cover ${
          pos === 3 && isSpecial(card) && card.type === Special.QUESTION ? 'rotate-180' : rotateMap[pos]
        }`}
        style={{
          objectFit: 'cover',
          transformOrigin: 'center',
        }}
      />
    </div>
  );
};
