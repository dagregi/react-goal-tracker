import { FaSpinner } from "react-icons/fa";
import { useAppSelector } from "../app/hooks";
import Goal from "../components/Goal";
import { getStatus } from "../features/goalSlice";
import { GoalsProp } from "../models/Models";

const Home = ({ goals, dispatch }: GoalsProp) => {
  const status = useAppSelector(getStatus)
  return (
    <>
      {
        status === "fullfied" ? (
          goals.length > 0 ? (
            goals.map((goal) => (
              <Goal key={goal.id} goal={goal} dispatch={dispatch} />
            ))
          ) : (<p className="mx-auto text-zinc-500 text-center font-serif mt-9">Nothing to show here!</p>)
        ) :
          status === "pending" ? (
            <FaSpinner className="animate-spin text-2xl text-indigo-500 text-center mx-auto mt-9" />
          ) : (
            <div className="mx-auto mt-9 text-center">
              <h1 className="text-black font-mono text-3xl">ಠ_ಠ</h1>
              <p className="text-zinc-800 font-light">Oops...An error occured!</p>
            </div>
          )
      }

    </>
  )
}
export default Home;
