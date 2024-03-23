import { Todo } from "../types/todo"

interface TodoItemProps {
    todoExtract: Todo;
}

export default function TodoItem({todoExtract}: TodoItemProps){
    return(
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-200">
                <input 
                type="checkbox"
                className="scale-125"
                />
                <span className={todoExtract.completed ? "line-through text-gray-400" : ""}>
                    {todoExtract.title}
                </span>
            </label>
        </div>
    )
}