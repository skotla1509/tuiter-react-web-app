import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import postSummaryList from "../PostSummaryList/index.js";

function homeInit() {
    $('#wd-home').append(`
       <h2>Home</h2>
       <div class="row mt-2">
           <div class="col-2 col-md-auto col-lg-1 col-xl-2">
                <!--<h3>NavigationSidebar</h3>-->
                ${NavigationSidebar("home")}
           </div>
           <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                <!--<h3>Home Screen</h3>-->
                ${PostList()}
           </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <!--<h3>Post Summary List</h3>-->
                ${postSummaryList()}
           </div>
      </div>
   `);
}

$(homeInit);