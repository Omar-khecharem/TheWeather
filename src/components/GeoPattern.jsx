const GeoPattern = ({ variant = "diamonds", opacity = 0.03 }) => {
  if (variant === "diamonds") {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="diamond" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="none" />
            <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="#6C5CE7" strokeWidth="0.5" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamond)" />
      </svg>
    );
  }

  if (variant === "triangles") {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="triangle" x="0" y="0" width="50" height="43.3" patternUnits="userSpaceOnUse">
            <rect width="50" height="43.3" fill="none" />
            <polygon points="25,0 50,43.3 0,43.3" fill="none" stroke="#6C5CE7" strokeWidth="0.5" opacity={opacity} />
            <polygon points="25,43.3 50,0 0,0" fill="none" stroke="#6C5CE7" strokeWidth="0.5" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangle)" />
      </svg>
    );
  }

  if (variant === "dots") {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="none" />
            <circle cx="15" cy="15" r="1.5" fill="#6C5CE7" opacity={opacity * 2} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" />
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6C5CE7" strokeWidth="0.3" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    );
  }

  return null;
};

export const GeoAccent = ({ variant = "corner", className = "" }) => {
  if (variant === "cornerDiamond") {
    return (
      <div className={`absolute w-12 h-12 overflow-hidden ${className}`}>
        <div className="absolute -top-4 -right-4 w-8 h-8 rotate-45 border border-[#6C5CE7]/15" />
        <div className="absolute -top-2 -right-2 w-5 h-5 rotate-45 border border-[#6C5CE7]/10" />
      </div>
    );
  }

  if (variant === "cornerTriangle") {
    return (
      <div className={`absolute w-8 h-8 overflow-hidden ${className}`}>
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderBottom: "10px solid rgba(108, 92, 231, 0.08)",
          }}
        />
      </div>
    );
  }

  if (variant === "cornerCircle") {
    return (
      <div className={`absolute w-10 h-10 ${className}`}>
        <div className="w-6 h-6 rounded-full border border-[#6C5CE7]/10" />
        <div className="w-3 h-3 rounded-full border border-[#6C5CE7]/8 -mt-3 ml-3" />
      </div>
    );
  }

  if (variant === "cross") {
    return (
      <div className={`absolute w-10 h-10 ${className}`}>
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#6C5CE7]/10" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-[#6C5CE7]/10" />
      </div>
    );
  }

  return null;
};

export default GeoPattern;
