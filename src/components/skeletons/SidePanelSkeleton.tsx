import Card from '../cards/Card';
import { Skeleton } from '../ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import Information from '../../assets/information.svg?react';

export default function SidePanelSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Air Pollution</h1>
            <Skeleton className="size-12" />
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold">AQI</h1>
                <Tooltip>
                    <TooltipTrigger>
                        <Information className="size-4 invert" />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="max-width-xs">
                            {' '}
                            Air Quality Index. Possible values: 1, 2, 3, 4, 5.
                            Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5
                            = Very Poor.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </div>
            {Array.from({ length: 8 }).map((_, i) => {
                return (
                    <Card
                        key={i}
                        childrenClassName="flex flex-col gap-3"
                        className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60"
                    >
                        <div className="flex justify-between">
                            <Skeleton className="w-12 h-7 bg-sidebar" />
                            <Skeleton className="w-12 h-7 bg-sidebar" />
                        </div>
                        <Skeleton className="w-full h-1.5 bg-sidebar" />

                        <div className="flex justify-between text-xs">
                            <Skeleton className="w-2 h-4 bg-sidebar" />
                            <Skeleton className="w-2 h-4 bg-sidebar" />
                        </div>
                        <div className="flex justify-between">
                            {Array.from({ length: 5 }).map((_, i) => {
                                return (
                                    <Skeleton
                                        key={i}
                                        className="w-15 h-6 rounded-md bg-sidebar"
                                    />
                                );
                            })}
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}
