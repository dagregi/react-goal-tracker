import { FaPlus, FaTimes } from 'react-icons/fa';
import { HeaderProps } from '../models/Models';
import Button from "./Button";

const Header = ({ onToggle, hide }: HeaderProps) => {
  return (
    <header className="container flex justify-between mx-auto">
      <h3 className="font-bold text-indigo-500 text-center text-2xl">Goal Tracker</h3>
      <Button
        onClick={onToggle}
        buttonText={hide ? "Close" : "Add"}
        buttonIcon={hide ?
          <FaTimes size={'1.3rem'} /> :
          <FaPlus size={'1.3rem'} />}
        className={`rounded shadow-lg px-2 py-1 text-center flex flex-row text-white ${hide ? (
          'bg-rose-600 hover:bg-rose-500') : (
          'bg-emerald-500 hover:bg-emerald-400'
        )}`}
      />
    </header>
  )
}

export default Header
