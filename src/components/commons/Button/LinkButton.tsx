import { ReactNode } from "react";
import Link from "next/link";
import { Size } from "@size";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  href: string;
  round?: Size;
}

export default function LinkButton({ children, href, round = "lg" }: Props) {
  const classnames = classNames(
    "flex h-[42px] w-max min-w-[88px] select-none items-center justify-center bg-main-blue px-[23px] py-3 font-semibold text-white focus:hover:bg-dark-main-blue",
    {
      "rounded-lg": round === "lg",
      "rounded-full": round === "xl",
    },
  );

  return (
    <Link href={href} className={classnames}>
      {children}
    </Link>
  );
}
