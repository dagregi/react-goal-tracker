import { ReactElement } from "react"
import { AppDispatch } from "../app/store"

export type Goal = {
  "id": string,
  "goalText": string,
  "hours": number,
  "initialHour": number,
  "priority": string,
}

export type AllGoals = {
  goals: Goal[]
}

export type GoalState = {
  goals: Goal[]
  status: "" | "fullfied" | "pending" | "rejected"
  error: string | undefined | null
}

export type AddGoalProps = {
  dispatch: AppDispatch
}

export type GoalProps = {
  goal: Goal
  dispatch: AppDispatch
}

export type GoalsProp = {
  goals: Goal[]
  dispatch: AppDispatch
}

export type ButtonProps = {
  onClick(): void
  buttonText: string
  className: string
  buttonIcon: ReactElement
}

export type HeaderProps = {
  hide: boolean
  onToggle(): void
}

export type ProgressBarProps = {
  progress: number
}
