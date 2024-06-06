import Image from "next/image";
import Link from "next/link";

export default function AuthLogo() {
  return (
    <Link href="/">
      <div className="relative mx-auto mb-10 mt-[60px] h-[66px] w-[198px] md:h-[132px] md:w-[396px]">
        <Image src="/images/main_logo.svg" alt="main-logo" fill />
      </div>
    </Link>
  );
}
