import type { Dispatch, SetStateAction } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  const handleValueChange = (value: string | null) => {
    if (value === null) return;
    setLocation(value);
  };

  return (
    <Select value={location} onValueChange={handleValueChange}>
      <SelectTrigger className="w-full xs:w-45">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {location === 'Custom' && (
          <SelectItem value="Custom">Custom</SelectItem>
        )}
        {locations.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const locations = [
  'Bangkok',
  'Tokyo',
  'Seoul',
  'Dubai',
  'Manila',
  'London',
  'New York',
  'Paris',
  'Berlin',
  'Madrid',
  'Rome',
  'Lisbon',
];
