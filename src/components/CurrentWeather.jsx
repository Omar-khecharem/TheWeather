import { useTranslation } from "react-i18next";
import { getWeatherIcon, getWeatherLabel } from "../utils/weatherCodes";
import GeoPattern, { GeoAccent } from "./GeoPattern";

const CurrentWeather = ({ weather, airQuality, location }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  if (!weather?.current) return null;

  const c = weather.current;
  const d = weather.daily;
  const weatherCode = c.weather_code;

  const aqi = airQuality?.current?.european_aqi;
  const aqiLevel =
    aqi <= 20 ? "good" : aqi <= 40 ? "fair" : aqi <= 60 ? "moderate" : aqi <= 80 ? "poor" : "veryPoor";
  const aqiColor =
    aqi <= 20 ? "#4ade80" : aqi <= 40 ? "#facc15" : aqi <= 60 ? "#fb923c" : aqi <= 80 ? "#ef4444" : "#a855f7";

  const cityName = location?.name || "";
  const countryCode = location?.country_code || "";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-sm p-6 md:p-8"
    >
      <GeoPattern variant="diamonds" opacity={0.025} />
      <GeoPattern variant="dots" opacity={0.04} />

      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#6C5CE7]/[0.03] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-[#a29bfe]/[0.03] to-transparent rounded-full blur-3xl" />

      <GeoAccent variant="cornerDiamond" className="top-0 right-0" />
      <GeoAccent variant="cornerDiamond" className="bottom-0 left-0 rotate-180" />
      <GeoAccent variant="cornerCircle" className="top-0 left-0" />
      <GeoAccent variant="cornerCircle" className="bottom-0 right-0 rotate-180" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <div className="flex items-center gap-2 bg-gray-50/80 border border-gray-100 rounded-lg px-3 py-1.5">
            <svg className="w-3.5 h-3.5 text-[#6C5CE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h2 className="text-[#1a1a2e] text-base font-medium">
              {cityName || "---"}
            </h2>
          </div>
          {countryCode && (
            <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 uppercase">
              {countryCode}
            </span>
          )}
          <span className="text-[11px] text-gray-300 font-mono ml-auto">
            {new Date().toLocaleDateString(i18n.language, {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
              <img src={getWeatherIcon(weatherCode)} alt="" className="w-20 h-20 -my-4" />
              <div>
                <span className="text-6xl md:text-7xl font-light text-[#1a1a2e] tracking-tighter">
                  {Math.round(c.temperature_2m)}
                </span>
                <span className="text-2xl text-gray-300 font-light align-top ml-1">°C</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm capitalize mb-3">{getWeatherLabel(weatherCode)}</p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm flex-wrap">
              <span className="text-gray-500">
                <span className="text-gray-300 font-medium">H</span> {Math.round(d.temperature_2m_max[0])}°
              </span>
              <span className="w-px h-3 bg-gray-200" />
              <span className="text-gray-500">
                <span className="text-gray-300 font-medium">L</span> {Math.round(d.temperature_2m_min[0])}°
              </span>
              <span className="w-px h-3 bg-gray-200" />
              <span className="text-gray-500 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 font-medium mr-0.5">{t("weather.feelsLike")}</span> {Math.round(c.apparent_temperature)}°
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 w-full lg:w-auto">
            {[
              { label: t("weather.humidity"), value: `${c.relative_humidity_2m}%` },
              { label: t("weather.wind"), value: `${Math.round(c.wind_speed_10m)} km/h` },
              { label: t("weather.airQuality"), value: aqi ? t(`weather.${aqiLevel}`) : "--", color: aqiColor },
              { label: "UV", value: c.uv_index ?? "--" },
              { label: t("weather.sunrise"), value: d.sunrise?.[0] ? new Date(d.sunrise[0]).toLocaleTimeString(i18n.language, { hour: "2-digit", minute: "2-digit" }) : "--" },
              { label: t("weather.sunset"), value: d.sunset?.[0] ? new Date(d.sunset[0]).toLocaleTimeString(i18n.language, { hour: "2-digit", minute: "2-digit" }) : "--" },
            ].map((item, i) => (
              <div key={i} className="relative px-3 py-3 rounded-xl bg-gray-50/80 border border-gray-100 text-center overflow-hidden group hover:bg-gray-50 transition-colors">
                <div className="absolute -top-3 -right-3 w-6 h-6 rotate-45 border border-[#6C5CE7]/5 group-hover:border-[#6C5CE7]/10 transition-colors" />
                <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">{item.label}</p>
                {item.color ? (
                  <p className="text-lg font-light" style={{ color: item.color }}>{item.value}</p>
                ) : (
                  <p className="text-[#1a1a2e] text-lg font-light">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
