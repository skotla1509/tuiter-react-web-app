import navigation from "./navigation.js";
import NavigationItem from "./NavigationItem.js";

const getListItemClass = (activeTab, currentTab) => {
    return `list-group-item list-group-item-action ${(currentTab === activeTab) ? "active" : ""}`;
};

const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a href="/public" class="list-group-item list-group-item-action">
      <i class="fa-solid fa-t"></i>
    </a>
    ${navigation.map((item) => NavigationItem(item, active)).join('')}
    <a href="#" class="list-group-item list-group-item-action ${getListItemClass(active, "more")}">
                <span class="fa-stack wd-more wd-set-height-width-16">
                    <i class="fa-solid fa-circle fa-stack-2x wd-set-height-width-16 text-white"></i>
                    <i class="fa-solid fa-ellipsis-h fa-stack-1x fa-inverse wd-set-height-width-16 text-secondary"></i>
                </span>
      <span class="d-none d-xl-inline">More</span>
    </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;