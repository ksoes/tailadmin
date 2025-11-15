import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
  description: "This is Next.js Login Page TailAdmin Dashboard Template",
};

export default function Login() {
  return <LoginForm />;
}
