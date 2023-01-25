import { useState, useContext } from "react";
import {context} from '../context/AppContent'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const { createTask } = useContext(context)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            desc
        });
        setTitle('')
        setDesc('')
    };

    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4" action="" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-white mb-2">Crea tu tarea</h1>
                <input
                    type="text"
                    placeholder="Escribetu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-2'
                    autoFocus
                />
                <textarea
                    placeholder="Escribe la descricion de la tarea"
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                    className='bg-slate-300 p-3 w-full mb-2'
                />
                <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;
