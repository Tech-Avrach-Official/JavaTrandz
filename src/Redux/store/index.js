import { configureStore } from '@reduxjs/toolkit';
import popupReducer from '../features/popup/popupSlice';
import blogSlice from '../features/blog/blogSlice';


const store = configureStore({
    reducer: {
        popup: popupReducer,
        blog: blogSlice,
    },

});

export default store;