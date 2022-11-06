import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import PostSummaryList from "../post-summary-list";


const ExploreComponent = () => {
    return(
        <>
            <h1>Explore</h1>
            <div className="row">
                <div className="col-11 position-relative">
                    <input className="form-control rounded-pill wd-padding-left-50" type="text" placeholder="Search Tuiter"/>
                    <FontAwesomeIcon icon="fas fa-search" className="wd-search-icon"/>
                </div>
                <div className="col-1 wd-v-align-center">
                    <div className="float-end">
                        <FontAwesomeIcon icon="fas fa-2x fa-cog" className="text-primary" size="2x"/>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="for-you.html">For you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li className="nav-item d-none d-md-inline">
                            <a className="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col position-relative">
                    <img src="../../images/starship.jpg"
                         className="card-img-top" alt="..."/>
                    <h2 className="text-white wd-image-caption">SpaceX's Starship</h2>
                </div>
            </div>
            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
