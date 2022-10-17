const imagePortion = (post) => {
    if (post.imageTitle) {
        return(`
            <div class="col pt-3">
                <div class="border border-secondary rounded">
                    <div class="row d-flex flex-column">
                        <div class="col">
                            <img src=${post.image}
                                 width="100%" height="300px"
                                 class="rounded-top border-bottom border-secondary"/>
                        </div>
                        <div class="col px-4 py-2">
                            <div class="text-white">
                                ${post.imageTitle}
                            </div>
                            <div class="text-secondary">
                                ${post.imageDesc}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }
    return(`
        <div class="col pt-3">
            <div class="">
                <img src=${post.image}
                     width="100%" height="300px"
                     class="rounded"/>
            </div>
        </div>
    `);
};
const isVerified = (post) => {
    if (post.isVerified) {
        return(`
          <span class="fa-stack wd-more wd-set-height-width-16">
            <i class="fa-solid fa-certificate fa-stack-2x wd-set-height-width-16 text-white"></i>
            <i class="fa-solid fa-check fa-stack-1x fa-inverse wd-set-height-width-16 text-secondary"></i>
          </span>
    `);
    }
    else {
        return "";
    }
};
const PostItem = (post) => {
    return(`
        <div class="border-secondary border-0 border-bottom p-3">
          <div class="row">
            <div class="col-1">
              <img src=${post.profileImg}
                   class="rounded-circle"
                   height="45px"
                   width="45px"/>
            </div>
            <div class="col-11">
              <div class="row d-flex flex-column">
                <div class="col">
                    <div class="row">
                        <div class="col-11">
                            <span class="text-white">
                                <strong>${post.userName}</strong>
                            </span>
                            ${isVerified(post)}
                            <span class="text-secondary"> @${post.handle} · ${post.time}</span>
                        </div>
                        <div class="col-1">
                            <i class="fa-solid fa-ellipsis text-secondary"></i>
                        </div>
                    </div>
                </div>
                <div class="col">
                     <span class="text-white">${post.title}</span>
                     <span class="text-primary">${post.link}</span>
                </div>
                ${imagePortion(post)}
                <div class="col pt-3">
                    <div class="row">
                        <div class="col text-secondary">
                            <i class="fa-regular fa-comment"></i>
                            <span class="p-2">${post.comments}</span>
                        </div>
                        <div class="col text-secondary">
                            <i class="fa-solid fa-retweet"></i>
                            <span class="p-2">${post.retuits}</span>
                        </div>
                        <div class="col text-secondary">
                            <i class="fa-regular fa-heart"></i>
                            <span class="p-2">${post.likes}</span>
                        </div>
                        <div class="col text-secondary">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   `);
}
export default PostItem;