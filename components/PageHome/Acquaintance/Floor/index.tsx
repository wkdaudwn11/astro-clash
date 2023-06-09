import cn from "classnames";
import styles from "./Floor.module.sass";

type FloorProps = {
    className?: string;
};

const Floor = ({ className }: FloorProps) => {
    return (
        <svg
            className={cn(className, styles.floor)}
            width="3579"
            height="510"
            viewBox="0 0 3579 510"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1790 2L1790 509" />
            <path d="M1 509L3578 509" />
            <path d="M252.5 399.5L3326.5 399.5" />
            <path d="M440 318L3139 318" />
            <path d="M587 254L2992 254" />
            <path d="M702 204L2877 204" />
            <path d="M796 163L2782.5 163" />
            <path d="M874.5 129L2705 129" />
            <path d="M940.5 100L2638 100" />
            <path d="M996 76L2583 76" />
            <path d="M1042 56L2537 56" />
            <path d="M1085.5 37L2493.5 37" />
            <path d="M1127 19L2452 19" />
            <path d="M1165.5 2L2413.5 2" />
            <path d="M1720 2L1573 509" />
            <path d="M1654 2L1359 509" />
            <path d="M1586 2L1143 509" />
            <path d="M1514 3L931 509" />
            <path d="M1450 2L708 509" />
            <path d="M1378 2L539 509" />
            <path d="M1312 2L358 509" />
            <path d="M1234 2L184 509" />
            <path d="M1166 2L1 509" />
            <path d="M1859 3L2005 507" />
            <path d="M1924 2L2219 509" />
            <path d="M1993 2L2436 509" />
            <path d="M2065 3L2647 509" />
            <path d="M2129 1L2872 509" />
            <path d="M2201 2L3059 509" />
            <path d="M2267 2L3231.5 509" />
            <path d="M2345 2L3394 509" />
            <path d="M2413 2L3578 509" />
        </svg>
    );
};

export default Floor;
