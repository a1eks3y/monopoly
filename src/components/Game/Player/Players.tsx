import { FC, PropsWithChildren } from 'react';

export const Players: FC<PropsWithChildren> = ({ children }) => {
  return <div className="absolute w-full h-full flex justify-center items-center flex-wrap gap-x-2">{children}</div>;
};
