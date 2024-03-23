import { Todo } from "../types/todo"

interface TodoItemProps {
    todoExtract: Todo;
}

export default function TodoItem({todoExtract}: TodoItemProps){
    return(
        <div>
            <label>
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