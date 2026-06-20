import axios from "axios";
import config from "../config";

export const geocodeCity = async (city) => {
  const res = await axios.get(config.GEOCODE_URL, {
    params: { name: city, count: 5, language: "en", format: "json" },
  });
  if (!res.data.results?.length) throw new Error("City not found");
  return res.data.results[0];
};

export const reverseGeocode = async (lat, lon) => {
  try {
    const res = await axios.get("https://nominatim.openstreetmap.org/reverse", {
      params: { lat, lon, format: "json", "accept-language": "en" },
      headers: { "User-Agent": "TheWeather/1.0" },
    });
    const addr = res.data?.address;
    return {
      name: addr?.city || addr?.town || addr?.village || addr?.county || "",
      country: addr?.country || "",
      country_code: addr?.country_code || "",
    };
  } catch {
    return { name: "", country: "", country_code: "" };
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  const res = await axios.get(config.WEATHER_URL, {
    params: {
      latitude: lat,
      longitude: lon,
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "weather_code",
        "wind_speed_10m",
        "pressure_msl",
        "visibility",
        "uv_index",
      ].join(","),
      hourly: [
        "temperature_2m",
        "weather_code",
        "wind_speed_10m",
      ].join(","),
      daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "weather_code",
        "wind_speed_10m_max",
        "sunrise",
        "sunset",
      ].join(","),
      timezone: "auto",
      forecast_days: 7,
    },
  });
  return res.data;
};

export const getAirQuality = async (lat, lon) => {
  try {
    const res = await axios.get(config.AIR_QUALITY_URL, {
      params: {
        latitude: lat,
        longitude: lon,
        current: "european_aqi",
      },
    });
    return res.data;
  } catch {
    return null;
  }
};
