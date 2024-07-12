import React from 'react'

function TodoStatus({todos_completed, total_todos }) {
  return (
   <section>
      <div style={{textAlign:'center',marginTop:'15%'}}>
        <p>Task Done {todos_completed}/{total_todos}</p>
        <p>Keep it up</p>
      </div>
    </section>
  )
}

export default TodoStatus

