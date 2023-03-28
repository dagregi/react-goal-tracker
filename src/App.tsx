import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { getAllGoals } from "./api/goalApi";


import AddGoal from "./components/AddGoal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./routes/About";
import Home from "./routes/Home";
import { Goal } from "./models/Models";
import { useQuery } from "react-query";

const App = () => {
  const { data, status } = useQuery<Goal[], Error>("goals", getAllGoals)

  const [hidden, setHidden] = useState(false);

  const hideInput = () => {
    setHidden(!hidden);
  }

  return (
    <section className="container shadow-lg mt-2 rounded-lg mx-auto py-2 px-4 bg-gray-100 border border-slate-600">
      <Header hide={hidden} onToggle={() => hideInput()} />
      {
        hidden && <AddGoal />
      }
      <Routes>
        <Route path="/" element={<Home goals={data} status={status} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </section>


  )
}
export default App;










