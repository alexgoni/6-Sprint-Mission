import { ChangeEvent } from "react";
import Image from "next/image";
import type { QueryString } from "@pandamarket-api";

interface Props {
  value: QueryString;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, placeholder, onChange }: Props) {
  return (
    <div className="relative w-full">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-[42px] w-full min-w-[242px] rounded-xl border-none bg-cool-gray-300 indent-[44px] font-normal outline-none placeholder:text-cool-gray-400"
      />
      <Image
        src="/images/ic_search.svg"
        alt="search-icon"
        width={15}
        height={15}
        className="absolute left-5 top-[13px]"
      />
    </div>
  );
}
