export const weatherCodes = {
  0: { icon: "01d", label: "Clear sky" },
  1: { icon: "02d", label: "Mainly clear" },
  2: { icon: "03d", label: "Partly cloudy" },
  3: { icon: "04d", label: "Overcast" },
  45: { icon: "50d", label: "Foggy" },
  48: { icon: "50d", label: "Depositing rime fog" },
  51: { icon: "09d", label: "Light drizzle" },
  53: { icon: "09d", label: "Moderate drizzle" },
  55: { icon: "09d", label: "Dense drizzle" },
  56: { icon: "09d", label: "Freezing light drizzle" },
  57: { icon: "09d", label: "Freezing dense drizzle" },
  61: { icon: "10d", label: "Slight rain" },
  63: { icon: "10d", label: "Moderate rain" },
  65: { icon: "10d", label: "Heavy rain" },
  66: { icon: "13d", label: "Freezing light rain" },
  67: { icon: "13d", label: "Freezing heavy rain" },
  71: { icon: "13d", label: "Slight snow fall" },
  73: { icon: "13d", label: "Moderate snow fall" },
  75: { icon: "13d", label: "Heavy snow fall" },
  77: { icon: "13d", label: "Snow grains" },
  80: { icon: "09d", label: "Slight rain showers" },
  81: { icon: "09d", label: "Moderate rain showers" },
  82: { icon: "09d", label: "Violent rain showers" },
  85: { icon: "13d", label: "Slight snow showers" },
  86: { icon: "13d", label: "Heavy snow showers" },
  95: { icon: "11d", label: "Thunderstorm" },
  96: { icon: "11d", label: "Thunderstorm with slight hail" },
  99: { icon: "11d", label: "Thunderstorm with heavy hail" },
};

export const getWeatherIcon = (code) => {
  const w = weatherCodes[code] || weatherCodes[0];
  return `https://openweathermap.org/img/wn/${w.icon}@2x.png`;
};

export const getWeatherLabel = (code) => {
  const w = weatherCodes[code] || weatherCodes[0];
  return w.label;
};
