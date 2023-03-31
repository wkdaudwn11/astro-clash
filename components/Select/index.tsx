import { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { useMediaQuery } from "react-responsive";

import Icon from "../Icon";
import Image from "../Image";

import styles from "./Select.module.sass";

type OptionType = {
    icon?: string;
    title: string;
    value: string;
};

type SelectProps = {
    className?: string;
    title?: string;
    value: string;
    onChange: (value: string) => void;
    options: OptionType[];
};

const Select = ({
    className,
    title,
    value,
    onChange,
    options,
}: SelectProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
    const activeOption = options.filter((option) => option.value === value);

    const handleChange = (value: string) => {
        onChange(value);
        setVisible(false);
    };
    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div className={cn(styles.select, className)}>
                <button
                    className={cn(styles.toggle, { [styles.active]: visible })}
                    onClick={() => setVisible(!visible)}
                    type="button"
                >
                    {activeOption.length > 0 && activeOption[0].icon && (
                        <Image
                            src={activeOption[0].icon}
                            width={isMobile ? 35.2 : 44}
                            height={isMobile ? 39.2 : 49}
                            alt=""
                        />
                    )}
                    {activeOption.length > 0 ? activeOption[0].title : title}
                    <Icon name="chevron-down" fill="white" />
                </button>
                {visible && (
                    <div className={styles.dropdown}>
                        {[
                            options.map((option, index) => (
                                <button
                                    className={cn(styles.option, {
                                        [styles.active]: value === option.value,
                                    })}
                                    onClick={() => handleChange(option.value)}
                                    type="button"
                                    key={index}
                                >
                                    {option.title}
                                </button>
                            )),
                        ]}
                    </div>
                )}
            </div>
        </OutsideClickHandler>
    );
};

export default Select;
