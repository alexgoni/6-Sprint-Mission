import { ReactNode } from "react";
import { Size } from "@size";

interface Props {
  children: ReactNode;
  round?: Size;
  onClick?: () => void;
}

export default function DefaultButton({
  children,
  round = "lg",
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[42px] w-max min-w-[88px] select-none items-center justify-center rounded-lg bg-main-blue px-[23px] py-3 font-semibold text-white focus:hover:bg-dark-main-blue"
    >
      {children}
    </button>
  );
}
