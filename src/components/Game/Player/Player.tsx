import { FC } from 'react';
import { IUser } from '../../../store/useUsers.ts';

const colorMap: Record<IUser['color'], { border: string; bg: string }> = {
  blue: { border: '#54c9f0', bg: '#2191e1' },
  red: { border: '#f26b61', bg: '#cd3747' },
  green: { border: '#66b343', bg: '#b0e372' },
  purple: { border: '#a17fef', bg: '#d188e3' },
  yellow: { border: '#d98942', bg: '#d9b444' },
};

export const Player: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div
      className="w-6 h-6 rounded-full border-4"
      style={{
        borderColor: colorMap[user.color].border,
        backgroundColor: colorMap[user.color].bg,
      }}
    />
  );
};
