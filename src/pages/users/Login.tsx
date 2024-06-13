import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "components/Layout";
import { AuthLogo, EasyLogin, LinkBlock, LoginForm } from "templates/Users";

export default function Login() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) navigate("/");
  }, []);

  return (
    <MainLayout>
      <AuthLogo />
      <LoginForm />
      <EasyLogin />
      <LinkBlock type="login" />
    </MainLayout>
  );
}
