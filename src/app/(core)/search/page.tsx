import PostComponent from "@/components/posts";
import { SearchComponent } from "@/components/search";

const SearchPage = () => {
  return (
    <>
      <SearchComponent />
      <div className="px-6">
        <PostComponent />
      </div>
    </>
  );
};

export default SearchPage;
