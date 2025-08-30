import { PostCreate } from "./createPost";
import { PostFilter } from "./filterPost";
import { PostSorting } from "./sortingPost";

export const Post = () => {
  return (
    <div>
      <PostCreate></PostCreate>
      <PostFilter></PostFilter>
      <PostSorting></PostSorting>
    </div>
  );
};
