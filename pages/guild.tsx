import type { NextPage } from "next";

import Layout from "../components/Layout";
import PageGuild from "../components/PageGuild";

const Guild: NextPage = () => {
    return (
        <Layout>
            <PageGuild isShowTitle />
        </Layout>
    );
};

export default Guild;
