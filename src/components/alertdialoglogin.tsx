"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

interface DialogLoginProps {
  children: ReactNode;
}

const DialogLoginCompoenent: FC<DialogLoginProps> = ({ children }) => {
  const router = useRouter();

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Anda belum login!</AlertDialogTitle>
          <AlertDialogDescription>
            Silahkan login untuk melakukan aktivitas ini
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Mungkin nanti</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              router.push("/auth/login");
              router.refresh();
            }}
            className="bg-primary hover:bg-partial">
            Login sekarang{" "}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogLoginCompoenent;
