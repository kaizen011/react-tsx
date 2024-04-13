import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todoExtract: Todo;
    childOnCompleted : (id: number, completed: boolean) => void;
    id : number;
    onDelete: (id: number) => void;
}

export default function TodoItem({todoExtract, childOnCompleted, id, onDelete}: TodoItemProps){
    return(
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-3 border-3 rounded-md p-2 border-gray-400 bg-slate-400 hover:bg-slate-200 grow">
                <input 
                type="checkbox"
                checked={todoExtract.completed}
                onChange={(event) => childOnCompleted(todoExtract.id, event.target.checked)}
                className="scale-125"
                /> 
                <span className={todoExtract.completed ? "line-through text-gray-600" : ""}>
                    {todoExtract.title} + {id}
                </span>
            </label>
            <button className="p-2"
            onClick={()=> onDelete(todoExtract.id)}>
                <Trash2 size={20} className="text-gray-500" />
            </button>
        </div>
    )
}