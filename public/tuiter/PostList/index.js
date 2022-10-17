import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
        <ul class="list-group border border-secondary">
            ${posts.map((item) => PostItem(item)).join("")}
        </ul>
    `);
}

export default PostList;