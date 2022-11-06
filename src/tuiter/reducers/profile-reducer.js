import {createSlice} from '@reduxjs/toolkit';

const userProfile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    userName: 'Jose Annunziato',
    handle: '@jannunzi',
    profilePicture: '../../../images/owner.jpg',
    bannerPicture: '../../../images/loki_banner.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '1968-07-07',
    dateJoined: 'April 2009',
    followingCount: 340,
    followersCount: 223,
    tuits: 123
}



const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: userProfile,
        reducers: {
            saveChanges(state, action) {
                state = Object.assign(state, action.payload);
            }
        }
    }
);

export const {saveChanges} = profileSlice.actions;
export default profileSlice.reducer;