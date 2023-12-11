import { useUsers } from '../../store/useUsers.ts';
import { User } from './User.tsx';

export const UsersList = () => {
  const users = useUsers((state) => state.users);
  return (
    <div className="flex flex-col gap-1.5">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
