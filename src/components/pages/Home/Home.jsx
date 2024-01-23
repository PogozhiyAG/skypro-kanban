import { tasksList } from "../../../data";
import { CardBoard } from "../../CardBoard/CardBoard";
import { Layout } from "../../Layout/Layout";


export const Home = () => {
    return (
        <Layout>
            <CardBoard tasks={tasksList}/>
        </Layout>
    );
}