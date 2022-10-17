import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
                       <!-- search field and cog -->
                <div class="col-11 position-relative">
                  <input class="form-control rounded-pill wd-padding-left-50" type="text" placeholder="Search Tuiter">
                  <i class="fas fa-search wd-search-icon"></i>
                </div>
                <div class="col-1 wd-v-align-center">
                  <div class="float-end">
                    <i class="fas fa-2x fa-cog text-primary"></i>
                  </div>
                </div>
           </div>
        <div class="row mt-2">
            <div class="col">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                  <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
              </ul>
            </div>
        </div>
           <!-- image with overlaid text -->
        <div class="row mt-2">
            <div class="col position-relative">
              <img src="../../images/starship.jpg"
                   class="card-img-top" alt="...">
              <h2 class="text-white wd-image-caption">SpaceX's Starship</h2>
            </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
