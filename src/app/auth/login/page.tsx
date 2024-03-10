import FormLogin from "@/components/forms/login";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getCurrentUser();

  if (session?.email) {
    return redirect(`/`);
  }
  return (
    <>
      <FormLogin />
    </>
  );
};

export default LoginPage;
