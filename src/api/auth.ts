import type { Auth, LoginRequestBody } from "models/auth";
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

    if (res.status === 200) return res;
    else return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
