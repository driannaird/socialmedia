import PostComponent from "@/components/posts";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <PostComponent status="all" />
    </Suspense>
  );
}
