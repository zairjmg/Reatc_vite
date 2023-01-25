import TaskCard from './TaskCard'
import { useContext } from 'react'
import { context } from '../context/AppContent'

function TaskList() {

    const { tasks } = useContext(context)

    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl font-extrabold'>No hay tareas aún</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;