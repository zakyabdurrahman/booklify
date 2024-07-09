import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "",
        profile: ""
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        }
    }
})

export const {setProfile, setUsername} = userSlice.actions;

export default userSlice.reducer