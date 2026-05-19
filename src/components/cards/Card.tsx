import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
  childrenClassName?: string;
  className?: string;
};

export default function Card({
  children,
  title,
  childrenClassName,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        'p-6 rounded-xl bg-linear-to-br from-card to-card/60 shadow-md flex flex-col gap-4 2xl:h-full',
        className,
      )}
    >
      {title && <h2 className="font-semibold text-2xl">{title}</h2>}
      <div
        className={clsx(
          childrenClassName,
          'animate-[fade-in_1s_ease-out_forwards] 2xl:flex-1',
        )}
      >
        {children}
      </div>
    </div>
  );
}
