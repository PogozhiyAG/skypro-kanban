import './App.css'
import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
import { tasksList } from './data'
import { ThemeProvider } from 'styled-components';
import { themes } from './Themes';
import { GlobalStyle } from './components/styled/GlobalStyle';


function App() {
  const [tasks, setTasks] = useState(tasksList);
  const [theme, setTheme] = useState(themes.light);

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

  const changeTheme = newTheme => setTheme(themes[newTheme]);
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home tasks={tasks} addNewTask={addNewTask} changeTheme={changeTheme}/>
    </ThemeProvider>
  )
}

export default App
