import { useTranslation } from "react-i18next";
import { getWeatherIcon } from "../utils/weatherCodes";
import GeoPattern, { GeoAccent } from "./GeoPattern";

const HourlyForecast = ({ weather }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  if (!weather?.hourly) return null;

  const h = weather.hourly;
  const now = new Date();
  const currentHour = now.getHours();
  const todayStr = now.toISOString().split("T")[0];

  const startIdx = h.time.findIndex((t) => {
    const d = new Date(t);
    return d.getHours() >= currentHour && t.startsWith(todayStr);
  });

  const hours = h.time.slice(startIdx, startIdx + 8).map((t, i) => ({
    time: new Date(t),
    temp: Math.round(h.temperature_2m[startIdx + i]),
    code: h.weather_code[startIdx + i],
    icon: getWeatherIcon(h.weather_code[startIdx + i]),
    wind: Math.round(h.wind_speed_10m[startIdx + i]),
  }));

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="relative">
      <GeoPattern variant="grid" opacity={0.02} />
      <div className="relative">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-0.5 h-4 bg-gradient-to-b from-[#6C5CE7] to-[#a29bfe] rounded-full" />
          <h3 className="text-gray-400 text-xs font-medium tracking-widest uppercase">
            {t("forecast.hourly")}
          </h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {hours.map((hour, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-24 rounded-xl bg-gray-50/80 border border-gray-100 p-3.5 text-center transition-all duration-300 hover:border-gray-200 hover:bg-gray-50 group"
            >
              <GeoAccent variant="cornerTriangle" className="top-0 right-0" />
              <p className="text-gray-400 text-[10px] font-mono mb-2">
                {hour.time.toLocaleTimeString(i18n.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img src={hour.icon} alt="" className="w-8 h-8 mx-auto -my-1" />
              <p className="text-[#1a1a2e] text-base font-light mt-1">
                {hour.temp}<span className="text-xs text-gray-300">°</span>
              </p>
              <p className="text-gray-400 text-[9px] mt-1">{hour.wind} km/h</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
