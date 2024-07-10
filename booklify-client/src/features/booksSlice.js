import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../utils/constant";
import getBearerToken from "../utils/getBearerToken";

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        loading: false,
        error: "",
        books: []
    },
    reducers: {
        booksLoading: (state, action) => {
            state.loading = action.payload;
            state.error = "";
            state.books = [];
        },
        booksError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.books = []
        },
        booksReceived: (state, action) => {
            state.loading = false;
            state.error = "";
            state.books = action.payload;
        }
    }
})

export const {booksError, booksLoading, booksReceived} = booksSlice.actions;

export const fetchBooks = (title) => {
    return async (dispatch) => {
        try {
            dispatch(booksLoading(true));
            const response = await axios.get(`${baseUrl}/books`, {
                params: {
                    title
                }, 
                headers: {
                    Authorization: getBearerToken()
                }
            })
            dispatch(booksReceived(response.data.data))
            
        } catch (error) {
            console.log(error);
            dispatch(error.response.data.message);
        }
    }
}

export default booksSlice.reducer;