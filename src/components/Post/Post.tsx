import { PostCreate } from './createPost'
import { PostFilter } from './filterPost'
import { PostList } from './listPosts'
import { PostSorting } from './sortingPost'

export const Post = () => {
    return (
        <div>
            <PostCreate />
            <PostFilter />
            <PostSorting />
            <PostList />
        </div>
    )
}
