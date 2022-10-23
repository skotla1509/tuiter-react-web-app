import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RePost = ({post}) => {
    return(
        <div className="col pt-3">
            <div className="border rounded">
                <div className="row d-flex flex-column">
                    <div className="col px-4 py-2">
                        <div className="row">
                            <div className="col">
                                <img src={post.profileImg}
                                     className="rounded-circle"
                                     height="20px"
                                     width="20px" alt="Profile Picture"/>
                                <span className="ps-1">
                                    <strong>{post.userName}</strong>
                                </span>
                                {post.isVerified && <FontAwesomeIcon icon="fa-solid fa-circle-check" className="ps-1"/>}
                                <span className="text-secondary"> @{post.handle} · {post.time}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="">{post.title}</span>
                                {post.link && <span className="text-primary">{post.link}</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RePost;