import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

// Главный компонент
// Собирает страницу из других компонентов

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'buy chips', isDone: true },
    { id: 'task-2', title: 'feed the hamster', isDone: false },
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default Todo
