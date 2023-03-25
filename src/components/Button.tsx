import { ButtonProps } from "../models/Models"

const Button = ({ onClick, className, buttonText, buttonIcon }: ButtonProps) => {

  return (
    <button onClick={() => onClick()} className={className}>{buttonIcon}{buttonText}</button>
  )
}

export default Button
