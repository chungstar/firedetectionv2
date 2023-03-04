import { configureStore } from '@reduxjs/toolkit'
import { listTableItemsReducer } from './reducers/tableReducer'

export default configureStore({
  reducer: {
    tableItemsList:listTableItemsReducer
  },
})