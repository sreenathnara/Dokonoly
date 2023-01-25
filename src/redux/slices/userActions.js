import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
    'users',
    async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users",
                config
            )
            return response.data;

        } catch (error) {
            console.log(error, "error")
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getUsersById = createAsyncThunk(
    'users/id',
    async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1",
                config
            )
            return response.data;
        } catch (error) {
            console.log(error, "error")
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
