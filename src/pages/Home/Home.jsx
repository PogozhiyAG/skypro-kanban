import { CardBoard } from "../../components/CardBoard/CardBoard";
import { Layout } from "../../components/Layout/Layout";
import { tasksList } from "../../data";

export const Home = () => {
    return (
        <Layout>
            <CardBoard tasks={tasksList}/>
        </Layout>
    );
}