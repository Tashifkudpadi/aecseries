function Logo({ className = 'h-7 w-7' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 8C6 6.89543 6.89543 6 8 6H18C22.4183 6 26 9.58172 26 14C26 18.4183 22.4183 22 18 22H8C6.89543 22 6 21.1046 6 20V8Z"
        fill="url(#logoGrad)"
      />
      <path
        d="M2 14C2 9.58172 5.58172 6 10 6H12C13.1046 6 14 6.89543 14 8V20C14 21.1046 13.1046 22 12 22H10C5.58172 22 2 18.4183 2 14Z"
        fill="#2563eb"
      />
      <defs>
        <linearGradient id="logoGrad" x1="6" y1="6" x2="26" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
