import Field from "./Field"

// Отвечает за форму поиска задачи

const SearchTaskForm = () => {
  return (
    <form className="todo__form">
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
      />
    </form>
  )
}

export default SearchTaskForm
