import Link from "next/link";

export default function LinkBlock({ type }: { type: "login" | "signup" }) {
  return (
    <div className="text-center">
      {type === "login" ? (
        <>
          <span>판다마켓이 처음이신가요? </span>
          <Link href="/signup" className="text-main-blue underline">
            회원가입
          </Link>
        </>
      ) : (
        <>
          <span>이미 회원이신가요? </span>
          <Link href="/login" className="text-main-blue underline">
            로그인
          </Link>
        </>
      )}
    </div>
  );
}
