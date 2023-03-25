import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addGoal, getGoals, removeGoal, updateHour } from '../api/api';
import { RootState } from '../app/store';
import { Goal, GoalState } from '../models/Models';

const initialState: GoalState = {
  goals: [],
  status: '',
  error: null
}

export const fetchGoals = createAsyncThunk(
  "goals",
  async () => await getGoals()
)
export const updateGoal = createAsyncThunk(
  "goals/update",
  async ({ id, hours }: Goal): Promise<Goal> => await updateHour(id, hours)
)

export const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    createGoal: (state, actions: PayloadAction<Goal>) => {
      state.goals.push(actions.payload)
      addGoal(actions.payload)
    },
    deleteGoal: (state, actions: PayloadAction<string>) => {
      state.goals = state.goals.filter((goal) => goal.id !== actions.payload)
      removeGoal(actions.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGoals.pending, (state) => {
        state.status = "pending"
      })
      .addCase(fetchGoals.fulfilled, (state, actions) => {
        state.status = "fullfied"
        state.goals = actions.payload
      })
      .addCase(fetchGoals.rejected, (state, actions) => {
        state.status = "rejected"
        state.error = actions.error.message
      })
      .addCase(updateGoal.fulfilled, (state, actions) => {
        state.status = "fullfied"
        state.goals = state.goals.map((goal) => goal?.id === actions.payload.id ? actions.payload : goal)
      })
  },
})

export const getAllGoals = (state: RootState) => state.goals.goals;
export const getStatus = (state: RootState) => state.goals.status;
export const getError = (state: RootState) => state.goals.error;

export const { createGoal, deleteGoal } = goalSlice.actions;
export default goalSlice.reducer;
