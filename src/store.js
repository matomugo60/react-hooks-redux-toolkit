import { configureStore } from '@reduxjs/toolkit'

import catsReducer from './features/cats/catsSlice'

// combining reducers, setting up redux-thunk, adding redux devtools
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
})

export default store
