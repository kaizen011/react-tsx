import { useState } from "react"

interface AddTodoFormProps {
    onSubmit : (titleExtract: string) => void;
}

export default function AddTodoForm({onSubmit} : AddTodoFormProps){
    const [input, setInput] = useState("")

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            placeholder="What needs to be done?"
            className="rounded-s-md grow border border-gray-500 p-2 bg-slate-300 placeholder:text-gray-500 outline-neutral-950"
            />
            <button
            type="submit"
            className="w-16 rounded-e-md bg-slate-950 text-gray-400  hover:bg-slate-600 hover:text-gray-900"
            >
                Add</button>
        </form>
    )
}