import TodoItem from "./TodoItem"

// * Отвечает за список задач

const TodoList = (props) => {
  const {
    tasks = [], // ? Если значение пропса окажется undefined вставим пустой массив
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props

  const hasTasks = tasks.length > 0

  if (!hasTasks) {
    return <div className="todo__empty-message">No tasks yet</div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => ( // ? Можно сразу сделать деструктуризацию {id, title, isDone} вместо task
        <TodoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          // ? Или ...task - развернуть весь task с помощью rest параметра
          // ? Вместо того чтобы выбирать всё по отдельности
        />
      ))}
    </ul>
  )
}

export default TodoList
