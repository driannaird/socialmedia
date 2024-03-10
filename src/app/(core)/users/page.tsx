import HeaderComponent from "@/components/header";
import PostComponent from "@/components/posts";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";

const page = async () => {
  const session = await getCurrentUser();

  return (
    <>
      <HeaderComponent typeHeader="users" />
      <div className="p-4 bg-primary text-white">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-20 h-20 bg-white rounded-full select-none border border-slate-300 "
          width={100}
          height={100}
          priority
        />
        <h2 className="text-lg font-medium mt-3">
          {!session?.name ? "Anonymouse" : session?.name}
        </h2>
        <p className="text-sm font-medium">@{session?.username}</p>
        <Button size={"sm"} className="mt-4">
          Ubah profile
        </Button>
      </div>
      <div className="px-4 text-base font-bold border-b border-slate-300 py-3">
        <span>Postingan Anda</span>
      </div>
      <div className="px-4">
        <PostComponent status="byuser" authorId={parseInt(session!.id)} />
      </div>
    </>
  );
};

export default page;
