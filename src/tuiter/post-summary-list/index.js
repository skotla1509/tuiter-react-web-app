import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul class="list-group">
            {posts.map((item) => <PostSummaryItem post={item}/>)}
        </ul>
    );
}

export default PostSummaryList ;