import React from "react";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const updateLikes = () => {
        console.log("LIKED")
        const updatedTuit = {
            ...tuit,
            likes: tuit.likes + 1,
            liked: true
        };
        dispatch(updateTuitThunk(updatedTuit));
    }

    return(
        <>
            <div className="row">
                <div className="col text-secondary">
                    <FontAwesomeIcon icon="fa-solid fa-comment" />
                    <span className="p-2">{tuit.replies}</span>
                </div>
                <div className="col text-secondary">
                    <FontAwesomeIcon icon="fa-solid fa-retweet"/>
                    <span className="p-2">{tuit.retuits}</span>
                </div>
                <div className={`col ${tuit.liked ? "text-danger" : "text-secondary"}`}>
                    <FontAwesomeIcon icon="fa-solid fa-heart" onClick={updateLikes} />
                    <span className="p-2">{tuit.likes}</span>
                </div>
                <div className="col text-secondary">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket"/>
                </div>
            </div>
        </>
    )
};

export default TuitStats;