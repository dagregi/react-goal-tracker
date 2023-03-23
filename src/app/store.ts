import { configureStore } from '@reduxjs/toolkit'
import goalReducer from '../features/goalSlice'

const store = configureStore({
  reducer: {
    "goals": goalReducer,
  }
})

export default store
