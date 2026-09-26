import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTeam } from '../context/TeamContext';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';

export default function EmployeeDetail() {
  const { id } = useParams();
  const { getEmployee } = useTeam();
  const navigate = useNavigate();

  const user = getEmployee(id);

  if (!user) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Employee Not Found</h2>
        <button onClick={() => navigate('/directory')} className="text-blue-600 hover:underline">
          &larr; Back to Directory
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <div className="px-8 pb-8 relative">
        <div className="absolute -top-16 left-8 p-1.5 bg-white rounded-full">
          <Avatar 
            name={user.name} 
            size="lg" 
            color={user.isLead ? 'purple' : 'blue'} 
          />
        </div>
        
        <div className="mt-16 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">{user.name}</h2>
            <p className="text-lg text-slate-500 mt-1">{user.role}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {user.isLead && <Badge variant="lead">Team Lead</Badge>}
            <Badge variant={user.status}>{user.status}</Badge>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</div>
            <div className="text-slate-700">{user.email}</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
            <div className="text-slate-700">{user.phone || 'N/A'}</div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100">
          <button onClick={() => navigate('/directory')} className="text-slate-500 hover:text-slate-800 font-medium transition-colors">
            &larr; Back to Directory
          </button>
        </div>
      </div>
    </div>
  );
}
