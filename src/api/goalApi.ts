import axios from "axios";
import { Goal } from "../models/Models";

const goalApi = axios.create({
  baseURL: "http://localhost:3000"
})

export const getAllGoals = () => goalApi.get<Goal[]>("/goals").then((response) => response.data)

export const getGoal = () => (id: string) => goalApi.get<Goal>(`/goals/${id}`).then((response) => response.data)

export const removeGoal = (id: string) => goalApi.delete(`/goals/${id}`)

export const addGoal = (goal: Goal) => goalApi.post("/goals", goal)

export const updateGoal = (id: string, hour: number) => goalApi.patch<Goal>(`/goals/${id}`, { hours: hour }).then((response) => response.data)

export default goalApi;
