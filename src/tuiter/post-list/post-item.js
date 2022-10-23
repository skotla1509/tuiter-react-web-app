import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImagePost from "./image-post";
import RePost from "./re-post";

const PostItem = ({
                      post = {
                          userName: "New York Post",
                          handle: "nypost",
                          time: "23h",
                          title: "Grimes seen reading Karl Marx following split with world\"s richest man Elon Musk",
                          link: "https://trib.al/nx2Gfaq",
                          profileImg: "../../images/nypost.jpg",
                          isVerified: true,
                          imagePost: {
                              image: "../../images/grimes.jfif",
                          },
                          likes: "4K",
                          retuits: "2.4K",
                          comments: "965"
                      }
                  }) => {
    return(
        <div className="border-0 border-bottom p-3">
          <div className="row">
            <div className="col-1">
              <img src={post.profileImg}
                   className="rounded-circle"
                   height="45px"
                   width="45px" alt="Profile Picture"/>
            </div>
            <div className="col-11">
              <div className="row d-flex flex-column">
                  <div className="col">
                        <div className="row">
                            <div className="col-11">
                                <span className="">
                                    <strong>{post.userName}</strong>
                                </span>
                                {post.isVerified && <i className="bi bi-patch-check-fill ps-1 text-primary"></i>}
                                <span className="text-secondary"> @{post.handle} · {post.time}</span>
                            </div>
                            <div className="col-1">
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis"/>
                            </div>
                        </div>
                  </div>
                  <div className="col">
                        <span className="">{post.title}</span>
                        {post.link && <Link to={post.link} className="ps-1">{post.link}</Link>}
                  </div>
                  {post.imagePost && <ImagePost post={post.imagePost}/>}
                  {post.rePost && <RePost post={post.rePost}/>}
                  <div className="col pt-3">
                        <div className="row">
                            <div className="col text-secondary">
                                <FontAwesomeIcon icon="fa-solid fa-comment" />
                                <span className="p-2">{post.comments}</span>
                            </div>
                            <div className="col text-secondary">
                                <FontAwesomeIcon icon="fa-solid fa-retweet"/>
                                <span className="p-2">{post.retuits}</span>
                            </div>
                            <div className="col text-secondary">
                                <FontAwesomeIcon icon="fa-solid fa-heart" />
                                <span className="p-2">{post.likes}</span>
                            </div>
                            <div className="col text-secondary">
                                <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket"/>
                            </div>
                        </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
   );
}
export default PostItem;