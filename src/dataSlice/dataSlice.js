import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    scrollValue: 0,
    user: {},
    homeCategory: [],
    blogDetails: {},
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        addHomeCategory: (state, action) => {
            state.homeCategory = action.payload
        },
        addScrollValue: (state, action) => {
            state.scrollValue = action.payload
        },
        addBlogDetails: (state, action) => {
            state.blogDetails = action.payload;
        },
        addComments: (state, action) => {
            state.blogDetails.comments = [...state.blogDetails.comments, action.payload];
        },
        increaseLove: (state, action) => {
            state.blogDetails.love = state.blogDetails?.love + 1;
        },
        decreaseLove: (state, action) => {
            state.blogDetails.love = state.blogDetails?.love + 1;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE...');
            state.user = action.payload.data.user
            state.homeCategory = action.payload.data.homeCategory;
            state.addScrollValue = action.payload.data.addScrollValue;
            state.blogDetails = action.payload.data.blogDetails;

        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, addHomeCategory, addComments, addScrollValue, addBlogDetails, increaseLove, decreaseLove } = dataSlice.actions
export const allData = (state) => state.data;
export default dataSlice.reducer