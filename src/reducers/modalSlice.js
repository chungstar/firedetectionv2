import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showModal: false,
    selectedRowData: null,
};
  
export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        showModal: (state,action) => {
            state.showModal = true;
            state.selectedRowData = action.payload;
        },
        hideModal: (state)=>{
            state.showModal = false;
            state.selectedRowData = null;
        }
    }
})

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;