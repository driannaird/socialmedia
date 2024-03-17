import PostComponent from "@/components/posts";
import { SearchComponent } from "@/components/search";
import { Suspense } from "react";

const SearchPostsPage = () => {
  return (
    <>
      <SearchComponent />
      <div className="px-6">
        <Suspense fallback={<h1>Loading...</h1>}>
          <PostComponent status="all" />
        </Suspense>
      </div>
    </>
  );
};

export default SearchPostsPage;
