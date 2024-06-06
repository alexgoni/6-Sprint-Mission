import { MainLayout } from "@/components/commons/Layout";
import { AuthLogo, EasyLogin, LinkBlock, SignupForm } from "@/components/user";

export default function Signup() {
  return (
    <MainLayout>
      <AuthLogo />
      <SignupForm />
      <EasyLogin />
      <LinkBlock type="signup" />
    </MainLayout>
  );
}
