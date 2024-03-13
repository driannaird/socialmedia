"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import DialogLoginCompoenent from "./alertdialoglogin";

const LikeActionComponent = ({
  like,
  postId,
  likeId,
}: {
  like: boolean;
  postId: number;
  likeId: string | null;
}) => {
  const [status, setStatus] = useState(like);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();

  const handleClick = async () => {
    setStatus(!status);
    setLoading(true);
    try {
      const response = await axios.post("/api/likes", {
        postId,
        status,
        likeId,
      });

      if (response.status === 200) {
        router.refresh();
      } else {
        router.refresh();
      }

      setLoading(false);
    } catch (error) {
      router.refresh();
      toast("Terjadi masalah");
      setStatus(like);
      setLoading(false);
    }
  };

  return (
    <>
      {session.data?.user.email ? (
        <div onClick={handleClick} className="cursor-pointer">
          <Heart
            fill={status ? "#FF0057" : "#ffffff"}
            color={status ? "#FF0057" : "#323232"}
          />
        </div>
      ) : (
        <DialogLoginCompoenent>
          <div className="cursor-pointer -mb-1">
            <Heart
              width={24}
              height={24}
              fill={status ? "#FF0057" : "#ffffff"}
              color={status ? "#FF0057" : "#323232"}
            />
          </div>
        </DialogLoginCompoenent>
      )}
    </>
  );
};

export default LikeActionComponent;
