import { MouseEvent } from "react";
import Image from "next/image";
import classNames from "classnames";
import Device from "@/variables/Device";
import useDeviceState from "@/hooks/useDeviceState";
import { SortTypeAtUI } from "@/variables/SortType";

interface Props {
  currentOrder: SortTypeAtUI;
  handleOrder: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function OrderDropdown({ currentOrder, handleOrder }: Props) {
  const deviceState = useDeviceState();

  const buttonResponsiveStyle = classNames({
    "min-w-[130px]": deviceState !== Device.Mobile,
  });

  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className={`relative flex size-[42px] cursor-pointer select-none items-center justify-center rounded-xl border border-gray-200 font-normal text-cool-gray-800 ${buttonResponsiveStyle}`}
      >
        {deviceState === Device.Mobile ? (
          <Image
            src="/images/ic_sort.svg"
            alt="sort-icon"
            width={24}
            height={24}
          />
        ) : (
          <div className="align-center flex w-full justify-between px-5">
            <span>{currentOrder}</span>
            <Image
              src="/images/ic_arrow_down.svg"
              alt="arrow-down"
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
      <div className="parent dropdown-content z-dropdown w-[130px] rounded-xl bg-white text-center shadow *:cursor-pointer *:border-b *:border-gray-200 *:py-[9px]">
        <button
          type="button"
          name="Recent"
          onClick={handleOrder}
          className="w-full hover:rounded-t-lg hover:bg-gray-50"
        >
          {SortTypeAtUI.Recent}
        </button>
        <button
          type="button"
          name="Like"
          onClick={handleOrder}
          className="w-full border-none hover:rounded-b-lg hover:bg-gray-50"
        >
          {SortTypeAtUI.Like}
        </button>
      </div>
    </div>
  );
}
