import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhoToFollowListItem  = (
    {
        who = {
            avatarIcon: "../../../images/java_logo.png",
            userName: "Java",
            handle: "Java",
            isVerified: true
        }
    }
) => {
    return(
        <li className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-lg-3 col-xl-2">
                    <img src={who.avatarIcon}
                         className="card-img-top rounded-circle" alt="..."/>
                </div>
                <div className="col-lg-5 col-xl-7">
                    <span className="font-weight-bold wd-text-bold">{who.userName}</span>
                    {who.isVerified && <i className="bi bi-patch-check-fill ps-1 text-primary"></i>}
                    <div className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <button className="btn btn-primary rounded-pill mt-2 wd-full-width">Follow</button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;