import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import Calendar from 'react-calendar';
import {navigateBack, saveChanges} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const userProfile = useSelector((state) => state.profile);
    const [currProfile, editCurrProfile] = useState(userProfile);
    const [editBirthdate, setEditBirthdate] = useState(false);
    const dispatch = useDispatch();

    const userName = userProfile.firstName + " " + userProfile.lastName;
    const navigate = useNavigate();

    const saveProfileHandler = () => {
        dispatch(saveChanges(currProfile));
        navigate("/tuiter/profile");
    }
    const cancelEditProfile = () => {
        navigate("/tuiter/profile");
    }

    return (
        <>
            <div>
                <div className="row mt-1">
                    <div className="col-1 align-self-center">
                        <FontAwesomeIcon icon="fa-solid fa-x" onClick={cancelEditProfile}/>
                    </div>
                    <div className="col-6">
                        <h4>Edit profile</h4>
                    </div>
                    <div className="col-5">
                        <button className="btn btn-dark float-end rounded-pill"
                                onClick={saveProfileHandler}>
                            Save
                        </button>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-12">
                        <img src={userProfile.bannerPicture}
                             width="100%"
                             alt=""/>
                    </div>
                    <div className="col-12 position-relative">
                        <img src={userProfile.profilePicture}
                             height="100px"
                             width="100px"
                             className="rounded-circle position-absolute"
                             style={{
                                 top: "-50px",
                                 left: "25px"
                             }}
                             alt=""/>
                    </div>
                </div>
                <br/><br/>
                <div className="row mt-4">
                    <div className="col-12">
                        <label htmlFor="firstName">First name</label>
                        <input value={currProfile.firstName}
                               id='firstName'
                               className="form-control"
                               placeholder="Enter first name"
                               onChange={(e) => {
                                   editCurrProfile(
                                       {
                                           ...currProfile,
                                           firstName: e.target.value
                                       }
                                   )
                               }}
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <label htmlFor="lastName">Last name</label>
                        <input value={currProfile.lastName}
                               id='lastName'
                               className="form-control"
                               placeholder="Enter last name"
                               onChange={(e) => {
                                   editCurrProfile(
                                       {
                                           ...currProfile,
                                           lastName: e.target.value
                                       }
                                   )
                               }}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <label htmlFor="bio">Bio</label>
                        <textarea value={currProfile.bio}
                                  id="bio"
                                  placeholder="Your bio"
                                  className="form-control"
                                  onChange={(e) => {
                                      editCurrProfile(
                                          {
                                              ...currProfile,
                                              bio: e.target.value
                                          }
                                      )
                                  }}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <label htmlFor="location">Location</label>
                        <input value={currProfile.location}
                               id='location'
                               className="form-control"
                               placeholder="Enter name"
                               onChange={(e) => {
                                   editCurrProfile(
                                       {
                                           ...currProfile,
                                           location: e.target.value
                                       }
                                   )
                               }}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <label htmlFor="website">Website</label>
                        <input value={currProfile.website}
                               id='website'
                               className="form-control"
                               placeholder="Enter name"
                               onChange={(e) => {
                                   editCurrProfile(
                                       {
                                           ...currProfile,
                                           website: e.target.value
                                       }
                                   )
                               }}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <span>Birthdate</span>
                        {!editBirthdate &&
                         <>
                             <button type="button"
                                     onClick={(e) => {
                                         setEditBirthdate(true)
                                     }}
                                     className="btn btn-link">
                                 Edit
                             </button>
                             <div>
                                 {currProfile.dateOfBirth}
                             </div>
                         </>
                        }
                        {editBirthdate &&
                         <>
                             <button type="button"
                                     onClick={(e) => {
                                         setEditBirthdate(false)
                                     }}
                                     className="btn btn-link">
                                 Done
                             </button>
                             <br/>
                             <input type="date"
                                    value={currProfile.dateOfBirth}
                                    onChange={(e) => {
                                        editCurrProfile(
                                            {
                                                ...currProfile,
                                                dateOfBirth: e.target.value
                                            }
                                        )
                                    }}
                             />
                         </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfileComponent;