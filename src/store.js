import { configureStore, createSlice, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { listTableItemsReducer } from './reducers/tableReducer'

export default configureStore({
  reducer: {
    tableItemsList:listTableItemsReducer
   },
  middleware: [thunk]
})