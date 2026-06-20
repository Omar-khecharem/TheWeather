import { useState, useCallback } from "react";
import {
  geocodeCity,
  reverseGeocode,
  getWeatherByCoords,
  getAirQuality,
} from "../utils/weatherApi";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherByCity = useCallback(async (city) => {
    setLoading(true);
    setError("");
    try {
      const geo = await geocodeCity(city);
      setLocation(geo);
      const [weatherData, airData] = await Promise.all([
        getWeatherByCoords(geo.latitude, geo.longitude),
        getAirQuality(geo.latitude, geo.longitude),
      ]);
      setWeather(weatherData);
      setAirQuality(airData);
    } catch {
      setError("error");
      setWeather(null);
      setLocation(null);
      setAirQuality(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchWeatherByCoords = useCallback(async (lat, lon) => {
    setLoading(true);
    setError("");
    try {
      const [weatherData, airData, revGeo] = await Promise.all([
        getWeatherByCoords(lat, lon),
        getAirQuality(lat, lon),
        reverseGeocode(lat, lon),
      ]);
      setWeather(weatherData);
      setAirQuality(airData);
      setLocation(revGeo);
    } catch {
      setError("error");
      setWeather(null);
      setLocation(null);
      setAirQuality(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    weather,
    location,
    airQuality,
    loading,
    error,
    fetchWeatherByCity,
    fetchWeatherByCoords,
  };
};

export default useWeather;
