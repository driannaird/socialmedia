import Image from "next/image";
import { FC, ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 border m-6 box-border">
      <Image
        src="/logo.svg"
        alt="Logo"
        className="w-1/3"
        width={100}
        height={24}
        priority
      />
      {children}
    </div>
  );
};

export default AuthLayout;
