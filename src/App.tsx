import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom'

import AddGoal from "./components/AddGoal";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Header from "./components/Header";
import About from "./routes/About";

function App() {
  const BASE_URL = "http://localhost:3000/goals";
  const location = useLocation();

  const [goals, setGoals]: any = useState([]);
  const [hidden, setHidden] = useState(false);

  async function getData(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  }

  async function fecthFromJson() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setGoals(data);
  }

  //Function for adding goals
  async function addGoal(goal: any) {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(goal)
    });
    const data = await response.json();
    setGoals([...goals, data]);
  }

  //Function for deleting goals
  async function deleteGoal(id: number) {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    setGoals(goals.filter((goal: any) => (goal.id !== id)));
  }
  //Function for updating the hour
  async function updateHour(id: number, hour: number) {
    const oldHour = await getData(id);
    const updatedHour = { ...oldHour, hours: hour };

    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedHour),
    });
    const data = await response.json();

    setGoals(goals.map(
      (goal: any) => goal.id === id ? { ...goal, hours: data.hours } : goal
    ));
  }

  const hideInput = () => {
    setHidden(!hidden);
  }

  useEffect(() => {
    fecthFromJson();
  }, [])

  return (
    <div className="container shadow-lg mt-2 rounded-lg mx-auto py-2 px-4 bg-gray-100 border border-slate-600">
      <Header hide={hidden} onToggle={() => hideInput()} />
      {location.pathname !== '/about' &&
        <>
          {
            hidden && <AddGoal onAdd={addGoal} />
          }
          {
            goals.length > 0 ? (
              goals.map((goal: any) => (
                <Goals
                  key={goal.id}
                  goals={goal}
                  onClickDelete={deleteGoal}
                  onClickEdit={updateHour}
                />
              ))
            ) : (<p className="mx-auto text-zinc-500 text-center font-serif mt-9">Nothing to show here!</p>)
          }
        </>
      }
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
