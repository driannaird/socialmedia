"use client";

import { useRouter } from "next/navigation";

const HeaderNotLoginComponent = () => {
  const router = useRouter();

  const navigateHandler = (state: string) => {
    if (state === "login") {
      router.push("/auth/login");
      router.refresh();
    } else if (state === "register") {
      router.push("/auth/register");
      router.refresh();
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => navigateHandler("login")}
        className="bg-primary text-white py-1 px-4 font-medium rounded-lg hover:bg-partial">
        Masuk
      </button>
      <button
        onClick={() => navigateHandler("register")}
        className="text-primary py-1 px-4 font-medium rounded-lg hover:text-partial">
        Daftar
      </button>
    </div>
  );
};

export default HeaderNotLoginComponent;
