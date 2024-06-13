import { NavLink, useLocation } from "react-router-dom";
import Button from "components/Button";
import useDeviceState from "hooks/useDeviceState";
import SmallMainLogo from "assets/icon/main_logo_small.svg";
import MainLogo from "assets/icon/main_logo.svg";
import profile from "assets/icon/profile.svg";
import COLORS from "styles/palette";
import * as S from "./Navbar.style";

export default function GNB() {
  const { pathname } = useLocation();
  const { isMobileWidth } = useDeviceState();
  const accessToken = localStorage.getItem("accessToken");

  return (
    <S.NavbarContainer>
      <NavLink to="/">
        <img src={isMobileWidth ? SmallMainLogo : MainLogo} alt="main-logo" />
      </NavLink>
      <S.NavbarLinkContainer>
        <NavLink
          to="/free-board"
          style={({ isActive }) => ({
            color: isActive ? `${COLORS.BLUE}` : "",
          })}
        >
          자유게시판
        </NavLink>
        <NavLink
          to="/items"
          style={({ isActive }) => ({
            color: isActive || pathname === "/additem" ? `${COLORS.BLUE}` : "",
          })}
        >
          중고마켓
        </NavLink>
      </S.NavbarLinkContainer>
      {accessToken ? (
        <img src={profile} alt="profile" style={{ cursor: "pointer" }} />
      ) : (
        <Button.Link to="/login">로그인</Button.Link>
      )}
    </S.NavbarContainer>
  );
}
