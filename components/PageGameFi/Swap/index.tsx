import React from "react";

import Image from "../../Image";

import styles from "./Swap.module.sass";

const Swap = () => {
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <figure className={styles.img_box}>
                    <Image
                        src="/images/content/bg-join.jpg"
                        layout="fill"
                        objectFit="contain"
                        alt=""
                    />
                </figure>
                <p className={styles.desc_box}>
                    You can exchange your tokens for other tokens in the xx
                    Chain Enter the token and quantity you wish to exchange and
                    check the quantity of minimum payout.
                </p>
                <p className={styles.desc_box}>
                    Can be exchanged quickly based on the liquidity of the pool.
                    Depending on the situation of the Pool, the minimum payment
                    amount is subject to change Part of the fee(1.5%)is
                    distributed to pool depositors.
                </p>
            </div>
            <div className={styles.right}>right</div>
        </div>
    );
};

export default Swap;
