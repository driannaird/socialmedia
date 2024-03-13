"use client";

import { useSession } from "next-auth/react";
import CommentIcon from "./icons/comment";
import { DrawerTrigger } from "./ui/drawer";
import DialogLoginCompoenent from "./alertdialoglogin";

const CommentActionComponent = () => {
  const { data } = useSession();

  return (
    <>
      {data?.user.email ? (
        <DrawerTrigger>
          <CommentIcon variants="outline" color="#323232" />
        </DrawerTrigger>
      ) : (
        <DialogLoginCompoenent>
          <CommentIcon variants="outline" color="#323232" />
        </DialogLoginCompoenent>
      )}
    </>
  );
};

export default CommentActionComponent;
