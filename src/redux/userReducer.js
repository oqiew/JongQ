import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'setUser',
    initialState: {
        user: []


    },
    reducers: {
        //method
        setUser: (state, action) => {
            state.user = (action.payload);
            signIn = true;
        },
    }
})

// Action creators are generated for each case reducer function
export const { setUser } = userReducer.actions

export default userReducer.reducer