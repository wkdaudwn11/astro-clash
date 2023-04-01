import type { NextPage } from "next";

import Layout from "../../components/Layout";
import PageGame from "../../components/PageGame";

const Game: NextPage = () => {
    return (
        <Layout hideFooter>
            <PageGame />
        </Layout>
    );
};

export default Game;
