import React, {useState} from "react";

function TodoForm({addTodo}) {
  const [todo, setTodo] = useState([
    {
     id: "",
     task: "",
     completed: false
    },
  ]);

  function handleTask(e) {
    setTodo({...todo, task: e.target.value})
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    if(todo.task) {
        addTodo({...todo})
        setTodo({...todo, task: ""})
    }

  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
       <h1>Todo List </h1>
      <input name="task" type="text" value={todo.task} onChange={handleTask}/>
      <button type="submit">Save</button>
    </form>
  );
}
export default TodoForm;
