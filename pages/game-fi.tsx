import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageGameFi from "../components/PageGameFi";

const GameFi: NextPage = () => {
    return (
        <Layout hideFooter>
            <PageGameFi />
        </Layout>
    );
};

export default GameFi;
