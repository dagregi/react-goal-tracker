import axios from "axios";
import { Goal } from "../models/Models";

const BASE_URL = "http://localhost:3000/goals";

export const getGoals = () => axios.get(BASE_URL).then((response) => response.data)

export const getData = (id: string) => axios.get<Goal>(`${BASE_URL}/${id}`).then((response) => response.data)

export const removeGoal = (id: string) => axios.delete(`${BASE_URL}/${id}`)

export const addGoal = (goal: Goal) => axios.post<Goal>(BASE_URL, {
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(goal),
}).then((response) => response.data)

export const updateHour = async (id: string, hour: number): Promise<Goal> => {
  const oldGoal = await getData(id);
  const updatedGoal = { ...oldGoal, hours: hour };
  const response = await axios.put(BASE_URL, {
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(updatedGoal),
  })
  return response.data as Goal
}
