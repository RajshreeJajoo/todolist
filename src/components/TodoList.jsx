
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Item({ item, setTodos, todos }) {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);
  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );
  
    // Update localStorage after marking todo as completed
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
  };
  const handleEdit = () => {
    setEditing(true);
  };
  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);
  const handleInpuSubmit = (event) => {
    event.preventDefault();
  
    // Update localStorage after editing todo
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  };
  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
    // Update localStorage after deleting todo
    const updatedTodos = JSON.stringify(
      todos.filter((todo) => todo.id !== item.id)
    );
    localStorage.setItem("todos", updatedTodos);
  };
  const handleInputBlur = () => {
    // Update localStorage after editing todo
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
  
    setEditing(false);
  };
  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          {/* <button className="todo_items_left" onClick={completeTodo}>
         {item.title}
          </button> */}
         
         
         <button className="todo_items_left" onClick={completeTodo}>
  
  <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
    {item?.title}
  </p>
</button>

          <div className="todo_items_right">
            <button onClick={handleEdit}> <span className="visually-hidden">Edit</span>
            <EditIcon/>
            </button>
            <button onClick={handleDelete}>
            <span className="visually-hidden">Delete</span>
            <DeleteOutlineIcon/>
            </button>
          </div>
        </>
      )}
    </li>
  );
}


  // function Item({ item }) {
  //   return (
  //     <li id={item?.id} className="todo_item">
  //       <button className="todo_items_left">
  //         <svg>
  //           <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
  //         </svg>
  //         <p>{item?.title}</p>
  //       </button>
  //       <div className="todo_items_right">
  //         <button>
  //           <span className="visually-hidden">Edit</span>
  //           <svg>
  //             <path d="" />
  //           </svg>
  //         </button>
  //         <button>
  //           <span className="visually-hidden">Delete</span>
  //           <svg>
  //             <path d="" />
  //           </svg>
  //         </button>
  //       </div>
  //     </li>
  //   );
  // }
  
  
 
 
 

  
  function TodoList({ todos, setTodos }) {
    return (
      <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos?.map((item, index) => (
          // pass the todos to <Item />
            <Item key={index} item={item} todos={todos} setTodos={setTodos} />
          ))
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    );
  }
  
  export default TodoList;
