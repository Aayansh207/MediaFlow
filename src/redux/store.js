import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'
import themeReducer from './features/themeSlice'
import collectionReducer from './features/collectionSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    collection: collectionReducer,
  }
})