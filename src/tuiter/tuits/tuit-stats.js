import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TuitStats = ({tuit}) => {
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
                    <FontAwesomeIcon icon="fa-solid fa-heart" />
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