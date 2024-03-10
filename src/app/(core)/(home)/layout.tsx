import HeaderComponent from "@/components/header";
import NavHomeComponent from "@/components/home/navigation";
import { FC, ReactNode } from "react";

interface CoreLayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<CoreLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderComponent typeHeader="home" />
      <NavHomeComponent />
      <div className="px-6">{children}</div>
    </>
  );
};

export default HomeLayout;
