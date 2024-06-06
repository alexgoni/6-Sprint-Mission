import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  isActive: boolean;
  children: ReactNode;
  handleSubmit: () => void;
  round?: "lg" | "xl";
}

export default function SubmitButton({
  isActive,
  children,
  handleSubmit,
  round = "lg",
}: Props) {
  const classnames = classNames(
    "flex h-[42px] w-max min-w-[88px] select-none items-center justify-center rounded-lg px-[23px] py-3 font-semibold text-white",
    {
      "bg-main-blue hover:bg-dark-main-blue": isActive,
      "bg-cool-gray-400": !isActive,
      "rounded-lg": round === "lg",
      "rounded-[40px]": round === "xl",
    },
  );

  return (
    <button
      type="button"
      disabled={!isActive}
      onClick={handleSubmit}
      className={classnames}
    >
      {children}
    </button>
  );
}
