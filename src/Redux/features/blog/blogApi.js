import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://javatrandz-backend.onrender.com';

// Thunk to fetch all blogs
export const fetchBlogs = createAsyncThunk(
    'blog/fetchBlogs',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/blog-posts`);
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



// Thunk to upload an image
export const uploadImage = createAsyncThunk(
    'blog/uploadImage',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/images/upload`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
            return await response.json(); // Assuming this returns the URL
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const createBlog = createAsyncThunk(
    'blog/createBlog',
    async ({ dataToSave }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/blog-posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSave),
            });
            if (!response.ok) {
                throw new Error('Failed to create blog');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }   
    }
)


export const updateBlog = createAsyncThunk(
    'blog/updateBlog',
    async ({ id, dataToSave }, { rejectWithValue }) => {

        const apiUrl = `${BASE_URL}/api/blog-posts/blogs/${id}`

        console.log("apiUrl", apiUrl)

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSave),
            });
            if (!response.ok) {
                throw new Error('Failed to update blog');
            }
            return await response.json();       
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

// 4) Delete blog.
// curl --location --request DELETE 'https://java-trend.onrender.com/api/blog-posts/blogs/673ded50cd1481c8e95f4bc3'


export const deleteBlog = createAsyncThunk(
    'blog/deleteBlog',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/blog-posts/blogs/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete blog');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getBlogById = createAsyncThunk(
    'blog/getBlogById',
    async (blogId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/blog-posts/blogs/${blogId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch blog by ID');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
