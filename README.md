# Weather Dashboard

A responsive weather dashboard built with React + TypeScript that combines:

- OpenWeather One Call forecast data
- OpenWeather air pollution data
- OpenWeather weather tile overlays (clouds, precipitation, pressure, wind, temperature)
- A MapTiler basemap rendered through Leaflet

The app lets you pick preset cities or click anywhere on the map for custom coordinates, then explores current conditions, hourly and daily forecast, and AQI/pollutant details.

## Features

- Interactive map with click-to-select location
- Selectable weather overlays (`clouds_new`, `precipitation_new`, `pressure_new`, `wind_new`, `temp_new`)
- Current weather card (temperature, feels-like, humidity, wind speed, local timezone clock)
- 48-hour hourly forecast
- Daily forecast
- Additional weather metrics (cloudiness, UV index, wind direction, pressure, sunrise, sunset)
- Air pollution side panel:
  - AQI score
  - Pollutant concentration cards
  - Per-pollutant quality level ranges (Good -> Very Poor)
- Loading skeletons with React Suspense fallbacks

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- TanStack Query
- Leaflet + React Leaflet
- MapTiler Leaflet SDK
- Zod runtime validation
- Base UI primitives

## Project Structure

```text
src/
  api.ts                     # API calls + Zod parsing
  schemas/                   # API response validators
  components/
    cards/                   # Current, hourly, daily, and additional info cards
    dropdowns/               # Location and map-type selectors
    skeletons/               # Suspense loading UI
    Map.tsx                  # Leaflet map + weather tile overlay
    MapLegend.tsx            # Dynamic legend for active overlay
    SidePanel.tsx            # Air quality details panel
  App.tsx                    # Main layout + state composition
```

## Getting Started

### 1. Prerequisites

- Node.js 20+ (recommended for Vite 8)
- npm

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env.local` in the project root:

```bash
VITE_API_KEY=your_openweather_api_key
VITE_TILER_API_KEY=your_maptiler_api_key
```

### 4. Run locally

```bash
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start dev server
- `npm run build` - type-check and build production bundle
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Data Sources

- OpenWeather:
  - Geocoding API
  - One Call 3.0 API
  - Air Pollution API
  - Weather map tile layers
- MapTiler:
  - Basemap tiles for Leaflet

## Architecture Notes

- `src/api.ts` centralizes all fetch calls.
- All API responses are validated with Zod schemas before use in UI.
- TanStack Query manages caching and async state for geocode, weather, and air pollution.
- UI rendering is split into focused cards and shared primitives for maintainability.

## Current Analysis Findings

- `npm run build` succeeds.
- `npm run lint` currently reports one issue:
  - `src/components/cards/AdditionalInfo.tsx`: sparse array in `queryKey` (`['weather', , coords]`).
- Production bundle is large (`~2.1 MB` before gzip) due map and UI dependencies; code-splitting can improve this.
- `getGeocode` and `getAirPollution` currently use `http` endpoints, which may cause mixed-content errors if the app is served over `https`.

## Next Improvements (Optional)

- Fix the `queryKey` sparse-array lint issue in `AdditionalInfo`.
- Switch all OpenWeather endpoints to `https`.
- Add query retry/error UI states.
- Split map-heavy code into lazy chunks to reduce initial load size.
