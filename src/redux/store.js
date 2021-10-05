import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
export default configureStore({
    reducer: {
        // file slice
        userReducer
    },

})