import { useState } from "react";
import { FaPen, FaSave, FaTimes } from 'react-icons/fa';
import { deleteGoal, updateGoal } from "../features/goalSlice";
import ProgressBar from "./ProgressBar";

const Goal = ({ goal, dispatch }: any) => {
  const initialHour = goal.initialHour;
  const priority = goal.priority;

  const [toggle, setToggle] = useState(true);
  const [hours, setHours] = useState(goal.hours);

  const hideEdit = () => {
    setToggle(!toggle);
  }

  return (
    <div
      className={`container mt-3 flex flex-col gap-2 mx-auto p-2 bg-gray-50 border-l-4 rounded-md shadow 
        ${priority === "high" ? (
          'border-l-rose-600') : priority === "medium" ? (
            'border-l-orange-400') : priority === "low" ? (
              'border-l-zinc-400') : ''}`}
    >
      <div className="flex flex-row justify-between ">
        <h3 className="font-semibold text-zinc-800">{goal.goalText}</h3>
        <FaTimes
          className="text-rose-600 cursor-pointer"
          onClick={dispatch(deleteGoal())}
        />
      </div>
      <div className="flex flex-row justify-between ">
        {
          toggle ?
            <p className="font-serif">{goal.hours}</p> :
            <div className="container">
              <input
                value={hours}
                type="number"
                className="input"
                onChange={(e) => setHours(Number(e.target.value))}
              />
              <FaSave
                className="relative left-52 bottom-7 text-indigo-800"
                onClick={dispatch(updateGoal()) && hideEdit()}
              />
            </div>
        }
        <FaPen
          size={'0.85rem'}
          className="text-indigo-800 cursor-pointer"
          onClick={() => hideEdit()}
        />
      </div>
      <ProgressBar progress={(hours / initialHour) * 100} />
    </div>
  )
}

export default Goal
