export function BNBCalcLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        fill="url(#bnbGradient)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M10 10H14V14H10V10Z"
        fill="white"
      />
      <defs>
        <linearGradient id="bnbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
