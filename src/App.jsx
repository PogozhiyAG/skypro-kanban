import './App.css'
import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
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
import { AuthContextProvider } from './context/AuthContext';
import { DataContextProvider } from './context/DataContext';


function App() {  
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = newTheme => setTheme(themes[newTheme]);
  

  return (
    <AuthContextProvider>
      <DataContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path={AppRoutes.Home} element={<Layout changeTheme={changeTheme}/>}>
                <Route element={<PrivateRoute />}>
                    <Route index element={<Home />}/>
                    <Route path={AppRoutes.Card} element={<Card/>}/>
                    <Route path={AppRoutes.Logout} element={<Logout />}/>
                </Route>

                <Route path={AppRoutes.Login} element={<Login/>} />
                <Route path={AppRoutes.Register} element={<Register/>}/>
                <Route path={"*"} element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>      
        </ThemeProvider>
      </DataContextProvider>
    </AuthContextProvider>
  )
}

export default App
