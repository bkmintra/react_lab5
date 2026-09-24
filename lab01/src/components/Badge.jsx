const variantClasses = {
  online: 'bg-green-100 text-green-700',
  away: 'bg-yellow-100 text-yellow-700',
  offline: 'bg-slate-100 text-slate-600',
  lead: 'bg-purple-100 text-purple-700',
}

export default function Badge({ variant = 'offline', children }) {
  const badgeStyle = variantClasses[variant] || variantClasses.offline

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold inline-flex items-center ${badgeStyle}`}>
      {children}
    </span>
  )
}
