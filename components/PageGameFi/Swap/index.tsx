import React from "react";
import cn from "classnames";
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
    const isSmallMobile = useMediaQuery({ query: "(max-width: 474px)" });

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
                <div className={styles.right_box}>
                    <div className={styles.minimum_trade_amount_box}>
                        <p className={styles.minimum_title}>
                            MINIMUN TRADE AMONUT
                        </p>
                        <div className={styles.fee_box}>
                            <Image
                                src="/icons/kingdom-token.svg"
                                width={isSmallMobile ? 24 : 44}
                                height={isSmallMobile ? 24 : 44}
                                alt=""
                            />
                            <span>99,9999</span>
                            <span className={styles.dollar}>($1,767.66)</span>
                        </div>
                    </div>
                    <div className={styles.right_box_row}>
                        <p className={cn(styles.col, styles.col_title)}>
                            Exchange Fee
                        </p>
                        <p className={styles.col}>
                            <div className={styles.fee_box}>
                                <Image
                                    src="/icons/kingdom-token.svg"
                                    width={isSmallMobile ? 24 : 44}
                                    height={isSmallMobile ? 24 : 44}
                                    alt=""
                                />
                                <span>99,9999</span>
                                <span className={styles.dollar}>
                                    ($1,767.66)
                                </span>
                            </div>
                        </p>
                    </div>
                    <div className={styles.right_box_row}>
                        <p className={cn(styles.col, styles.col_title)}>
                            Swap route
                        </p>
                        <p className={styles.col}>
                            <div className={styles.swap_route_left_box}>
                                <Image
                                    src="/icons/kingdom-token.svg"
                                    width={isSmallMobile ? 24 : 44}
                                    height={isSmallMobile ? 24 : 44}
                                    alt=""
                                />
                                <span>Kingdom Token</span>
                            </div>
                            <Image
                                src="/icons/arrow-right-white.svg"
                                width={24}
                                height={24}
                                alt=""
                            />
                            <div className={styles.swap_route_right_box}>
                                <Image
                                    src="/icons/kingdom-token.svg"
                                    width={isSmallMobile ? 24 : 44}
                                    height={isSmallMobile ? 24 : 44}
                                    alt=""
                                />
                            </div>
                            <span>Kingdom Token</span>
                        </p>
                    </div>
                    <div className={styles.right_box_row}>
                        <p className={cn(styles.col, styles.col_title)}>
                            Current Liquidity Difference (Price Impact)
                        </p>
                        <p className={styles.col}>0.01%</p>
                    </div>
                    <div className={styles.right_box_row}>
                        <p className={cn(styles.col, styles.col_title)}>
                            Slippage Rate
                        </p>
                        <p className={cn(styles.col, styles.col_color_text)}>
                            0.5%
                        </p>
                    </div>
                    <button className={cn("button-stroke", styles.button)}>
                        EXCHANGE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Swap;
