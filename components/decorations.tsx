export function CloudDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="25" cy="35" rx="20" ry="15" />
      <ellipse cx="50" cy="30" rx="25" ry="20" />
      <ellipse cx="75" cy="35" rx="20" ry="15" />
      <ellipse cx="40" cy="25" rx="15" ry="12" />
      <ellipse cx="60" cy="25" rx="15" ry="12" />
    </svg>
  )
}

export function StarDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export function BalloonDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="20" cy="20" rx="18" ry="20" />
      <path d="M20 40 Q20 45 18 50 Q20 48 22 50 Q20 45 20 40" fill="currentColor" />
      <line x1="20" y1="50" x2="20" y2="60" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
