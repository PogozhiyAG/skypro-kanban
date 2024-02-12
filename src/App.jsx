import './App.css'
import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
import { tasksList } from './data'
import { ThemeProvider } from 'styled-components';
import { themes } from './Themes';
import { GlobalStyle } from './components/styled/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Login } from './components/pages/Login/Login';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Card } from './components/pages/Card/Card';
import { Logout } from './components/pages/Logout/Logout';
import { Register } from './components/pages/Register/Register';
import { Layout } from './components/Layout/Layout';
import { AppRoutes } from './AppRoutes';


function App() {
  const [tasks, setTasks] = useState(tasksList);
  const [theme, setTheme] = useState(themes.light);
  const [isAuth, setIsAuth] = useState(true);

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
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<Layout addNewTask={addNewTask} changeTheme={changeTheme}/>}>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route index element={<Home tasks={tasks} />}/>
                <Route path={AppRoutes.Card} element={<Card/>}/>
                <Route path={AppRoutes.Logout} element={<Logout setIsAuth={setIsAuth}/>}/>
            </Route>

            <Route path={AppRoutes.Login} element={<Login setIsAuth={setIsAuth}/>} />
            <Route path={AppRoutes.Register} element={<Register/>}/>
            <Route path={"*"} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>      
    </ThemeProvider>
  )
}

export default App
