import Goal from "./Goal"

const Goals = ({ goals, onClickDelete, onClickEdit }: any) => {
  return (
    <div>
      <Goal goal={goals} onDelete={onClickDelete} onEdit={onClickEdit} />
    </div>
  )
}

export default Goals
