import Hamburger from '../assets/hamburger.svg?react';

type Props = {
  setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileHeader({ setIsSidePanelOpen }: Props) {
  return (
    <div className="w-full pr-8 h-16 bg-background sticky top-0 xs:hidden flex justify-end z-1002">
      <button onClick={() => setIsSidePanelOpen(true)}>
        <Hamburger className="size-6 invert cursor-pointer" />
      </button>
    </div>
  );
}
