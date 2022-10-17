const isVerified = (post) => {
    if (post.isVerified) {
        return(`
          <span class="fa-stack wd-more wd-set-height-width-16">
            <i class="fa-solid fa-certificate fa-stack-2x wd-set-height-width-16 text-white"></i>
            <i class="fa-solid fa-check fa-stack-1x fa-inverse wd-set-height-width-16 text-secondary"></i>
          </span>
    `);
    }
    return '';
};
const getTuits = (post) => {
    if (post.tuits) {
        return(`<div class="text-secondary">${post.tuits} Tuits</div>`);
    }
    return '';
}

const PostSummaryItem  = (post) => {
    return(`
        <li class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
              <div class="text-secondary">${post.topic}</div>
              <span class="font-weight-bold wd-text-bold">${post.title}</span>
              ${isVerified(post)}
              <span class="text-secondary"> - ${post.time}</span>
              <div class="font-weight-bold wd-text-bold">${post.desc}</div>
              ${getTuits(post)}
            </div>
            <div class="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2 align-self-center">
              <img src=${post.image}
                   class="card-img-top rounded" alt="...">
            </div>
          </div>
        </li>
   `);
}
export default PostSummaryItem;