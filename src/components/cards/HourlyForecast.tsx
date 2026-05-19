import { useSuspenseQuery } from '@tanstack/react-query';
import Card from './Card';
import { getWeather } from '../../api';
import type { Coords } from '../../types';

type Props = {
  coords: Coords;
};

export default function HourlyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Hourly Forecast (48 hours)"
      childrenClassName="flex gap-8 overflow-x-auto 2xl:justify-between"
    >
      {data?.hourly.map((hour) => (
        <div key={hour.dt} className="flex flex-col gap-2 items-center p-2">
          <p className="whitespace-nowrap 2xl-scale-110">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: 'numeric',
              minute: '2-digit',
              hour12: false,
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
            alt="weather icon"
            className="size-8 2xl:size-10"
          />
          <p>{hour.temp.toFixed(0)}°C</p>
        </div>
      ))}
    </Card>
  );
}
