import { Player } from '../Player/Player.tsx';
import { useUsers } from '../../../store/useUsers.ts';
import { Players } from '../Player/Players.tsx';

export const Start = () => {
  const users = useUsers((state) => state.users.filter((user) => user.position.to === 'Start'));
  return (
    <div className="bg-white aspect-square relative">
      {users.length > 0 && (
        <Players>
          {users.map((user) => (
            <Player key={user.id} user={user} />
          ))}
        </Players>
      )}
      <img className="w-full h-full" src="/cards/start.png" alt="start" />
    </div>
  );
};
