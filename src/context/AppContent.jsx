import {createContext, useState, useEffect} from 'react';
import { tasks as data } from '../data/task'

export const context = createContext()

export function AppContentPorvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length + 1,
            description: task.desc
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <context.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </context.Provider>
    );
}