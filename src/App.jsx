import './App.css'
import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
import { tasksList } from './data'



function App() {
  const [tasks, setTasks] = useState(tasksList);

  const addNewTask = () => {
    const newTask = {
        id: tasks.length + 1,
        status: 'NO_STATUS',
        name: 'Новая задача',
        date: '01.01.24',
        category: 'WEB_DESIGN'
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <Home tasks={tasks} addNewTask={addNewTask}/>
  )
}

export default App
