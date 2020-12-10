import { useState } from 'react';


function List() {
    const [tasks, setTasks] = useState([
        'Buy milk',
        'Learn React',
        'Be awesome',
    ]);
    const [newTaskName, setNewTaskName] = useState('');
    const addTask = () => {
        const newTasks = [...tasks, newTaskName]
        setTasks(newTasks);
    }
    const listElements = tasks.map((task, index) => <li key={index}>{task}</li>);

    return (
        <div>
            <ul>
                {listElements}
            </ul>
            <div>
                <input value={newTaskName} onChange={(event) => {setNewTaskName(event.target.value)}} />
                <button onClick={addTask}>Add task</button>
            </div>
        </div>       
    )
}

export default List;