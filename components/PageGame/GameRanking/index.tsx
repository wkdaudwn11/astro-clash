import React from "react";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import Image from "../../Image";

import styles from "./GameRanking.module.sass";

const GameRanking = () => {
    const isScreenT = useMediaQuery({ query: "(max-width: 1023px)" });

    return (
        <div className={styles.container}>
            <Table>
                <Thead>
                    <Tr className={styles.row}>
                        <Th className={styles.title}>#</Th>
                        <Th className={styles.title}>Game</Th>
                        <Th className={styles.title}>Concurrent Players</Th>
                        <Th className={styles.title}>24h</Th>
                        <Th className={styles.title}>Last 7 Days</Th>
                        <Th className={styles.title}>24h Peak</Th>
                        <Th className={styles.title}>All Time Peak</Th>
                        <Th className={styles.title}>Token Price($)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                        <>
                            {idx === 1 && <div className={styles.spacing} />}
                            <Tr key={`row-${idx}`} className={styles.row}>
                                <Td className={styles.col}>{idx}</Td>
                                <Td className={cn(styles.col, styles.game)}>
                                    <Image
                                        src="/images/content/game/game-red-dead.png"
                                        width={isScreenT ? 62 : 82}
                                        height={isScreenT ? 62 : 82}
                                        alt="No result"
                                    />
                                    <div className={styles.game_text_box}>
                                        <p className={styles.title}>
                                            RED DEAD REDEMPTION
                                        </p>
                                        <p className={styles.genre}>MMO</p>
                                    </div>
                                </Td>
                                <Td className={styles.col}>
                                    <div className={styles.people}>
                                        <figure>
                                            <Image
                                                src="/icons/people.svg"
                                                layout="fixed"
                                                width={24}
                                                height={24}
                                                alt="google-store"
                                            />
                                        </figure>
                                        <span>999,888,777</span>
                                    </div>
                                </Td>
                                <Td className={styles.col}>+99.99%</Td>
                                <Td className={styles.col}>
                                    <Image
                                        src="/images/content/game/ranking-chart.png"
                                        width={isScreenT ? 46 : 96}
                                        height={isScreenT ? 20 : 40}
                                        alt="No result"
                                    />
                                </Td>
                                <Td className={styles.col}>999,888,777</Td>
                                <Td className={styles.col}>999,888,777</Td>
                                <Td className={styles.col}>$999,888,777</Td>
                            </Tr>
                            <div className={styles.spacing} />
                        </>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
};

export default GameRanking;
