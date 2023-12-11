import { create } from 'zustand';

interface Store {
  socket: null | WebSocket;
}

interface Actions {
  connect: () => Promise<void>;
}

export const useSocket = create<Store & Actions>((set) => ({
  socket: null,
  connect: () => {
    return new Promise<void>((resolve, reject) => {
      const socket = new WebSocket('ws://localhost:8080/api/socket');
      socket.onopen = (ev) => {
        console.log('connected', ev);
        set({
          socket,
        });
        resolve();
      };
      socket.onmessage = (ev) => {
        console.log(ev);
      };
      socket.onerror = (ev) => {
        console.error(ev);
        reject(ev);
      };
    });
  },
}));
