import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './../dataSlice/dataSlice'
import { createWrapper } from 'next-redux-wrapper'
export const makeStore = () => {
    return configureStore({

        reducer: {
            data: dataReducer
        },
    })
}
export const wrapper = createWrapper(makeStore, { debug: true })