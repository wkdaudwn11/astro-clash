import React from "react";
import cn from "classnames";

import GameList from "./GameList";

import styles from "./PageGame.module.sass";

const PageGame = () => {
    return (
        <div className={cn("section-main", styles.section)}>
            <div className={styles.container}>
                <p className={styles.title}>GAME</p>
                <GameList />
            </div>
        </div>
    );
};

export default PageGame;
