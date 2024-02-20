/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CardBoard } from "../../CardBoard/CardBoard";


export const Home = ({tasks}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, [])

    return (
        isLoading 
            ? 'Загрузка...'
            : <CardBoard tasks={tasks}/>
    );
}