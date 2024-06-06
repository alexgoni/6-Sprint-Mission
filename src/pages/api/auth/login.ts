import type { NextApiRequest, NextApiResponse } from "next";
import { LoginRequestBody, Auth } from "@pandamarket-api";
import { axiosRequester } from "@/libs/axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  try {
    const loginResult = await axiosRequester<LoginRequestBody, Auth>({
      method: "POST",
      url: "/auth/signIn",
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    const { accessToken, refreshToken } = loginResult.data;

    res.setHeader("Set-Cookie", [
      `accessToken=${accessToken}; Path=/; Max-Age=1800`,
      `refreshToken=${refreshToken}; Path=/; Max-Age=1209600`,
    ]);

    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to log in. Please try again." });
  }
}
