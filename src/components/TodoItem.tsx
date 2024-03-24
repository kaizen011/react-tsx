import { Todo } from "../types/todo"

interface TodoItemProps {
    todoExtract: Todo;
    onCompletedChange : (id: number, completed: boolean) => void;
    id : number;
}

export default function TodoItem({todoExtract, onCompletedChange, id}: TodoItemProps){
    return(
        <div>
            <label className="flex items-center gap-3 border-3 rounded-md p-2 border-gray-400 bg-slate-400 hover:bg-slate-200">
                <input 
                type="checkbox"
                checked={todoExtract.completed}
                onChange={(event) => onCompletedChange(todoExtract.id, event.target.checked)}
                className="scale-125"
                /> 
                <span className={todoExtract.completed ? "line-through text-gray-600" : ""}>
                    {todoExtract.title} + {id}
                </span>
            </label>
        </div>
    )
}