import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import booksReducer from '../features/booksSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        books: booksReducer
    }
})

export default store;