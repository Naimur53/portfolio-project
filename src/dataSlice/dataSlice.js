import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    scrollValue: 0,
    user: {},
    homeCategory: [],
    cursor: {},
    blogDetails: {},
    homeBlog: [],
    collection: [],
    loading: true,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        addHomeCategory: (state, action) => {
            state.homeCategory = action.payload
        },
        addScrollValue: (state, action) => {
            state.scrollValue = action.payload
        },
        addCursor: (state, action) => {
            state.cursor = action.payload
        },
        addBlogDetails: (state, action) => {
            state.blogDetails = action.payload;
        },
        addHomeBlog: (state, action) => {
            state.homeBlog = action.payload;
        },
        addCollection: (state, action) => {
            state.collection = action.payload;
        },
        addComments: (state, action) => {
            state.blogDetails.comments = [...state.blogDetails.comments, action.payload];
        },
        addLove: (state, action) => {
            state.blogDetails.love = [...state.blogDetails.love, action.payload];
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
            console.log('HYDRATE...', action.payload);
            state.user = action.payload.data.user
            state.loading = action.payload.data.loading
            state.homeCategory = action.payload.data.homeCategory;
            state.addScrollValue = action.payload.data.addScrollValue;
            state.blogDetails = action.payload.data.blogDetails;
            state.homeBlog = action.payload.data.homeBlog;
            state.collection = action.payload.data.collection;

        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, setLoading, addHomeCategory, addLove, addComments, addScrollValue, addCursor, addBlogDetails, increaseLove, decreaseLove, addHomeBlog, addCollection } = dataSlice.actions
export const allData = (state) => state.data;
export default dataSlice.reducer