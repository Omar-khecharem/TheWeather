import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "fr", label: "FR", dir: "ltr" },
  { code: "ar", label: "AR", dir: "rtl" },
];

const Navbar = ({ weather, location }) => {
  const { i18n } = useTranslation();
  const [dateTime, setDateTime] = useState(new Date());
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const cityName = location?.name || "";
  const countryName = location?.country || "";

  return (
    <header>
      <nav
        dir={isRtl ? "rtl" : "ltr"}
        className="flex items-center justify-between py-5 px-2"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 group" aria-label="TheWeather home">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#a29bfe] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 rounded-xl border border-white/20" />
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h1 className="text-[#1a1a2e] text-xl font-semibold tracking-wide leading-none">
                The<span className="text-[#6C5CE7]">Weather</span>
              </h1>
              {cityName && (
                <p className="text-gray-400 text-[11px] mt-0.5 flex items-center gap-1">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {cityName}{countryName ? `, ${countryName}` : ""}
                </p>
              )}
            </div>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="text-center" aria-label="Current time">
            <p className="text-2xl font-light text-[#1a1a2e] leading-none tabular-nums">
              {dateTime.toLocaleTimeString(i18n.language, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-gray-400 text-[10px] tracking-wider uppercase mt-1">
              {dateTime.toLocaleDateString(i18n.language, {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2" role="group" aria-label="Language selector">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              lang={lang.code}
              aria-pressed={i18n.language === lang.code}
              className={`px-3 py-1.5 text-[11px] font-mono tracking-wider rounded-lg border transition-all duration-200 ${
                i18n.language === lang.code
                  ? "border-[#6C5CE7] text-[#6C5CE7] bg-[#6C5CE7]/5 shadow-sm"
                  : "border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-500"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
