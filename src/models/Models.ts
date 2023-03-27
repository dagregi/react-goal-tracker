import { ReactElement } from "react"

export type Goal = {
  "id": string,
  "goalText": string,
  "hours": number,
  "initialHour": number,
  "priority": string,
}

export type GoalProps = {
  goal: Goal
}

export type GoalsProp = {
  goals: Goal[]
  status: "idle" | "loading" | "error" | "success"
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
