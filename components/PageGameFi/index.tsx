import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import styles from "./PageGameFi.module.sass";

const PageGameFi = () => {
    const [activeTab, setActiveTab] = useState<"swap" | "staking">("swap");
    const router = useRouter();

    const handleTabClick = (nextTab: "swap" | "staking") => () => {
        if (activeTab === nextTab) return;

        setActiveTab(nextTab);
        window.history.pushState(null, "", `#${nextTab}`);
    };

    useEffect(() => {
        if (router.asPath.includes("#swap")) setActiveTab("swap");
        else if (router.asPath.includes("#staking")) setActiveTab("staking");
    }, [router.asPath]);

    return (
        <div className={cn("section-main", styles.section)}>
            <div className={cn("container-xl", styles.container)}>
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
                <div className={styles.row}>
                    <div>left</div>
                    <div>right</div>
                </div>
            </div>
        </div>
    );
};

export default PageGameFi;
