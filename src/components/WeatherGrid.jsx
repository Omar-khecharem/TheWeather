import { useTranslation } from "react-i18next";
import { getWeatherIcon } from "../utils/weatherCodes";
import GeoPattern, { GeoAccent } from "./GeoPattern";

const WeatherGrid = ({ weather }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  if (!weather?.daily) return null;

  const d = weather.daily;
  const days = d.time.map((date, i) => ({
    date,
    dayName: new Date(date).toLocaleDateString(i18n.language, { weekday: "short" }),
    dateNum: new Date(date).getDate(),
    month: new Date(date).toLocaleDateString(i18n.language, { month: "short" }),
    icon: getWeatherIcon(d.weather_code[i]),
    tempMax: Math.round(d.temperature_2m_max[i]),
    tempMin: Math.round(d.temperature_2m_min[i]),
    wind: Math.round(d.wind_speed_10m_max[i]),
  }));

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="relative">
      <GeoPattern variant="dots" opacity={0.025} />
      <div className="relative">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-0.5 h-4 bg-gradient-to-b from-[#6C5CE7] to-[#a29bfe] rounded-full" />
          <h3 className="text-gray-400 text-xs font-medium tracking-widest uppercase">
            {t("forecast.weekly")}
          </h3>
          <span className="text-gray-200 text-[10px] font-mono ml-auto">
            {d.time[0] && `${new Date(d.time[0]).toLocaleDateString()} — ${new Date(d.time[d.time.length - 1]).toLocaleDateString()}`}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {days.map((day, i) => (
            <div
              key={i}
              className="relative rounded-xl bg-gray-50/80 border border-gray-100 p-4 text-center transition-all duration-300 hover:border-gray-200 hover:bg-gray-50 group"
            >
              <GeoAccent variant="cornerDiamond" className="top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              {i === 0 && (
                <span className="absolute -top-2.5 -right-2.5 px-2 py-0.5 bg-gradient-to-r from-[#6C5CE7] to-[#a29bfe] text-white text-[8px] font-bold rounded-md tracking-wider shadow-sm z-10">
                  NOW
                </span>
              )}
              <p className="text-[#1a1a2e] text-xs font-medium mb-0.5">{day.dayName}</p>
              <p className="text-gray-300 text-[10px] mb-2">{day.dateNum} {day.month}</p>
              <div className="relative inline-block">
                <img src={day.icon} alt="" className="w-9 h-9 mx-auto -my-1 relative z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 rotate-45 border border-[#6C5CE7]/5 rounded-sm" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-[#1a1a2e] text-base font-light">{day.tempMax}°</span>
                <span className="text-gray-300 text-xs">{day.tempMin}°</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <svg className="w-2.5 h-2.5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="text-gray-300 text-[10px]">{day.wind}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherGrid;
