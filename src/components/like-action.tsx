"use client";

import { useState } from "react";
import MenyalaIcon from "./icons/menyala";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
    <div
      onClick={handleClick}
      className={`cursor-pointer ${
        loading ? "animate-spin duration-1000" : null
      }`}>
      <MenyalaIcon
        variants={status ? "full" : "outline"}
        color={status ? undefined : "#323232"}
      />
    </div>
  );
};

export default LikeActionComponent;
