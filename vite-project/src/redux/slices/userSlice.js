import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser(state, action) {
            state.userInfo.name = action.payload.name,
                state.userInfo.password = action.payload.password
        }
    }
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer; 