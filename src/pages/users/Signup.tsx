import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "components/Layout";
import { AuthLogo, EasyLogin, LinkBlock, SignupForm } from "templates/Users";

export default function Signup() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) navigate("/");
  }, []);

  return (
    <MainLayout>
      <AuthLogo />
      <SignupForm />
      <EasyLogin />
      <LinkBlock type="signup" />
    </MainLayout>
  );
}
