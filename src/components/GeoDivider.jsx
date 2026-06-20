const GeoDivider = ({ variant = "line" }) => {
  if (variant === "line") {
    return (
      <div className="relative py-2">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 border border-gray-200 bg-white" />
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div className="flex items-center justify-center gap-3 py-2">
        <div className="flex-1 h-px bg-gray-200" />
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rotate-45 bg-gray-300" />
          <div className="w-2 h-2 rotate-45 bg-gray-200" />
          <div className="w-2 h-2 rotate-45 bg-gray-300" />
        </div>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
    );
  }

  if (variant === "zigzag") {
    return (
      <div className="relative py-3">
        <svg className="w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
          <polyline
            points="0,8 5,0 10,8 15,0 20,8 25,0 30,8 35,0 40,8 45,0 50,8 55,0 60,8 65,0 70,8 75,0 80,8 85,0 90,8 95,0 100,8"
            fill="none"
            stroke="#e2e4ec"
            strokeWidth="0.8"
          />
        </svg>
      </div>
    );
  }

  return null;
};

export default GeoDivider;
