import React from "react";
import { useMediaQuery } from "react-responsive";

import Image from "../../Image";
import Input from "../../Input";
import Select from "../../Select";

import styles from "./Swap.module.sass";

const options = [
    {
        icon: "/icons/kingdom-token.svg",
        title: "Kingdom Token",
        value: "Kingdom Token",
    },
];

const Swap = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

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
            <div className={styles.right}>
                <div className={styles.right_box}>
                    <p className={styles.top_text}>From</p>
                    <div className={styles.input_box}>
                        <Input
                            className={styles.input}
                            value="99,999"
                            readOnly
                            onChange={() => console.log("onChange")}
                        />
                        <Select
                            value="Kingdom Token"
                            options={options}
                            className={styles.select}
                            onChange={() => console.log("onChange")}
                        />
                    </div>
                    <p className={styles.bottom_text}>$1,767.66</p>
                </div>
                <div className={styles.right_box}>
                    <div className={styles.arrow_box}>
                        <Image
                            src="/icons/arrow-down-white.svg"
                            width={isMobile ? 16 : 24}
                            height={isMobile ? 16 : 24}
                            alt=""
                        />
                    </div>
                    <p className={styles.top_text}>To</p>
                    <div className={styles.input_box}>
                        <Input
                            className={styles.input}
                            value="99,999"
                            readOnly
                            onChange={() => console.log("onChange")}
                        />
                        <Select
                            value="Kingdom Token"
                            options={options}
                            className={styles.select}
                            onChange={() => console.log("onChange")}
                        />
                    </div>
                    <p className={styles.bottom_text}>$1,767.66</p>
                </div>
                <div className={styles.info_box}>
                    <Image
                        src="/icons/info.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                    1 Kingdom Token = 0.0035 ETH <span>($0.641)</span>
                </div>
                <div className={styles.right_box}>right_box</div>
            </div>
        </div>
    );
};

export default Swap;
