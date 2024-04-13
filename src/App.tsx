import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState(dummyData);

  
  function setTodoCompleted(id:number, completed:boolean){
    setTodos((prevTodos) => 
    prevTodos.map(prevTodo => ( prevTodo.id === id ? {...prevTodo, completed} : prevTodo ))
    );
  }

  function addTodo(title:string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed:false
      },
      ...prevTodos
    ]);
  }
  function deleteTodo(id:number){
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }
  return (
    <main className="py-8 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center text-slate-300">Your todos</h1>
      <div className="max-w-lg mx-auto bg-slate-900 rounded p-5 space-y-6">
       <AddTodoForm onSubmit={addTodo}/>
       <TodoList
       todos={todos}
       onCompletedChange={setTodoCompleted}
       onDelete={deleteTodo}/>
       
      </div>
    </main>
  )
}

export default App
