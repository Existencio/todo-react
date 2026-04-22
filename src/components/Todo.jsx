import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

// * Главный компонент
// * Собирает страницу из других компонентов

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'buy chips', isDone: true },
    { id: 'task-2', title: 'feed the hamster', isDone: false },
  ]

  const deleteAllTasks = () => {
    // код-заглушка
    console.log('Deleting all tasks')
  }

  const deleteTask = (taskId) => {
    // код-заглушка
    console.log(`Task ${taskId} is currently being deleted`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    // код-заглушка
    console.log(`${taskId} is ${isDone ? 'complete' : 'incomplete'}`)
  }

  const filterTasks = (query) => {
    // код-заглушка
    console.log(`Searching: ${query}`)
  }

  const addTask = () => {
    // код-заглушка
    console.log('Task added')
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo
