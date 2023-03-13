
const Button = ({ onClick, className, buttonText, buttonIcon }: any) => {

  return (
    <button onClick={() => onClick()} className={className}>{buttonIcon}{buttonText}</button>
  )
}

export default Button
