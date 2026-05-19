import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../../api';
import Card from './Card';
import type { Coords } from '../../types';

type Props = {
  coords: Coords;
};

export const CurrentWeather = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Current Weather"
      className="md:pb-12"
      childrenClassName="flex flex-col items-center gap-6 2xl:justify-between"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-6xl font-semibold text-center">
          {data?.current.temp.toFixed(0)}°C
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${data?.current.weather[0].icon}.png`}
          alt="weather icon"
          className="size-14"
        />
        <h3 className="text-xl capitalize">
          {data?.current.weather[0].description}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-center">Local Time:</p>
        <h3 className="text-4xl font-semibold text-center">
          {new Intl.DateTimeFormat('pl-PL', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: data?.timezone,
          }).format(new Date(data.current.dt * 1000))}
        </h3>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Feels like</p>
          <p>{data.current.feels_like.toFixed(0)}°C</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Humidity</p>
          <p>{data.current.humidity}%</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Wind Speed</p>
          <p>{data.current.wind_speed.toFixed(1)} km/h</p>
        </div>
      </div>
    </Card>
  );
};
