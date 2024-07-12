
  
  import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
  function Form({ setTodos , todos }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const value = event.target.todo.value;
      const newTodo = {
        title: value,
        id: Math.floor((Math.random() * 10) + 1),
        is_completed: false,
      };
      // Update todo state
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      // Store updated todo list in local storage
      const updatedTodoList = JSON.stringify([...todos, newTodo]);
      localStorage.setItem("todos", updatedTodoList);
      event.target.reset();
    };
    
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task"
          />
        </label>
        <button>
        <span className="visually-hidden">Submit</span>
          <svg>
            <path d="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-add-icon-png-image_956621.jpg" />
          </svg>
        </button>
      </form>
    );
  }
  export default Form;