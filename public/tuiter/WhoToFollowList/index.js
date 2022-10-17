import who from './who.js';
import whoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
           <li class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                      <span class="font-weight-bold wd-text-bold">Who to follow</span>
                    </div>
              </div>
           </li>
           ${who.map((item) => whoToFollowListItem(item)).join('')}
        </ul>
    `);
};

export default WhoToFollowList;