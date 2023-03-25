import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import goalReducer from '../features/goalSlice'

const store = configureStore({
  reducer: {
    goals: goalReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store
