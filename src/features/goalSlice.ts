import { createSlice } from '@reduxjs/toolkit'

interface Goal {
  title: string,
  hour: number,
  initialHour: number,
  priority: string,
}

const initialState = {
  goals: [],
  status: '',
  error: null,
}

export const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    createGoal: () => { },
    deleteGoal: () => { },
    updateGoal: () => { },
    showGoals: () => { },
  },
})

export const getAllGoals = (state: any) => state.goals.goals;
export const getStatus = (state: any) => state.goals.goals;
export const getError = (state: any) => state.goals.error;

export const { createGoal, updateGoal, showGoals, deleteGoal } = goalSlice.actions;
export default goalSlice.reducer;
