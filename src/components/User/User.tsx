import { FC } from 'react';
import { IUser } from '../../store/useUsers.ts';
import { formatMoney } from '../../utils/formatMoney.ts';

export const User: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div
      className="w-[150px] h-[125px] flex justify-center flex-col items-center text-white"
      style={{
        background: Math.random() >= 2 ? user.color : '#161a1b',
      }}
    >
      <div className="w-full h-[50px] flex justify-center">
        <img
          className="h-full aspect-square rounded-full border-4"
          src="/avatar.svg"
          alt={user.name}
          style={{
            borderColor: user.color,
          }}
        />
      </div>
      <div className="">{user.name}</div>

      <div className="">${formatMoney(user.money)}k</div>
    </div>
  );
};
