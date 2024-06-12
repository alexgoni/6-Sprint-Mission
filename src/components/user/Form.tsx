import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { EmailInput, PWInput, TextInput } from "@/components/commons/Input";
import { SubmitButton } from "@/components/commons/Button";
import { loginRequest, signupRequest } from "@/apis/auth";

const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: false,
    password: false,
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") setUser((prev) => ({ ...prev, email: value }));
    if (name === "password") setUser((prev) => ({ ...prev, password: value }));
  };

  const handleSubmit = async () => {
    const res = await loginRequest(user);
    if (res) router.push("/items");
  };

  useEffect(() => {
    if (EMAIL_REGEXP.test(user.email)) {
      setValid((prev) => ({ ...prev, email: true }));
    } else {
      setValid((prev) => ({ ...prev, email: false }));
    }

    if (user.password.length >= 8) {
      setValid((prev) => ({ ...prev, password: true }));
    } else {
      setValid((prev) => ({ ...prev, password: false }));
    }
  }, [user.email, user.password]);

  return (
    <form>
      <div className="mb-4 md:mb-6">
        <h1 className="mb-2 block text-sm font-semibold md:text-lg">이메일</h1>
        <EmailInput
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
          error={!valid.email && !!user.email}
        />
        {!valid.email && user.email && (
          <span className="relative left-4 top-2 text-[15px] font-semibold text-error">
            잘못된 이메일입니다
          </span>
        )}
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="mb-2 block text-sm font-semibold md:text-lg">
          비밀번호
        </h1>
        <PWInput
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요"
          error={!valid.password && !!user.password}
        />
        {!valid.password && user.password && (
          <span className="relative left-4 top-2 text-[15px] font-semibold text-error">
            비밀번호를 8자 이상 입력해주세요
          </span>
        )}
      </div>

      <div className="*:h-[56px] *:w-full">
        <SubmitButton
          isActive={valid.email && valid.password}
          round="xl"
          handleSubmit={handleSubmit}
        >
          로그인
        </SubmitButton>
      </div>
    </form>
  );
}

export function SignupForm() {
  const [info, setInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    pwConfirm: "",
  });

  const [valid, setValid] = useState({
    email: false,
    nickname: false,
    password: false,
    pwConfirm: false,
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") setInfo((prev) => ({ ...prev, email: value }));
    if (name === "nickname") setInfo((prev) => ({ ...prev, nickname: value }));
    if (name === "password") setInfo((prev) => ({ ...prev, password: value }));
    if (name === "pw-confirm") {
      setInfo((prev) => ({ ...prev, pwConfirm: value }));
    }
  };

  const handleSubmit = async () => {
    const res = await signupRequest(info);
    if (res) router.push("/login");
  };

  useEffect(() => {
    if (EMAIL_REGEXP.test(info.email)) {
      setValid((prev) => ({ ...prev, email: true }));
    } else {
      setValid((prev) => ({ ...prev, email: false }));
    }

    if (info.nickname) setValid((prev) => ({ ...prev, nickname: true }));
    else setValid((prev) => ({ ...prev, nickname: false }));

    if (info.password.length >= 8) {
      setValid((prev) => ({ ...prev, password: true }));
    } else {
      setValid((prev) => ({ ...prev, password: false }));
    }

    if (info.password === info.pwConfirm) {
      setValid((prev) => ({ ...prev, pwConfirm: true }));
    } else {
      setValid((prev) => ({ ...prev, pwConfirm: false }));
    }
  }, [info.email, info.password, info.nickname, info.pwConfirm]);

  return (
    <form>
      <div className="mb-4 md:mb-6">
        <h1 className="mb-2 block text-sm font-semibold md:text-lg">이메일</h1>
        <EmailInput
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
          error={!valid.email && !!info.email}
        />
        {!valid.email && info.email && (
          <span className="relative left-4 top-2 text-[15px] font-semibold text-error">
            잘못된 이메일입니다
          </span>
        )}
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="mb-2 block text-sm font-semibold md:text-lg">닉네임</h1>
        <TextInput
          name="nickname"
          value={info.nickname}
          onChange={handleChange}
          placeholder="닉네임을 입력해주세요"
        />
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="mb-2 block text-sm font-semibold md:text-lg">
          비밀번호
        </h1>
        <PWInput
          name="password"
          value={info.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요"
          error={!valid.password && !!info.password}
        />
        {!valid.password && info.password && (
          <span className="relative left-4 top-2 text-[15px] font-semibold text-error">
            비밀번호를 8자 이상 입력해주세요
          </span>
        )}
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="mb-2 block text-sm font-semibold md:text-lg">
          비밀번호 확인
        </h1>
        <PWInput
          name="pw-confirm"
          value={info.pwConfirm}
          onChange={handleChange}
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          error={!valid.pwConfirm && !!info.pwConfirm}
        />
        {!valid.pwConfirm && info.pwConfirm && (
          <span className="relative left-4 top-2 text-[15px] font-semibold text-error">
            비밀번호가 일치하지 않습니다
          </span>
        )}
      </div>

      <div className="*:h-[56px] *:w-full">
        <SubmitButton
          isActive={
            valid.email && valid.nickname && valid.password && valid.pwConfirm
          }
          round="xl"
          handleSubmit={handleSubmit}
        >
          회원가입
        </SubmitButton>
      </div>
    </form>
  );
}
