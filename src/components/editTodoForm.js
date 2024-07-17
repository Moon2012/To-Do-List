import React,{useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  
  const [value , setValue] = useState(task.task);

  const handleSubmit = a =>{
      a.preventDefault();
      editTodo(value, task.id);
  
      setValue(""); //after submitting, don't want anything there. After we submit, it clears the form.
  }

  return (

  <form className='todoForm' class = 'bg-gray-400' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value = {value} placeholder='What is the task for today?'
       onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Update Task</button>
  </form>

    
  )
}
