import Image from "next/image";
import { db } from "@/lib/db";
import { format } from "date-fns";
import LikesComponents from "./likes";
import CommentsComponent from "./comments";
import { Suspense } from "react";
import PostSkelaton from "./posts/postskelaton";

const PostComponent = async ({
  status,
  authorId,
}: {
  status: "all" | "byuser";
  authorId?: number;
}) => {
  let posts: any = [];
  if (status === "all") {
    posts = await db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        like: true,
        comments: true,
      },
    });
  } else if (status === "byuser") {
    posts = await db.post.findMany({
      where: {
        authorId: authorId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        like: true,
        comments: true,
      },
    });
  }

  return (
    <div className="mb-20">
      <Suspense fallback={<PostSkelaton />}>
        {posts.map(
          (post: {
            id: number;
            author: { username: string };
            createdAt: string;
            content: string;
            comments: [];
            like: [];
          }) => (
            <div key={post.id} className="mt-6 border-b border-slate-300 pb-3">
              <div className="flex gap-2 mb-3">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  className="w-10 h-10 select-none border border-slate-300 rounded-full"
                  width={100}
                  height={100}
                  priority
                />
                <div className="flex flex-col justify-center">
                  <span className="text-base font-medium">
                    {post.author.username}
                  </span>
                  <span className="text-xs text-primary">
                    {format(post.createdAt, "MMMM d, yyyy")}
                  </span>
                </div>
              </div>
              <p>{post.content}</p>
              <div className="flex gap-2 mt-3">
                <LikesComponents postId={post.id} />
                <CommentsComponent postId={post.id} />
              </div>
              <span className="text-xs">
                {post?.comments.length} orang berkomentar
              </span>
            </div>
          )
        )}
      </Suspense>
      {/* <div className="mt-6 border-b border-slate-300 pb-3">
        <div className="flex gap-2 mb-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="w-10 h-10 select-none border border-slate-300 rounded-full"
            width={100}
            height={100}
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="text-base font-medium">driantcho</span>
            <span className="text-xs text-primary">2 hari yang lalu</span>
          </div>
        </div>
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-full mb-3 h-auto select-none border border-slate-300 rounded-sm"
          width={100}
          height={100}
          priority
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
          delectus?. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi, ab.
        </p>
        <div className="flex gap-2 mt-3">
          <MenyalaIcon variants="outline" color="#323232" />
          <CommentIcon variants="outline" color="#323232" />
        </div>
        <span className="text-xs">100 orang menyala</span>
      </div> */}
    </div>
  );
};

export default PostComponent;
