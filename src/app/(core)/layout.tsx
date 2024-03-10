import NavbarComponent from "@/components/navbar";
import { FC, ReactNode } from "react";

interface CoreLayoutProps {
  children: ReactNode;
}

const CoreLayout: FC<CoreLayoutProps> = ({ children }) => {
  return (
    <div className="w-full px-6">
      {children}
      <NavbarComponent />
    </div>
  );
};

export default CoreLayout;
