import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import AddGoal from "./components/AddGoal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./routes/About";
import Home from "./routes/Home";
import { getAllGoals } from "./features/goalSlice";

const goals = useSelector(getAllGoals)
const dispatch = useDispatch()


const App = () => {
  const [hidden, setHidden] = useState(false);

  const hideInput = () => {
    setHidden(!hidden);
  }

  return (
    <section className="container shadow-lg mt-2 rounded-lg mx-auto py-2 px-4 bg-gray-100 border border-slate-600">
      <Header hide={hidden} onToggle={() => hideInput()} />
      {
        hidden && <AddGoal dispatch={dispatch} />
      }
      <Routes>
        <Route path="/" element={<Home goals={goals} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App;
