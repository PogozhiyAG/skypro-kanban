/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getTasks, postTask, putTask } from "../api";

export const DataContext = createContext({});

export const DataContextProvider = ({children}) => {    
    const [tasks, setTasks] = useState([]);
    const {auth} = useContext(AuthContext);

    const loadTasks = () => 
        getTasks({token: auth?.user?.token})
        .then(data => setTasks(data.tasks));

    const addTask = (task) => 
        postTask({token: auth?.user?.token, task})
        .then(data => setTasks(data.tasks));

    const editTask = (task) => 
        putTask({token: auth?.user?.token, task})
        .then(data => setTasks(data.tasks));
    

    const value = {
        tasks,
        setTasks,

        loadTasks,
        addTask,
        editTask
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );    
}