import React from "react";
const ImagePost = ({post}) => {
    return(
        <>
            {post.imageTitle &&
             <div className="col pt-3">
                 <div className="border rounded">
                     <div className="row d-flex flex-column">
                         <div className="col">
                             <img src={post.image}
                                  width="100%" height="300px"
                                  className="rounded-top border-bottom border-secondary"
                                  alt=""
                             />
                         </div>
                         <div className="col px-4 py-2">
                             <div className="">
                                 {post.imageTitle}
                             </div>
                             <div className="text-secondary">
                                 {post.imageDesc}
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
            }
            {!post.imageTitle &&
             <div className="col pt-3">
                 <div className="">
                     <img src={post.image}
                          width="100%" height="300px"
                          className="rounded border"
                          alt=""
                     />
                 </div>
             </div>
            }
        </>
    )
};

export default ImagePost;