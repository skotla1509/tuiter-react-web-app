import React from "react";
import navItems from "./nav.json";
import NavigationItem from "./navigation-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href="/public" className="list-group-item list-group-item-action" id="main">
                <FontAwesomeIcon icon="fa-solid fa-t" />
            </a>
            {navItems.map((item, index) => <NavigationItem navItem={item} active={active} id={index}/>)}
            <a href="#"
               id="more"
               className={`list-group-item list-group-item-action ${active === "more" ? " active": ""}`}>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis-h"/>
                <span className="d-none d-xl-inline m-2">More</span>
            </a>
        </div>
    );
};


export default NavigationSidebar;