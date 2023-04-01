import type { NextPage } from "next";

import Layout from "../../../components/Layout";
import PageGameBanner from "../../../components/PageGameBanner";

const GameBanner: NextPage = () => {
    return (
        <Layout hideFooter>
            <PageGameBanner />
        </Layout>
    );
};

export default GameBanner;
