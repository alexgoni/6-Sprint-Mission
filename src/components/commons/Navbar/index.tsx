import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { LinkButton } from "@/components/commons/Button";
import useDeviceState from "@/hooks/useDeviceState";
import Device from "@/variables/Device";
import getCookie from "@/libs/cookie";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const deviceState = useDeviceState();

  const boardsLinkClassnames = classNames({
    "text-main-blue":
      pathname.includes("/boards") || pathname.includes("/addboard"),
  });

  const itemsLinkClassnames = classNames({
    "text-main-blue": pathname.includes("/items"),
  });

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    setIsLoggedIn(!!accessToken);
  }, []);

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
        <Link href="/boards" className={boardsLinkClassnames}>
          자유게시판
        </Link>
        <Link href="/items" className={itemsLinkClassnames}>
          중고마켓
        </Link>
      </div>

      {isLoggedIn ? (
        <Image
          src="/images/ic_profile.svg"
          alt="profile"
          width={40}
          height={40}
          className="size-10 cursor-pointer rounded-full object-cover"
        />
      ) : (
        <LinkButton href="/login">로그인</LinkButton>
      )}
    </nav>
  );
}
