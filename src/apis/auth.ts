import { Auth, LoginRequestBody, SignupRequestBody } from "@pandamarket-api";
import { setCookie } from "@/libs/cookie";
import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from "@/variables/Time";
import axiosRequester from "./axios";

export async function loginRequest(user: { email: string; password: string }) {
  const { email, password } = user;

  try {
    const res = await axiosRequester<LoginRequestBody, Auth>({
      method: "POST",
      url: "/auth/signIn",
      data: {
        email,
        password,
      },
    });

    const { accessToken, refreshToken } = res.data;

    setCookie("accessToken", accessToken, ACCESS_TOKEN_EXPIRATION);
    setCookie("refreshToken", refreshToken, REFRESH_TOKEN_EXPIRATION);

    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function signupRequest(info: {
  email: string;
  nickname: string;
  password: string;
  pwConfirm: string;
}) {
  const { email, nickname, password, pwConfirm } = info;

  try {
    const res = await axiosRequester<SignupRequestBody, Auth>({
      method: "POST",
      url: "/auth/signUp",
      data: {
        email,
        nickname,
        password,
        passwordConfirmation: pwConfirm,
      },
    });

    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
}
