import React from "react";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";

import Image from "../Image";
import PageGuildTitle from "./PageGuildTitle";

import styles from "./PageGuild.module.sass";

type Props = {
    isShowTitle?: boolean;
};

const PageGuild = ({ isShowTitle }: Props) => {
    const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

    return (
        <div
            className={cn({
                [styles.paddingTop]: !isShowTitle,
            })}
        >
            {isShowTitle && <PageGuildTitle />}
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contents}>
                        <Image
                            src="/images/content/details-pic-4.png"
                            layout="fixed"
                            width={300}
                            height={180}
                            alt="details-pic-3"
                        />
                        <p className={styles.title}>
                            Game Description Here, Enjoy K3K P2E GMA AND EARN
                            CRYPTO CURRENCY FOR REWARD
                        </p>
                        <div className={styles.row}>
                            <p className={styles.row_title}>Platform</p>
                            <div className={styles.store_box}>
                                <Image
                                    src="/icons/google-store.svg"
                                    layout="fixed"
                                    width={isMobile ? 120 : 200}
                                    height={isMobile ? 36 : 60}
                                    alt="google-store"
                                />
                                <Image
                                    src="/icons/apple-store.svg"
                                    layout="fixed"
                                    width={isMobile ? 120 : 200}
                                    height={isMobile ? 36 : 60}
                                    alt="apple-store"
                                />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.row_title}>Language</p>
                            <p className={styles.language}>
                                English, Korean, Chinese, Traditional Chinese,
                                Japanese, Thai, Indonesian, Vietnam,Espanol,
                                Portuguese, Russian
                            </p>
                        </div>
                        <div className={styles.coming_soon_box}>
                            <button
                                className={cn("button-stroke", styles.button, {
                                    [styles.button_primary]: isShowTitle,
                                    [styles.button_purple]: !isShowTitle,
                                })}
                            >
                                {isShowTitle ? "Coming Soon" : "Play NOW"}
                            </button>
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/content/slide-pic-1.png"
                    layout="fill"
                    objectFit="cover"
                    alt="background"
                />
            </div>
        </div>
    );
};

export default PageGuild;
