import React from "react";
import {useSelector} from 'react-redux';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col">
                        <span className="font-weight-bold wd-text-bold">Who to follow</span>
                    </div>
                </div>
            </li>
            {
                whoArray.map(
                    (item, index) =>
                        <li className="list-group-item list-group-item-action" key={index}>
                            <WhoToFollowListItem who={item}/>
                        </li>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;