import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        modalShowed(state,action){

        },
        modalClosed(state,action){

        }
    }
})

export const { modalShowed, modalClosed } = modalSlice.actions;

export default modalSlice.reducer;