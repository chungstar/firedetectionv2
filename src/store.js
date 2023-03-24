import { configureStore } from '@reduxjs/toolkit'
import { listTableItemsReducer } from './reducers/tableReducer'
import modalReducer from './reducers/modalSlice'

export default configureStore({
  reducer: {
    tableItemsList: listTableItemsReducer,
    modal: modalReducer,
  },
})