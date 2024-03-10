import FormRegister from "@/components/forms/register";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getCurrentUser();

  if (session?.email) {
    return redirect(`/`);
  }
  return (
    <>
      <h3 className="font-medium text-slate-500">
        Buat akun supaya Anda dapat berinteraksi.
      </h3>
      <FormRegister />
    </>
  );
};

export default RegisterPage;
