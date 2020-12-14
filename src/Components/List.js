import { useState } from 'react';


function List() {
    const [tasks, setTasks] = useState([
        'Buy milk',
        'Learn React',
        'Be awesome',
    ]);
    const [newTaskName, setNewTaskName] = useState('');
    const addTask = () => {
        const newTasks = [newTaskName, ...tasks]

        // const newTasks = [];
        // for (const task of tasks) {
        //     newTasks.push(task);
        // }
        // newTasks.push(newTaskName);
        setTasks(newTasks);
        setNewTaskName('');
    }
    const listElements = tasks.map((task, index) => <li key={index}>{task}</li>);

    // const listElements = tasks.map((task, index) => {
    //     return <li key={index}>{task}</li>;
    // });

    // const listElements = [];
    // for (let taskIndex in tasks) {
    //     const task = tasks[taskIndex];
    //     listElements.push(<li key={taskIndex}>{task}</li>)
    // }

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