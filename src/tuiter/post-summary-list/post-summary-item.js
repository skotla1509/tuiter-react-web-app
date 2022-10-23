import React from "react";

const PostSummaryItem  = (
    {
        post = {
            topic: "Web Development",
            title: "ReactJS",
            time: "2h",
            desc: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            image: "../../../images/react_logo.png",
            tuits: "",
            isVerified: true
        },
        key
    }
) => {
    return(
        <li className="list-group-item list-group-item-action" key={key}>
          <div className="row">
            <div className="col-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
              <div className="text-secondary">{post.topic}</div>
              <span className="font-weight-bold">
                  <strong>
                      {post.title}
                  </strong>
              </span>
              {post.isVerified && <i className="bi bi-patch-check-fill ps-1 text-primary"></i>}
              <span className="text-secondary"> - {post.time}</span>
              <div className="font-weight-bold">{post.desc}</div>
              {post.tuits && <div className="text-secondary">{post.tuits} Tuits</div>}
            </div>
            <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2 align-self-center">
              <img src={post.image}
                   className="card-img-top rounded" alt="..."/>
            </div>
          </div>
        </li>
   );
}
export default PostSummaryItem;