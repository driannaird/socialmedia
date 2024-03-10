"use client";

import Image from "next/image";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const WritePostComponent = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
  });
  const { data } = useSession();
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post("/api/posts", formData);

      if (response.status === 200) {
        toast("Postingan berhasil di buat");
        setLoading(false);
        router.push(`/`);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="px-6 mb-32">
      <div className="flex gap-2 mb-3 items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-10 h-10 select-none border border-slate-300 rounded-full"
          width={100}
          height={100}
          priority
        />
        <span className="text-lg font-medium">{data?.user.username}</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <ReactTextareaAutosize
            minRows={5}
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full cursor-text focus:outline-none"
            placeholder={`Apa yang sedang menyala hari ini ${data?.user.username}?`}
          />
        </div>
        <div
          onClick={() => toast("Fitur ini belum tersedia")}
          className="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4_12992)">
              <path
                d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z"
                fill="#323232"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_12992">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex justify-end mt-4">
          <Button
            disabled={loading}
            type="submit"
            className="bg-primary hover:bg-partial">
            {loading ? "Loading..." : "Kirim"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WritePostComponent;
