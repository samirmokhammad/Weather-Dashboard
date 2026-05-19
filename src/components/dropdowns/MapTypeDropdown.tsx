import type { Dispatch, SetStateAction } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type Props = {
  mapType: string;
  setMapType: Dispatch<SetStateAction<string>>;
};

export default function MapTypeDropdown({ mapType, setMapType }: Props) {
  const handleValueChange = (value: string | null) => {
    if (value === null) return;
    setMapType(value);
  };

  return (
    <Select value={mapType} onValueChange={handleValueChange}>
      <SelectTrigger className="w-full xs:w-45">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {types.map((type) => (
          <SelectItem
            key={type.title}
            value={type.title}
            className="capitalize"
          >
            {type.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const types = [
  { title: 'clouds_new', value: 'Clouds' },
  { title: 'precipitation_new', value: 'Precipitation' },
  { title: 'pressure_new', value: 'Pressure' },
  { title: 'wind_new', value: 'Wind' },
  { title: 'temp_new', value: 'Temperature' },
];
