import Card from '../cards/Card';
import { Skeleton } from '../ui/skeleton';

export default function HourlySkeleton() {
  return (
    <Card
      title="Hourly Forecast (48 hours)"
      childrenClassName="flex gap-8 overflow-x-auto 2xl:justify-between"
    >
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2 items-center p-2">
          <Skeleton className="w-15 h-6" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="w-8 h-6" />
        </div>
      ))}
    </Card>
  );
}
