import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const  TuitItem = (
    {
        tuit = {
            "_id": 123,
            "userName": "SpaceX",
            "handle": "SpaceX",
            "isVerified": true,
            "image": "../../images/spacex_logo.jpg",
            "time": "23h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
            "liked": true,
            "replies": "123",
            "likes": "11.1K",
            "retuits": "1,168"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="row">
            <div className="col-1">
                <img src={tuit.image}
                     className="rounded-circle"
                     height="45px"
                     width="45px"
                     alt=""
                />
            </div>
            <div className="col-11 ps-4">
                <div className="row d-flex flex-column">
                    <div className="col">
                        <div className="row">
                            <div className="col-11">
                                <span className="">
                                    <strong>{tuit.userName}</strong>
                                </span>
                                {tuit.isVerified && <i className="bi bi-patch-check-fill ps-1 text-primary"></i>}
                                <span className="text-secondary"> @{tuit.handle} · {tuit.time}</span>
                            </div>
                            <div className="col-1 text-secondary">
                                <FontAwesomeIcon icon="fa-solid fa-x" onClick={() => deleteTuitHandler(tuit._id)}/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <span className="">{tuit.tuit}</span>
                    </div>
                    <div className="col pt-3">
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TuitItem;