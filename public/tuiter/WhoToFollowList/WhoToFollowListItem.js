const isVerified = (who) => {
    if (who.isVerified) {
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
const WhoToFollowListItem  = (who) => {
    return(`
        <li class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-lg-3 col-xl-2">
              <img src=${who.avatarIcon}
                   class="card-img-top rounded-circle" alt="...">
            </div>
            <div class="col-lg-5 col-xl-7">
              <span class="font-weight-bold wd-text-bold">${who.userName}</span>
               ${isVerified(who)}
              <div class="text-secondary">@${who.handle}</div>
            </div>
            <div class="col-lg-4 col-xl-3">
              <button class="btn btn-primary rounded-pill mt-2 wd-full-width">Follow</button>
            </div>
          </div>
        </li>
   `);
}
export default WhoToFollowListItem;