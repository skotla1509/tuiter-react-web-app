import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationItem = ({navItem, active, index}) => {
    return(
        <Link to={navItem.redirect}
              key={index}
              className={`list-group-item list-group-item-action ${(navItem.key === active) ? " active" : ""}`}
        >
            <FontAwesomeIcon icon={navItem.icon} />
            <span className="d-none d-xl-inline m-2">{navItem.value}</span>
        </Link>
    );
};
export default NavigationItem;