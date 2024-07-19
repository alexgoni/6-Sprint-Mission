import { atom } from "jotai";

interface UserInfo {
  id: number;
  nickname: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  email: string;
}

const atomWithLocalStorage = (key: string, initialValue: null) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);

    if (!item) return initialValue;
    return JSON.parse(item);
  };

  const baseAtom = atom(getInitialValue());

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;

      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    },
  );

  return derivedAtom;
};

export const userInfoAtom = atomWithLocalStorage("user-info", null);
