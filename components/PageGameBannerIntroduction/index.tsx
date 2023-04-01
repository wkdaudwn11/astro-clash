import cn from "classnames";
import React from "react";

import styles from "./PageGameBannerIntroduction.module.sass";

const PageGameBannerIntroduction = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>introduction</p>
            <div className={styles.contents}>
                <div className={styles.left}>
                    <p className={cn(styles.text, styles.text_margin_top)}>
                        Game Description Here, Enjoy K3K P2E GMA AND EARN CRYPTO
                        CURRENCY FOR REWARD
                    </p>
                    <p className={cn(styles.text)}>
                        Game Description Here, Enjoy K3K P2E GMA AND EARN CRYPTO
                        CURRENCY FOR REWARD
                    </p>
                    <p className={cn(styles.text, styles.text_margin_top)}>
                        Global Launched,
                    </p>
                    <p className={cn(styles.text)}>Play Now</p>
                    <p className={cn(styles.text, styles.text_margin_top)}>
                        Game Description Here, Enjoy K3K P2E GMA AND EARN CRYPTO
                        CURRENCY FOR REWARD
                    </p>
                    <p className={cn(styles.text)}>
                        Game Description Here, Enjoy K3K P2E GMA AND EARN CRYPTO
                        CURRENCY FOR REWARD
                    </p>
                    <p className={cn(styles.text)}>
                        Game Description Here, Enjoy K3K P2E GMA AND EARN CRYPTO
                        CURRENCY FOR REWARD
                    </p>
                    <p className={cn(styles.text)}>
                        Game Description Here, Enjoy K3K P2E GMA AND EARN CRYPTO
                        CURRENCY FOR REWARD
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.contents}>
                        <div className={styles.row}>
                            <p>Developer</p>
                            <p className={styles.value}>Nexon</p>
                        </div>
                        <div className={styles.row}>
                            <p>Onboarding</p>
                            <p className={styles.value}>Nexon.co</p>
                        </div>
                        <div className={styles.row}>
                            <p>Release Date</p>
                            <p className={styles.value}>23.03.20</p>
                        </div>
                        <div className={styles.row}>
                            <p>Official Site</p>
                            <p className={styles.value}>Link</p>
                        </div>
                        <div className={styles.row}>
                            <p>CS Center</p>
                            <p className={styles.value}>Link</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageGameBannerIntroduction;
