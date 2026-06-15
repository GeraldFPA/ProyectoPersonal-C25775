function StageIcon({ name, className = "", decorative = false }) {
  const commonProps = {
    className,
    width: 56,
    height: 56,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": decorative,
    role: decorative ? undefined : "img",
  };

  switch (name) {
    case "idea":
      return (
        <svg {...commonProps} aria-label={decorative ? undefined : "Ícono de idea"}>
          <circle cx="32" cy="22" r="12" fill="#f59e0b" opacity="0.24" />
          <path d="M24 22a8 8 0 1116 0 8 8 0 01-16 0Z" fill="#f59e0b" />
          <path d="M28 34h8v6h-8z" fill="#fde68a" />
          <path d="M24 44h16v4H24z" fill="#f8fafc" />
        </svg>
      );
    case "cad":
      return (
        <svg {...commonProps} aria-label={decorative ? undefined : "Ícono de diseño CAD"}>
          <path d="M32 10l20 11v22L32 54 12 43V21l20-11z" fill="#14b8a6" opacity="0.22" />
          <path d="M32 10l20 11v22L32 54 12 43V21l20-11z" stroke="#14b8a6" strokeWidth="4" />
          <path d="M32 32l20-11" stroke="#ccfbf1" strokeWidth="3" />
          <path d="M32 32V54" stroke="#ccfbf1" strokeWidth="3" />
        </svg>
      );
    case "slicer":
      return (
        <svg {...commonProps} aria-label={decorative ? undefined : "Ícono de laminado"}>
          <rect x="14" y="14" width="36" height="8" rx="4" fill="#8b5cf6" opacity="0.3" />
          <rect x="14" y="26" width="36" height="8" rx="4" fill="#8b5cf6" opacity="0.55" />
          <rect x="14" y="38" width="36" height="8" rx="4" fill="#8b5cf6" />
          <path d="M16 23h32" stroke="#ede9fe" strokeWidth="2" />
          <path d="M16 35h32" stroke="#ede9fe" strokeWidth="2" />
        </svg>
      );
    case "printing":
      return (
        <svg {...commonProps} aria-label={decorative ? undefined : "Ícono de impresión"}>
          <rect x="12" y="16" width="40" height="24" rx="6" fill="#38bdf8" opacity="0.2" />
          <rect x="16" y="20" width="32" height="16" rx="4" fill="#38bdf8" />
          <path d="M20 28h24" stroke="#f8fafc" strokeWidth="3" />
          <path d="M26 12h12v4H26z" fill="#bae6fd" />
          <path d="M30 40h4v8h-4z" fill="#f8fafc" />
        </svg>
      );
    case "post":
      return (
        <svg {...commonProps} aria-label={decorative ? undefined : "Ícono de limpieza"}>
          <circle cx="22" cy="24" r="10" fill="#22c55e" opacity="0.3" />
          <path d="M22 18v12" stroke="#f0fdf4" strokeWidth="3" />
          <path d="M16 24h12" stroke="#f0fdf4" strokeWidth="3" />
          <path d="M38 18l8 8-8 8" stroke="#22c55e" strokeWidth="4" />
          <rect x="42" y="30" width="10" height="14" rx="3" fill="#86efac" />
        </svg>
      );
    case "final":
      return (
        <svg {...commonProps} aria-label={decorative ? undefined : "Ícono de producto final"}>
          <path d="M20 14h24v18a12 12 0 01-24 0V14z" fill="#ef4444" opacity="0.22" />
          <path d="M20 14h24v18a12 12 0 01-24 0V14z" stroke="#ef4444" strokeWidth="4" />
          <path d="M26 34h12v8H26z" fill="#fecaca" />
          <path d="M32 24l4 6h-8l4-6z" fill="#f8fafc" />
          <circle cx="32" cy="22" r="3" fill="#ef4444" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps} aria-label={decorative ? undefined : "Ícono de etapa"}>
          <circle cx="32" cy="32" r="16" fill="#38bdf8" opacity="0.25" />
        </svg>
      );
  }
}

export default StageIcon;
