import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { db } from "@/lib/db";
import Image from "next/image";
import { format } from "date-fns";
import FormCommentComponent from "./form-comment";
import CommentActionComponent from "./comment-action";

const CommentsComponent = async ({ postId }: { postId: number }) => {
  const comments = await db.comment.findMany({
    where: {
      postId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      User: true,
    },
  });

  return (
    <>
      <Drawer>
        <CommentActionComponent />
        <DrawerContent className="max-w-[500px] mx-auto">
          <DrawerHeader>
            <DrawerTitle className="text-center">Komentar</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="overflow-y-scroll max-h-96 mt-2 border-t border-slate-300">
            <div className="mb-11">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-2 mb-3">
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
                      {comment?.User?.username}
                    </span>
                    <span className="text-xs text-primary">
                      {format(comment.createdAt, "MMMM d, yyyy")}
                    </span>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <FormCommentComponent postId={postId} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CommentsComponent;
