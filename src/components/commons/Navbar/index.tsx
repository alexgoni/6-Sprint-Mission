import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkButton } from "@/components/commons/Button";
import useDeviceState from "@/hooks/useDeviceState";
import Device from "@/@types/device";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const deviceState = useDeviceState();

  return (
    <nav className="sticky top-0 z-nav flex h-[70px] items-center border-b-[1px] border-b-[#dfdfdf] bg-white px-4 py-[10px] md:px-[34px] xl:px-[200px]">
      <Link href="/">
        {deviceState === Device.Mobile ? (
          <Image
            src="/images/main_logo_small.svg"
            alt="logo"
            width={81}
            height={40}
            priority
          />
        ) : (
          <Image
            src="/images/main_logo.svg"
            alt="logo"
            width={153}
            height={51}
            priority
          />
        )}
      </Link>

      <div className="ml-[15px] flex flex-grow items-center gap-2 font-bold text-[#4b5563] md:ml-8 md:gap-[38px] md:text-lg">
        <Link
          href="/boards"
          className={`${pathname === "/boards" && "text-main-blue"}`}
        >
          자유게시판
        </Link>
        <Link
          href="/items"
          className={`${pathname === "/items" && "text-main-blue"}`}
        >
          중고마켓
        </Link>
      </div>

      <LinkButton href="/login">로그인</LinkButton>
    </nav>
  );
}
