import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogs, createBlog, getBlogById, updateBlog, deleteBlog } from './blogApi';

const initialState = {
    allBlogs: [],
    selectedBlog: null,
    isLoading: false,
    isError: false,
    error: null,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {}, // Add synchronous reducers here if needed
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allBlogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })

            .addCase(createBlog.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isLoading = false;    
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })

            .addCase(getBlogById.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(getBlogById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedBlog = action.payload;
            })
            .addCase(getBlogById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })

            .addCase(updateBlog.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })

            .addCase(deleteBlog.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })
    }
});

export default blogSlice.reducer;
