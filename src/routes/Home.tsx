import Goal from "../components/Goal";

const Home = ({ goals }: any) => {
  return (
    <>
      {
        goals.length > 0 ? (
          goals.map((goal: any) => (
            <Goal
              key={goal.id}
              goals={goal}
            />
          ))
        ) : (<p className="mx-auto text-zinc-500 text-center font-serif mt-9">Nothing to show here!</p>)
      }
    </>
  )
}
export default Home;
