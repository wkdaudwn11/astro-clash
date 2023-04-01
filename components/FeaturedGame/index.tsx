import React from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import { characters } from "../../mocks/characters";

import Card from "../Card";

import styles from "./FeaturedGame.module.sass";

const FeaturedGame = () => {
    const isScreenD = useMediaQuery({ query: "(max-width: 1259px)" });
    const maxCardCount = isScreenD ? 4 : 5;
    const cardList = characters.filter((characters, idx) => idx < maxCardCount);

    return (
        <div className={cn("container-xl", styles.container)}>
            <p className={styles.title}>featured game</p>
            <div className={styles.card_list}>
                {cardList.length &&
                    cardList.map((item, idx) => (
                        <Card key={`card-${idx}`} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default FeaturedGame;
