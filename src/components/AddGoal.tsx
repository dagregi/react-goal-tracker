import { useState } from "react"

const AddGoal = ({ onAdd }: any) => {
  const [goalText, setGoalText] = useState("");
  const [hours, setHours] = useState(1);
  const [initialHour, setInitialHour] = useState(0);
  const [priority, setPriority] = useState("low");
  const [errorGoalText, setErrorGoalText] = useState("")
  const [errorHours, setErrorHours] = useState("")

  function handleSubmit(e: any): void {
    e.preventDefault();

    if (!goalText) {
      setErrorGoalText("Can't have an empty goal!");
    } else if (!hours) {
      setErrorHours("Enter the fuckin hours bro!!")
    } else {
      onAdd({ goalText, hours, initialHour, priority });

      setGoalText("");
      setHours(1);
      setPriority("low");
    }
  }

  return (
    <form className="transition-all mx-auto p-2" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-3">
        <label className="label">Goal name</label>
        <input
          type='text'
          value={goalText}
          onChange={(e) => { setGoalText(e.target.value) }}
          onInput={() => { setErrorGoalText("") }}
          placeholder="Goal details"
          className="input"
        />
        <p className="mt-1 shadow rounded bg-red-500 bg-opacity-75 text-center text-white transition font-semibold">{errorGoalText}</p>
      </div>
      <div className="flex flex-col mb-4">
        <label className="label">Hours</label>
        <input
          type='number'
          value={hours}
          onChange={(e) => {
            { setHours(Number(e.target.value)) } { setInitialHour(Number(e.target.value)) }
          }}
          onInput={() => { setErrorHours("") }}
          placeholder="240"
          className="input"
        />
        <p className="mt-1 shadow rounded bg-red-500 bg-opacity-75 text-center text-white transition font-semibold">{errorHours}</p>
      </div>
      <label className="label">Priority</label>
      <div className="flex flex-row mb-4">
        <select
          value={priority}
          className="input font-light mt-1"
          onChange={(e) => { setPriority(e.target.value) }}>
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
  )
}

export default AddGoal;
