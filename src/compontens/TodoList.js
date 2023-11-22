import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem';
import AddTodo from './AddTodo';

function TodoList() {
  const [showdone, setshowdone] = useState(false)
    const todos = useSelector((state) => state.todo.todolist);
  return (
    <div className='todo-list'>
      <AddTodo/>
      <button onClick={()=>setshowdone(!showdone)}>{showdone ? "show undone" : "show done"}</button>
      {todos.filter((todo) => todo.isDone === showdone)
      .map((todo) =>(
      <Todoitem todo={todo}/>
      ))}

    </div>
  )
}

export default TodoList