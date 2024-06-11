import { MainLayout } from "@/components/commons/Layout";
import { AuthLogo, EasyLogin, LinkBlock, LoginForm } from "@/components/user";

export default function Login() {
  return (
    <MainLayout>
      <AuthLogo />
      <LoginForm />
      <EasyLogin />
      <LinkBlock type="login" />
    </MainLayout>
  );
}
