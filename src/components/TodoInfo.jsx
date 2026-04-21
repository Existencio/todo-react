// Блок с информацией о задачах

const TodoInfo = (props) => {
  const {
    total = 0,
    done = 0
  } = props

  const hasTasks = total > 0

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button className="todo__delete-all-button is-visible" type="button">
          Delete all
        </button>
      )}
    </div>
  )
}

export default TodoInfo
