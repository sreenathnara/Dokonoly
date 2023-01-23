import { createSlice } from '@reduxjs/toolkit';
import { getUsers, getUsersById } from './userActions';

const initialState = {
    userInfo: {
        name: '',
        password: ''
    },
    loading: false,
    users: [],
    userById: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.userInfo.name = action.payload.name,
                state.userInfo.password = action.payload.password
        },

        updateName(state, action) {
            state.userInfo.name = action.payload
        },
        updatePassword(state, action) {
            state.userInfo.password = action.payload
        },

    },
    extraReducers: (rohith) => {
        rohith.addCase(getUsers.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }).addCase(getUsers.rejected, (state, action) => {
            console.log(action, "actions")
            state.loading = false;
            state.error = action.payload
        });
        rohith.addCase(getUsersById.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(getUsersById.fulfilled, (state, action) => {
            state.loading = false;
            state.userById = action.payload;
        }).addCase(getUsersById.rejected, (state, action) => {
            console.log(action, "actions")
            state.loading = false;
            state.error = action.payload
        });

    }
});

export const { createUser, updateName, updatePassword } = userSlice.actions;
export default userSlice.reducer; 