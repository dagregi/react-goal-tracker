import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from "./app/hooks";
import AddGoal from "./components/AddGoal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { fetchGoals, getAllGoals } from "./features/goalSlice";
import About from "./routes/About";
import Home from "./routes/Home";

const App = () => {
  const goals = useAppSelector(getAllGoals)
  const dispatch = useAppDispatch()

  const [hidden, setHidden] = useState(false);

  const hideInput = () => {
    setHidden(!hidden);
  }

  useEffect(() => {
    dispatch(fetchGoals())
  }, [])

  return (
    <section className="container shadow-lg mt-2 rounded-lg mx-auto py-2 px-4 bg-gray-100 border border-slate-600">
      <Header hide={hidden} onToggle={() => hideInput()} />
      {
        hidden && <AddGoal dispatch={dispatch} />
      }
      <Routes>
        <Route path="/" element={<Home goals={goals} dispatch={dispatch} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App;
