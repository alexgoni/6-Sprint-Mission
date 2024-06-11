import Image from "next/image";
import Link from "next/link";

export default function EasyLogin() {
  return (
    <div className="my-6 flex h-[74px] items-center gap-4 rounded-lg bg-[#e6f2ff] px-[23px]">
      <span className="flex-grow">간편 로그인하기</span>
      <Link
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/ic_google.svg"
          alt="google-icon"
          width={42}
          height={42}
        />
      </Link>
      <Link
        href="https://www.kakaocorp.com/page/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/ic_kakao.svg"
          alt="kakao-icon"
          width={42}
          height={42}
        />
      </Link>
    </div>
  );
}
