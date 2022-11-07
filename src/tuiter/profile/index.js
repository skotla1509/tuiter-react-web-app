import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";


const ProfileComponent = () => {
    const userProfile = useSelector((state) => state.profile);
    const userName = userProfile.firstName + " " + userProfile.lastName;
    const navigate = useNavigate();

    const editProfileHandler = () => {
        navigate("/tuiter/edit-profile");
    }

    return(
        <>
            <h1>Profile</h1>
            <div>
                <div className="row">
                    <div className="col-1 align-self-center">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </div>
                    <div className="col-11">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="m-0">{userName}</h4>
                            </div>
                            <div className="col-12">
                                <span>{userProfile.tuits} Tweets</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-12">
                        <img src={userProfile.bannerPicture}
                             width="100%"
                             alt=""/>
                    </div>
                    <div className="col-6 position-relative">
                        <img src={userProfile.profilePicture}
                             height="100px"
                             width="100px"
                             className="rounded-circle position-absolute"
                             style={{
                                 top: "-50px",
                                 left:"25px"
                             }}
                             alt=""/>
                    </div>
                    <div className="col-6 pt-2">
                        <button className="btn btn-light border border-secondary float-end rounded-pill"
                                onClick={editProfileHandler}>
                            Edit profile
                        </button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <h4 className="m-0">{userName}</h4>
                        <span className="text-secondary">{userProfile.handle}</span>
                    </div>
                    <div className="col-12 text-secondary">
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <span>{userProfile.bio}</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <span className="text-secondary">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            <span className="ps-2 pe-4">{userProfile.location}</span>
                        </span>
                        <span className="text-secondary">
                            <FontAwesomeIcon icon="fa-solid fa-cake-candles" />
                            <span className="ps-2 pe-4">{getFormattedDOB(userProfile.dateOfBirth)}</span>
                        </span>
                        <span className="text-secondary">
                            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                            <span className="ps-2 pe-4">{userProfile.dateJoined}</span>
                        </span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <span className="">
                            <span><strong>{userProfile.followingCount}</strong></span>
                            <span className="ps-2 pe-4 text-secondary">Following</span>
                        </span>
                        <span className="">
                            <span><strong>{userProfile.followersCount}</strong></span>
                            <span className="ps-2 pe-4 text-secondary">Followers</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

const getFormattedDOB = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options)
}

export default ProfileComponent;