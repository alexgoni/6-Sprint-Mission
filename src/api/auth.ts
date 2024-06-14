import { toast } from "react-toastify";
import {
  SignupRequestBody,
  type Auth,
  type LoginRequestBody,
} from "models/auth";
import axios from "axios";
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

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    if ([200, 201].includes(res.status)) {
      toast.success("로그인에 성공하였습니다.");
      return res;
    } else {
      return null;
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      toast.error(err.response?.data.message);
    } else {
      console.error(err);
      return null;
    }
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

    if ([200, 201].includes(res.status)) {
      toast.success("회원가입에 성공하였습니다.");
      return res;
    } else {
      return null;
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      toast.error(err.response?.data.message);
    } else {
      console.error(err);
      return null;
    }
  }
}
