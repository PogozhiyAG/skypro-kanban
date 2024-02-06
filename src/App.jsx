import './App.css'
import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
import { tasksList } from './data'
import { ThemeProvider } from 'styled-components';


const themes = {
  light: {
    fg: {
      primary: '#000000',
      secondary: '#565EEF'
    },
    bg: {
      primary: '#ffffff',
      secondary: '#EAEEF6',
    },
    logo: '../images/logo.png'
  },
  dark: {
    fg: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF'
    },
    bg: {
      primary: '#20202C',
      secondary: '#000000',
    },
    logo: '../images/logo_dark.png'
  }
};


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
      <Home tasks={tasks} addNewTask={addNewTask} changeTheme={changeTheme}/>
    </ThemeProvider>
  )
}

export default App
