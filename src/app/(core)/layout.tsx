import NavbarComponent from "@/components/navbar";
import { FC, ReactNode } from "react";

interface CoreLayoutProps {
  children: ReactNode;
}

const CoreLayout: FC<CoreLayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      {children}
      <NavbarComponent />
    </div>
  );
};

export default CoreLayout;
