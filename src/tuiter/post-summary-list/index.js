import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from 'react-redux';

const PostSummaryList = () => {
    const postsArray = useSelector((state) => state.tuits);
    return(
        <ul className="list-group">
            {postsArray.map((item, index) =>
                <li className="list-group-item list-group-item-action" key={index}>
                    <PostSummaryItem post={item}/>
                </li>
            )}
        </ul>
    );
}

export default PostSummaryList ;