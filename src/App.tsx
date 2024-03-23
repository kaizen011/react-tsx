import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {
  return (
    <main className="py-8 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded p-5">
        <div className="space-y-2">
          {dummyData.map(todo => (
            <TodoItem todoExtract={todo}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
