import Link from "next/link";
import Image from "../Image";
import cn from "classnames";
import styles from "./Logo.module.sass";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)}>
            <Image
                src="/icons/logo.svg"
                width="182.83"
                height="44"
                alt="logo"
            />
        </a>
    </Link>
);

export default Logo;
