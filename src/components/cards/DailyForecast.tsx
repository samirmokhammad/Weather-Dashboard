import { useSuspenseQuery } from '@tanstack/react-query';
import Card from './Card';
import { getWeather } from '../../api';
import type { Coords } from '@/types';

type Props = {
  coords: Coords;
};

export const DailyForecast = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Daily Forecast"
      childrenClassName="flex flex-col gap-4 2xl:justify-between"
    >
      {data?.daily.map((day) => (
        <div key={day.dt} className="flex justify-between">
          <p className="w-9">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: 'short',
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="weather icon"
            className="size-8"
          />
          <p className="w-11">{day.temp.day.toFixed(0)}°C</p>
          <p className="text-gray-500 w-11">{day.temp.max.toFixed(0)}°C</p>
          <p className="text-gray-500 w-11">{day.temp.min.toFixed(0)}°C</p>
        </div>
      ))}
    </Card>
  );
};
