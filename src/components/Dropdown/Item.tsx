import { ReactNode } from "react";
import * as S from "./Dropdown.style";

export default function Item({ children }: { children: ReactNode }) {
  return <S.DropdownItem>{children}</S.DropdownItem>;
}
