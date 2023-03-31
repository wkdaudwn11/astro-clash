import React, { useMemo } from "react";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";

import Image from "../../Image";

import styles from "./Staking.module.sass";

const Staking = () => {
    const isScreenSizeD = useMediaQuery({ query: "(max-width: 1259px)" });

    const cardIconSize = useMemo(() => {
        if (isScreenSizeD) return { width: 40, height: 48 };
        return { width: 54, height: 64.8 };
    }, [isScreenSizeD]);

    return (
        <>
            <div className={styles.row}>
                <div className={styles.left}>
                    <p className={styles.text}>
                        Stake Your Assets in staking products guaranteed by K3K
                        and earn stable profits. Choose Your best plan & receive
                        rewards.
                    </p>
                    <div className={styles.staking_container}>
                        <div className={styles.total_staking_pool}>
                            <div className={styles.total_staking_pool_left} />
                            <div className={styles.total_staking_pool_right}>
                                <p className={styles.title}>
                                    Total Staking Pool
                                </p>
                                <p className={styles.number}>
                                    $999,999,999,999
                                </p>
                            </div>
                        </div>
                        <div className={styles.total_interest}>
                            <p className={styles.title}>Total Interest</p>
                            <p className={cn(styles.number, styles.purple)}>
                                +3.99%
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <figure className={styles.img_box}>
                        <Image
                            src="/images/content/bg-join.jpg"
                            layout="fill"
                            objectFit="contain"
                            alt=""
                        />
                    </figure>
                </div>
            </div>
            <div className={styles.card_container}>
                <div className={styles.row}>
                    <div className={styles.card_list}>
                        {[1, 2, 3, 4].map((item) => (
                            <div key={`card-${item}`} className={styles.card}>
                                <Image
                                    src="/icons/kingdom-token-no-space.svg"
                                    width={cardIconSize.width}
                                    height={cardIconSize.height}
                                    alt=""
                                />
                                <p className={styles.title}>STAKE 90</p>
                                <p className={styles.desc}>
                                    Can be exchanged quickly based on the
                                    liquidity of the pool.
                                </p>
                                <p className={styles.purple_number}>+3.99%</p>
                                <p className={styles.gray_text}>
                                    Recruitment Rate
                                </p>
                                <p className={styles.white_text}>100%</p>
                                <p
                                    className={cn(
                                        styles.gray_text,
                                        styles.gray_text2
                                    )}
                                >
                                    Remaining Recruitment Time
                                </p>
                                <p className={styles.white_text}>Expired</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Staking;
