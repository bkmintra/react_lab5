const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-lg',
  lg: 'w-16 h-16 text-2xl',
}

const colorClasses = {
  blue: 'bg-blue-600 text-white',
  purple: 'bg-purple-600 text-white',
  emerald: 'bg-emerald-600 text-white',
}

export default function Avatar({ name, size = 'md', color = 'blue' }) {
  const initial = name ? name.trim().charAt(0).toUpperCase() : ''
  const sizeStyle = sizeClasses[size] || sizeClasses.md
  const colorStyle = colorClasses[color] || colorClasses.blue

  return (
    <div
      className={`rounded-full font-bold flex items-center justify-center shrink-0 select-none ${sizeStyle} ${colorStyle}`}
    >
      {initial}
    </div>
  )
}
