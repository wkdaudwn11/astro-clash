import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

import { characters } from "../../../../mocks/characters";

import Card from "../../../Card";

import styles from "./Slide.module.sass";

const Slide = () => {
    const isScreenA = useMediaQuery({ query: "(max-width: 639px)" });
    const isScreenD = useMediaQuery({ query: "(max-width: 1259px)" });
    const isScreenT = useMediaQuery({ query: "(max-width: 1023px)" });

    const maxCardCount = useMemo(() => {
        if (isScreenA) return 10;
        if (isScreenT) return 9;
        if (isScreenD) return 8;
        return 10;
    }, [isScreenA, isScreenT, isScreenD]);

    const cardList = characters.filter((characters, idx) => idx < maxCardCount);

    return (
        <div className={styles.container}>
            <div className={styles.card_list}>
                {cardList.length &&
                    cardList.map((item, idx) => (
                        <Card key={`card-${idx}`} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default Slide;
