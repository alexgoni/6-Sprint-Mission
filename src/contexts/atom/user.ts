import { atom } from "jotai";

interface UserInfo {
  id: number;
  nickname: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  email: string;
}

export const userInfoAtom = atom<UserInfo | null>(null);
