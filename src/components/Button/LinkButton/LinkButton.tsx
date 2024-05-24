import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import COLORS from "styles/palette";
import DefaultButton from "../Button.style";

interface Props {
  children: ReactNode;
  to: string;
  radius?: number;
}

export default function LinkButton({ children, to = "/", radius = 8 }: Props) {
  return (
    <Link to={to}>
      <StyledLinkButton radius={radius}>{children}</StyledLinkButton>
    </Link>
  );
}

const StyledLinkButton = styled.button<{ radius: number }>`
  ${DefaultButton}
  background-color: ${COLORS.BLUE};
  border-radius: ${({ radius }) => radius}px;

  &:focus,
  &:hover {
    background-color: ${COLORS.BLUE_600};
  }
`;
