import React from "react";
import cn from "classnames";

import GameList from "./GameList";
import GameRanking from "./GameRanking";

import styles from "./PageGame.module.sass";

const PageGame = () => {
    return (
        <>
            <div className={styles.game_section}>
                <div className={styles.container}>
                    <p className={styles.title}>GAME</p>
                    <GameList />
                </div>
            </div>
            <div>
                <div className={styles.container}>
                    <p className={styles.title}>RANKING</p>
                    <GameRanking />
                </div>
            </div>
        </>
    );
};

export default PageGame;
