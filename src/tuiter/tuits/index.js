import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from 'react-redux';

const TuitsList = () => {
    const tuitsArray = useSelector((state) => state.tuits);
    return (
        <>
            <ul className="list-group">
                {
                    tuitsArray.map(
                        (item, index) =>
                            <li className="list-group-item list-group-item-action" key={index}>
                                <TuitItem tuit={item}/>
                            </li>
                    )}
            </ul>
        </>
    );
}

export default TuitsList;