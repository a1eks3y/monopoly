import { Chat } from './Chat.tsx';
import { Start } from './Corners/Start.tsx';
import { gameData } from './data.ts';
import { Card } from './Card.tsx';
import { Jail } from './Corners/Jail.tsx';
import { Beach } from './Corners/Beach.tsx';
import { Jackpot } from './Corners/Jackpot.tsx';

export const Game = () => {
  return (
    <div className="grid grid-rows-[100px,466px,100px] gap-0.5">
      <div className="grid grid-cols-[100px,466px,100px] grid-rows-[100px] gap-0.5">
        <Start />
        <div className="grid grid-cols-[repeat(9,50px)] gap-0.5">
          {gameData.board.top.map((card, inx) => (
            <Card key={`${card.name}-${inx}-top`} card={card} pos={0} />
          ))}
        </div>
        <Jail />
      </div>
      <div className="grid grid-cols-[100px,466px,100px] gap-0.5">
        <div className="grid grid-rows-[repeat(9,50px)] grid-cols-[100px] gap-0.5">
          {gameData.board.left
            .concat()
            .reverse()
            .map((card, inx) => (
              <Card key={`${card.name}-${inx}-left`} card={card} pos={3} />
            ))}
        </div>
        <Chat />
        <div className="grid grid-rows-[repeat(9,50px)] gap-0.5">
          {gameData.board.right.map((card, inx) => (
            <Card key={`${card.name}-${inx}-right`} card={card} pos={1} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[100px,466px,100px] gap-0.5">
        <Beach />
        <div className="grid grid-cols-[repeat(9,50px)] gap-0.5">
          {gameData.board.bottom
            .concat()
            .reverse()
            .map((card, inx) => (
              <Card key={`${card.name}-${inx}-bottom`} card={card} pos={2} />
            ))}
        </div>
        <Jackpot />
      </div>
    </div>
  );
};
