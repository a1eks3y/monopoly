import './App.css';
import { UsersList } from './components/User/UsersList.tsx';
import { useUsers } from './store/useUsers.ts';
import { useEffect } from 'react';
import { Game } from './components/Game/Game.tsx';
import { useSocket } from './store/useSocket.ts';

export const App = () => {
  const getUsers = useUsers((state) => state.getUsers);
  const connect = useSocket((state) => state.connect);

  useEffect(() => {
    getUsers();
    connect();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center gap-8">
      <UsersList />
      <Game />
    </div>
  );
};

export default App;
