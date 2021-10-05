import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'signin',
    initialState: {
        profile: []


    },
    reducers: {
        //method
        signin: (state, action) => {
            state.profile = (action.payload)
        },
    }
})

// Action creators are generated for each case reducer function
export const { signin } = userReducer.actions

export default userReducer.reducer