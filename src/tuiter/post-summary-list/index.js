import React, {useEffect} from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector, useDispatch} from 'react-redux';
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk());
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map((item, index) =>
                <li className="list-group-item list-group-item-action" key={index}>
                    <PostSummaryItem post={item}/>
                </li>
            )}
        </ul>
    );
}

export default PostSummaryList ;