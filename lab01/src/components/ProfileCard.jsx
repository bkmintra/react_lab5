import Avatar from './Avatar'
import Badge from './Badge'

const statusLabels = {
  online: 'ออนไลน์',
  away: 'ไม่อยู่ที่โต๊ะ',
  offline: 'ออฟไลน์',
}

export default function ProfileCard({ user }) {
  const { name, role, department, status, isLead } = user

  return (
    <div
      className={`flex items-center gap-3.5 bg-white rounded-xl p-[18px] transition-all ${
        isLead
          ? 'border-2 border-purple-600 shadow-[0_6px_16px_rgba(124,58,237,0.16)]'
          : 'border border-slate-200 shadow-xs'
      }`}
    >
      <Avatar name={name} size={isLead ? 'lg' : 'md'} color={isLead ? 'purple' : 'blue'} />
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-base text-slate-900 truncate">{name}</h3>
        <p className="text-[13px] text-slate-500 truncate mt-0.5 mb-2">{role} · {department}</p>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant={status}>{statusLabels[status] || status}</Badge>
          {isLead && <Badge variant="lead">หัวหน้าทีม</Badge>}
        </div>
      </div>
    </div>
  )
}
