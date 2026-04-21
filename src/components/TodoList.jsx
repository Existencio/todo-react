import TodoItem from "./TodoItem"

// Отвечает за список задач

const TodoList = (props) => {
  const {
    tasks = [], // если значение пропса окажется undefined вставим пустой массив
  } = props

  const hasTasks = tasks.length > 0

  if (!hasTasks) {
    return <div className="todo__empty-message">No tasks yet</div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => ( // можно сразу сделать деструктуризацию {id, title, isDone} вместо task
        <TodoItem
          key={task.id}
          className="todo__item"
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          // или ...task - развернуть весь task с помощью rest параметра
          // вместо того чтобы выбирать всё по отдельности
        />
      ))}
    </ul>
  )
}

export default TodoList
