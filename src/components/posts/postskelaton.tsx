import React from "react";

const PostSkelaton = () => {
  return (
    <div className="mt-6 border-b border-slate-300 pb-3">
      <div className="flex gap-2 mb-3">
        <div className="w-10 h-10 select-none border bg-slate-200 rounded-full"></div>
        <div className="flex flex-col justify-center">
          <span className="text-base font-medium">Loading...</span>
          <span className="text-xs text-primary">Loading...</span>
        </div>
      </div>
      <p></p>
      <div className="flex gap-2 mt-3">
        Loading...
        {/* <LikesComponents postId={post.id} />
                <CommentsComponent postId={post.id} /> */}
      </div>
      <span className="text-xs">
        Loading...
        {/* {post?.comments.length} orang berkomentar */}
      </span>
    </div>
  );
};

export default PostSkelaton;
