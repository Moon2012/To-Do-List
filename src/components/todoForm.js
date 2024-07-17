import React, {useState} from 'react'


export const TodoForm = ({addTodo}) => {
  const [value , setValue] = useState("");

  const handleSubmit = a =>{
      a.preventDefault();
      addTodo(value);

      setValue(""); //after submitting, don't want anything there. After we submit, it clears the form.
  }
  return (
    <form className='todoForm' class = 'bg-gray-400' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value = {value} placeholder='What is the task for today?'
         onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
