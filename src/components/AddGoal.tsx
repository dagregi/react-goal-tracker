import { nanoid } from "nanoid";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addGoal } from "../api/goalApi";

const AddGoal = () => {
  const queryClient = useQueryClient()

  const addGoalMutation = useMutation(addGoal, {
    onSuccess: () => {
      queryClient.invalidateQueries("goals")
    }
  })

  const [goalText, setGoalText] = useState("");
  const [hours, setHours] = useState("");
  const [priority, setPriority] = useState("low");
  const [error, setError] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => { setGoalText(e.target.value) }
  const handleHourChange = (e: ChangeEvent<HTMLInputElement>) => { setHours((e.target.value)) }
  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => { setPriority(e.target.value) }

  const errorMsg = <p className="mt-1 shadow rounded bg-red-500 bg-opacity-75 text-center text-white transition font-semibold">{error}</p>

  function handleSubmit(e: any): void {
    e.preventDefault();

    if (!goalText || !hours) {
      setError("Can't have an empty input!");
    } else {
      const numberHour = Number(hours)
      addGoalMutation.mutate({
        id: nanoid(5),
        goalText,
        hours: numberHour,
        initialHour: numberHour,
        priority
      })

      setGoalText("");
      setHours("");
      setPriority("low");
    }
  }

  return (
    <article>
      {errorMsg}
      <form className="transition-all mx-auto p-2" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <label className="label">Goal name</label>
          <input
            type='text'
            value={goalText}
            onChange={handleNameChange}
            onInput={() => { setError("") }}
            placeholder="Goal details"
            className="input"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="label">Hours</label>
          <input
            type='number'
            value={hours}
            onChange={handleHourChange}
            onInput={() => { setError("") }}
            placeholder="240"
            className="input"
          />
        </div>
        <label className="label">Priority</label>
        <div className="flex flex-row mb-4">
          <select
            value={priority}
            className="input font-light mt-1"
            onChange={handlePriorityChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="mx-auto flex flex-col">
          <input
            type='submit'
            value='Save Goal'
            className="p-1.5 block rounded-lg shadow-lg bg-indigo-600 font-semibold text-white -center hover:bg-indigo-500"
          />
        </div>
      </form>
    </article>
  )
}

export default AddGoal;
