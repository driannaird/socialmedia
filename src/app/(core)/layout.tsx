import DialogLoginCompoenent from "@/components/alertdialoglogin";
import NavbarComponent from "@/components/navbar";
import { getCurrentUser } from "@/lib/session";
import { FC, ReactNode } from "react";

interface CoreLayoutProps {
  children: ReactNode;
}

const CoreLayout: FC<CoreLayoutProps> = async ({ children }) => {
  const session = await getCurrentUser();

  return (
    <div className="w-full">
      {children}
      {session?.email ? <NavbarComponent /> : null}
    </div>
  );
};

export default CoreLayout;
