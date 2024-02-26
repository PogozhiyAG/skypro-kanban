/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CardBoard } from "../../CardBoard/CardBoard";
import { DataContext } from "../../../context/DataContext";


export const Home = () => {
    const [errorMessage, setErrorMessage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {loadTasks, tasks} = useContext(DataContext);

    useEffect(() => {
        const work = async () => {
            try{
                await loadTasks();
            } catch(error){
                setErrorMessage(error)
            }
            
            setIsLoading(false);
        }

        work();        
    }, []);

    return (
        errorMessage 
            ? `Ошибка: ${errorMessage}`
            : isLoading 
                ? 'Загрузка...'
                : <CardBoard tasks={tasks}/>
            
    );
}