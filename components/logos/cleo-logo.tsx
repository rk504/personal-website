export function CleoLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="/cleo-logo.svg"
      className={className}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fill="url(#cleoGradient)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <defs>
        <linearGradient id="cleoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
