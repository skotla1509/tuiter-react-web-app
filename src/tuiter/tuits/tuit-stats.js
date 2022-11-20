import React from "react";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const updateLikes = () => {
        const updatedTuit = {
            ...tuit,
            likes: tuit.likes + 1,
            liked: true
        };
        dispatch(updateTuitThunk(updatedTuit));
    }
    const updateDislikes = () => {
        const updatedTuit = {
            ...tuit,
            dislikes: tuit.dislikes + 1,
            disliked: true
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
                <div onClick={updateLikes}
                     className={`col ${tuit.liked ? "text-danger" : "text-secondary"}`}>
                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                    <span className="p-2">{tuit.likes}</span>
                </div>
                <div onClick={updateDislikes}
                     className={`col ${tuit.disliked ? "text-primary" : "text-secondary"}`}>
                    <FontAwesomeIcon icon="fa-solid fa-thumbs-down" />
                    <span className="p-2">{tuit.dislikes}</span>
                </div>
                <div className="col text-secondary">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket"/>
                </div>
            </div>
        </>
    )
};

export default TuitStats;