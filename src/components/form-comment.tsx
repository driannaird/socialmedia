"use client";

import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowUp, Circle, CircleAlert, CircleDashed } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const FormCommentComponent = ({ postId }: { postId: number }) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/comments", {
        text,
        postId,
      });
      if (response.status === 200) {
        setLoading(false);
        setText("");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex fixed bottom-0 right-0 left-0 bg-white p-4">
      <Input
        type="text"
        disabled={loading}
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Cari..."
        className="border-r-0 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button
        type="submit"
        disabled={loading}
        onClick={handleSubmit}
        className="bg-primary hover:bg-partial border-l-0 rounded-l-none">
        {!loading ? <ArrowUp /> : <CircleDashed className="animate-spin" />}
      </Button>
    </div>
  );
};

export default FormCommentComponent;
