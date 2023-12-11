import { create } from 'zustand';

export interface IUser {
  id: string;
  name: string;
  money: number;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple';
  position: {
    from: string;
    to: string;
  };
}

interface Store {
  users: IUser[];
}

interface Actions {
  getUsers: () => Promise<void>;
}

export const useUsers = create<Store & Actions>((set) => ({
  users: [],
  getUsers: async () => {
    const users: IUser[] = [
      {
        id: (Math.random() + 1).toString(36).substring(7),
        name: 'm3nnn0',
        money: 15000,
        color: 'red',
        position: {
          from: 'Start',
          to: 'Start',
        },
      },
      {
        id: (Math.random() + 1).toString(36).substring(7),
        name: 'm3nnn0',
        money: 15000,
        color: 'blue',
        position: {
          from: 'Start',
          to: 'Start',
        },
      },
      {
        id: (Math.random() + 1).toString(36).substring(7),
        name: 'm3nnn0',
        money: 15000,
        color: 'green',
        position: {
          from: 'Start',
          to: 'Start',
        },
      },
      {
        id: (Math.random() + 1).toString(36).substring(7),
        name: 'm3nnn0',
        money: 15000,
        color: 'purple',
        position: {
          from: 'Start',
          to: 'Start',
        },
      },
      {
        id: (Math.random() + 1).toString(36).substring(7),
        name: 'm3nnn0',
        money: 15000,
        color: 'yellow',
        position: {
          from: 'Start',
          to: 'Start',
        },
      },
    ];

    set({
      users,
    });
  },
}));
