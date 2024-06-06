import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  href: string;
  round?: "sm" | "lg" | "xl";
}

export default function LinkButton({ children, href, round = "lg" }: Props) {
  return (
    <Link
      href={href}
      className="flex h-[42px] w-max min-w-[88px] select-none items-center justify-center rounded-lg bg-main-blue px-[23px] py-3 font-semibold text-white focus:hover:bg-dark-main-blue"
    >
      {children}
    </Link>
  );
}
