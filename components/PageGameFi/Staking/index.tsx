import React from "react";
import cn from "classnames";

import Image from "../../Image";

import styles from "./Staking.module.sass";

const Staking = () => {
    return (
        <div style={{ border: "1px solid red" }}>
            <div className={styles.row}>
                <div className={styles.left}>
                    <p className={styles.text}>
                        Stake Your Assets in staking products guaranteed by K3K
                        and earn stable profits. Choose Your best plan & receive
                        rewards.
                    </p>
                    <div className={styles.staking_container}>
                        <div className={styles.total_staking_pool}>
                            staking pool
                        </div>
                        <div className={styles.total_interest}>total inter</div>
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
        </div>
    );
};

export default Staking;
