import {createSlice} from '@reduxjs/toolkit';
import tuits from '../data/tuits.json';
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "image": "../../../images/nasa_logo.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "just now",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice(
    {
        name: 'tuits',
        initialState,
        reducers: {
            createTuit(state, action) {
                state.unshift(
                    {
                        ...action.payload,
                        ...templateTuit,
                        _id: (new Date().getTime())
                    }
                )
            },
            deleteTuit(state, action) {
                const index = state.findIndex(tuit => tuit._id === action.payload);
                state.splice(index, 1);
            }
        },
        extraReducers: {
            [findTuitsThunk.pending]: (state) => {
                    state.loading = true;
                    state.tuits = [];
            },
            [findTuitsThunk.fulfilled]: (state, { payload }) => {
                    state.loading = false;
                    state.tuits = payload;
            },
            [findTuitsThunk.rejected]: (state) => {
                    state.loading = false;
            },
            [deleteTuitThunk.fulfilled]: (state, { payload }) => {
                state.loading = false;
                state.tuits = state.tuits.filter((item) => item._id !== payload );
            },
            [createTuitThunk.fulfilled]: (state, { payload }) => {
                state.loading = false;
                state.tuits.push(payload);
            },
            [updateTuitThunk.fulfilled]: (state, { payload }) => {
                state.loading = false;
                const index = state.tuits.findIndex((item) => item._id === payload._id);
                state.tuits[index] = {
                    ...state.tuits[index],
                    ...payload
                };
            }
        }
    }
);

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;