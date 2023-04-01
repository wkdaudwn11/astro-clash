import React from "react";
import cn from "classnames";

import styles from "./PageGuildTitle.module.sass";

const PageGuildTitle = () => {
    return (
        <div className={cn("container-xl", styles.section)}>
            <p className={styles.title}>Guild</p>
        </div>
    );
};

export default PageGuildTitle;
