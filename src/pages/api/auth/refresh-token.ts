import type { NextApiRequest, NextApiResponse } from "next";
import { RefreshRequestBody, RefreshResponse } from "@pandamarket-api";
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
    const refreshResult = await axiosRequester<
      RefreshRequestBody,
      RefreshResponse
    >({
      method: "POST",
      url: "/auth/refresh-token",
      data: {
        refreshToken: req.body.refreshToken,
      },
    });

    res.setHeader("Set-Cookie", [
      `accessToken=${refreshResult.data.accessToken}; Path=/; Max-Age=1800`,
    ]);

    res.status(200).json({ message: "Refresh successful!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to refresh. Please try again." });
  }
}
