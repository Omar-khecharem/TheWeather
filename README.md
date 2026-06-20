# TheWeather

A professional weather dashboard with geometric design, internationalization, and real-time weather data. Built with React, Tailwind CSS, and Open-Meteo API.

![TheWeather Dashboard](public/logo192.png)

## Features

- **Real-time weather** — current conditions, temperature, humidity, wind, UV index, air quality
- **7-day forecast** — daily highs/lows with weather icons and wind info
- **Hourly forecast** — next 8 hours with temperature and wind trends
- **Geolocation** — auto-detect your location on load
- **City search** — search any city worldwide with autocomplete geocoding
- **Geometric design** — art-deco inspired layout with diamonds, triangles, and grid patterns
- **International (i18n)** — English, French, Arabic with full RTL support
- **Responsive** — optimized for mobile, tablet, and desktop
- **Accessible** — keyboard navigation, screen reader support, reduced motion support
- **Loading skeletons** — smooth loading state with geometric skeleton placeholders

## Tech Stack

| Tech | Purpose |
|------|---------|
| React 19 | UI framework |
| Tailwind CSS 3 | Styling |
| Open-Meteo API | Weather data (free, no key needed) |
| Nominatim API | Reverse geocoding |
| i18next | Internationalization |
| Axios | HTTP client |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Omar-khecharem/TheWeather.git
cd TheWeather
npm install --legacy-peer-deps
npm start
```

The app will open at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

Serve the `build/` folder with any static server.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx       # Top navigation with clock, location, language switcher
│   ├── SearchBar.jsx    # City search input
│   ├── CurrentWeather.jsx  # Main weather card with all current metrics
│   ├── HourlyForecast.jsx  # Hourly weather cards
│   ├── WeatherGrid.jsx     # 7-day forecast grid
│   ├── GeoPattern.jsx      # SVG geometric patterns (diamonds, triangles, dots, grid)
│   ├── GeoDivider.jsx      # Geometric dividers between sections
│   └── SkeletonLoader.jsx  # Loading skeleton
├── hooks/
│   └── useWeather.js    # Custom hook for weather data fetching
├── utils/
│   ├── weatherApi.js    # API calls (Open-Meteo, Nominatim)
│   └── weatherCodes.js  # WMO weather code mapping to icons/labels
├── locales/             # i18n translation files
│   ├── en.json
│   ├── fr.json
│   └── ar.json
├── i18n.js              # i18next configuration
├── App.js               # Main app component
├── App.css              # Global styles
├── index.js             # Entry point
├── index.css            # Tailwind directives
├── config.js            # API URLs
└── tailwind.config.js   # Tailwind configuration
```

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready stable code |
| `develop` | Integration branch for features |
| `feature/geometric-design` | Geometric UI patterns and visual design |
| `feature/i18n` | Internationalization (EN, FR, AR) |
| `feature/weather-api` | Weather API integration (Open-Meteo) |
| `feature/skeleton-loader` | Loading skeleton components |

## API Reference

This project uses **free, no-key-required** APIs:

- **Open-Meteo** — `https://api.open-meteo.com/v1/forecast` — current weather, hourly & daily forecast
- **Open-Meteo Geocoding** — `https://geocoding-api.open-meteo.com/v1/search` — city name to coordinates
- **Nominatim (OSM)** — `https://nominatim.openstreetmap.org/reverse` — reverse geocoding (coordinates to city name)
- **Open-Meteo Air Quality** — `https://air-quality-api.open-meteo.com/v1/air-quality` — European AQI

## Internationalization

Switch languages via the **EN / FR / AR** buttons in the top-right corner.

- Arabic (AR) enables full RTL layout
- Language is detected from browser settings on first visit
- Translations are stored in `src/locales/`

## Design System

- **Background**: `#f0f2f8` (light gray)
- **Cards**: `#ffffff` (white) with subtle shadows
- **Text**: `#1a1a2e` (dark purple-gray)
- **Accent**: `#6C5CE7 → #a29bfe` (purple gradient)
- **Geometric patterns**: SVG-based diamond, triangle, dot, and grid patterns
- **Typography**: Inter + Poppins font family

## Accessibility

- All interactive elements have `aria-label` / `aria-pressed` attributes
- Language buttons use native `lang` attribute
- `prefers-reduced-motion` disables all animations
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Keyboard navigable search and language controls

## License

MIT

## Author

**Omar Khecharem** — [GitHub](https://github.com/Omar-khecharem)
