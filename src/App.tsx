import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {
  const [todos, setTodos] = useState(dummyData);


  function setTodoCompleted(id:number, completed:boolean){
    setTodos((prevTodos) => 
    prevTodos.map(todo => ( todo.id === id ? {...todo, completed} : todo ))
    );
  }

  return (
    <main className="py-8 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded p-5">
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem
            key={todo.id} 
            todoExtract={todo}
            onCompletedChange={setTodoCompleted}
            id={todo.id}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
