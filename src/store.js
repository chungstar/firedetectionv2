import { configureStore, createSlice } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { listTableItemsReducer } from './reducers/tableReducer'

const middleware = [thunk];

export default configureStore({
  reducer: {
    tableItemsList:listTableItemsReducer
  },
  middleware: middleware,
})