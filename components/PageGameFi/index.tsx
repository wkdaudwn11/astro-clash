import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import Swap from "./Swap";
import Staking from "./Staking";

import styles from "./PageGameFi.module.sass";

type Tab = "swap" | "staking";

const PageGameFi = () => {
    const [activeTab, setActiveTab] = useState<Tab>("swap");
    const router = useRouter();

    const handleTabClick = (nextTab: Tab) => () => {
        if (activeTab === nextTab) return;

        setActiveTab(nextTab);
        window.history.pushState(null, "", `#${nextTab}`);
    };

    useEffect(() => {
        if (router.asPath.includes("#swap")) setActiveTab("swap");
        else if (router.asPath.includes("#staking")) setActiveTab("staking");
    }, [router.asPath]);

    return (
        <div
            className={cn("section-main", styles.section, {
                [styles.bg]: activeTab === "staking",
            })}
        >
            <div className={cn(styles.container)}>
                <div className={styles.title_block}>
                    <p className={styles.title}>GAME-FI</p>
                    <div className={styles.tab_container}>
                        <span
                            className={cn(styles.tab, {
                                [styles.active]: activeTab === "swap",
                            })}
                            onClick={handleTabClick("swap")}
                        >
                            Swap
                        </span>
                        <span
                            className={cn(styles.tab, {
                                [styles.active]: activeTab === "staking",
                            })}
                            onClick={handleTabClick("staking")}
                        >
                            Staking
                        </span>
                    </div>
                </div>
                {activeTab === "swap" ? <Swap /> : <Staking />}
            </div>
        </div>
    );
};

export default PageGameFi;
