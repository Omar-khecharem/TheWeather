import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherGrid from "./components/WeatherGrid";
import HourlyForecast from "./components/HourlyForecast";
import GeoPattern from "./components/GeoPattern";
import GeoDivider from "./components/GeoDivider";
import SkeletonLoader from "./components/SkeletonLoader";
import useWeather from "./hooks/useWeather";
import "./i18n";
import "./App.css";

const App = () => {
  const { t, i18n } = useTranslation();
  const {
    weather,
    location,
    airQuality,
    loading,
    error,
    fetchWeatherByCity,
    fetchWeatherByCoords,
  } = useWeather();
  const [dateTime, setDateTime] = useState(new Date());
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
        },
        () => fetchWeatherByCity("London")
      );
    } else {
      fetchWeatherByCity("London");
    }
  }, [fetchWeatherByCity, fetchWeatherByCoords]);

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f0f2f8] text-[#1a1a2e] font-poppins relative"
    >
      <GeoPattern variant="triangles" opacity={0.015} />
      <GeoPattern variant="grid" opacity={0.01} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Navbar weather={weather} location={location} />

        <main className="py-4 space-y-5">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-80">
              <SearchBar onSearch={fetchWeatherByCity} loading={loading} />
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-300 hidden md:block">|</span>
              <span className="text-gray-400 text-xs">
                {dateTime.toLocaleDateString(i18n.language, {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          {error && (
            <div className="text-center py-12 animate-fadeIn">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 border border-red-200 mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm mb-2">{t("error")}</p>
              <button
                onClick={() => fetchWeatherByCity("London")}
                className="text-[#6C5CE7] text-xs underline hover:no-underline"
              >
                Try London instead
              </button>
            </div>
          )}

          {loading && !weather && <SkeletonLoader />}

          {weather && (
            <>
              <CurrentWeather weather={weather} airQuality={airQuality} location={location} />

              <GeoDivider variant="diamond" />

              <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm p-5 transition-all duration-300 hover:shadow-md">
                <HourlyForecast weather={weather} />
              </div>

              <GeoDivider variant="zigzag" />

              <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm p-5 transition-all duration-300 hover:shadow-md">
                <WeatherGrid weather={weather} />
              </div>
            </>
          )}

          {!loading && !weather && !error && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400 animate-fadeIn">
              <div className="relative mb-5">
                <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rotate-45 border border-gray-200" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-300 mb-1">Explore the weather</p>
              <p className="text-xs text-gray-300/60">Search for a city to get started</p>
            </div>
          )}
        </main>

        <GeoDivider variant="line" />

        <footer className="py-5 text-center">
          <p className="text-gray-300 text-[10px] font-mono tracking-wider">
            TheWeather &copy; {new Date().getFullYear()} &mdash; Developed by Omar Khecharem
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
