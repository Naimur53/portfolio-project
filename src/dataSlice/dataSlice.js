import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    user: {},
    homeCategory: [],
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
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE...');
            state.user = action.payload.data.user
            state.homeCategory = action.payload.data.homeCategory;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, addHomeCategory } = dataSlice.actions
export const allData = (state) => state.data;
export default dataSlice.reducer