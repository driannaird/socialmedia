import { db } from "@/lib/db";
import MenyalaIcon from "./icons/menyala";
import { getCurrentUser } from "@/lib/session";
import LikeActionComponent from "./like-action";

const LikesComponents = async ({ postId }: { postId: number }) => {
  const session = await getCurrentUser();

  const like = await db.like.findFirst({
    where: {
      postId: postId,
      userId: parseInt(session?.id!),
    },
  });

  return (
    <div>
      <LikeActionComponent
        like={like ? true : false}
        postId={postId}
        likeId={like?.id ? like.id : null}
      />
    </div>
  );
};

export default LikesComponents;
