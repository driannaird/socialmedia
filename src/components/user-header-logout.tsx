"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";

const UserHeaderLogout = () => {
  return (
    <>
      <DropdownMenuItem
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/auth/login`,
          })
        }
        className="cursor-pointer focus:bg-primary focus:text-white rounded-[3px]">
        <span className="px-2 text-sm">Keluar</span>
      </DropdownMenuItem>
    </>
  );
};

export default UserHeaderLogout;
