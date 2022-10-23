import React from "react";
import who from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
           <li className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col">
                      <span className="font-weight-bold wd-text-bold">Who to follow</span>
                    </div>
              </div>
           </li>
           {who.map((item, index) => <WhoToFollowListItem who={item} key={index}/>)}
        </ul>
    );
};

export default WhoToFollowList;