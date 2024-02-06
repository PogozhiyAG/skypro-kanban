/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CardBoard } from "../../CardBoard/CardBoard";
import { Layout } from "../../Layout/Layout";


export const Home = ({tasks, addNewTask, changeTheme}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <Layout addNewTask={addNewTask} changeTheme={changeTheme}>
            {isLoading 
                ? 'Загрузка...'
                : <CardBoard tasks={tasks}/>
            }            
        </Layout>
    );
}