import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {posts.map((item, index) => <PostSummaryItem post={item} key={index}/>)}
        </ul>
    );
}

export default PostSummaryList ;