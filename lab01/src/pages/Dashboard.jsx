import { useTeam } from '../context/TeamContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { users } = useTeam();

  const totalEmployees = users.length;
  const onlineEmployees = users.filter((u) => u.status === 'online').length;
  const leadEmployees = users.filter((u) => u.isLead).length;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <div className="text-4xl font-black text-blue-600 mb-2">{totalEmployees}</div>
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Members</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <div className="text-4xl font-black text-emerald-500 mb-2">{onlineEmployees}</div>
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Online Now</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <div className="text-4xl font-black text-purple-600 mb-2">{leadEmployees}</div>
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Team Leads</div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/directory" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          View All Members
        </Link>
        <Link to="/manage" className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
          Add New Employee
        </Link>
      </div>
    </div>
  );
}
