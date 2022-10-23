import posts from "./posts.json";
import PostItem from "./post-item";

const PostList = () => {
    return(
        <ul className="list-group border border-secondary">
            {posts.map((item) => <PostItem post={item}/>)}
        </ul>
    );
}

export default PostList;