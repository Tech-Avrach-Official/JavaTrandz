import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: true,
}


const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        handlePopup: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

export const { handlePopup } = popupSlice.actions
export default popupSlice.reducer;