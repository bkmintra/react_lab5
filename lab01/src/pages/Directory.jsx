import { useTeam } from '../context/TeamContext';
import ProfileCard from '../components/ProfileCard';
import { Link } from 'react-router-dom';

export default function Directory() {
  const { users } = useTeam();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">All Employees</h2>
        <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
          {users.length} members
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {users.map((user) => (
          <Link key={user.id} to={`/directory/${user.id}`} className="block hover:shadow-lg transition-shadow rounded-2xl">
            <ProfileCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
}
