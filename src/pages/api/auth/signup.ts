import type { NextApiRequest, NextApiResponse } from "next";
import { Auth, SignupRequestBody } from "@pandamarket-api";
import axiosRequester from "@/apis/axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  try {
    const signupResult = await axiosRequester<SignupRequestBody, Auth>({
      method: "POST",
      url: "/auth/signUp",
      data: {
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
        passwordConfirmation: req.body.pwConfirm,
      },
    });

    if ([200, 201].includes(signupResult.status)) {
      res.status(200).json({ message: "Registration successful!" });
    } else {
      res
        .status(500)
        .json({ message: "Failed to register. Please try again." });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to register. Please try again." });
  }
}
