import cn from "classnames";
import Slider from "react-slick";

import Slide from "./Slide";
import Icon from "../../Icon";
import Image from "../../Image";

import styles from "./GameList.module.sass";

type PlacesType = {
    location: string;
    planet: string;
    content: string;
};

const places: PlacesType[] = [
    {
        location: "Astronauto",
        planet: "Earth",
        content:
            "Ab eligendi ut nisi voluptate blanditiis laborum sint officiis.",
    },
    {
        location: "Lizandro",
        planet: "Mars",
        content: "Adipisci repellat eum quis cupiditate nisi sint rerumoisz.",
    },
];

const avatars: Array<string> = [
    "/images/content/avatars/avatar-1.jpg",
    "/images/content/avatars/avatar-2.jpg",
    "/images/content/avatars/avatar-3.jpg",
    "/images/content/avatars/avatar-4.jpg",
];

type DetailsProps = {};

const GameList = ({}: DetailsProps) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
    };

    return (
        <div className={styles.section}>
            <Slider className="details-slider" {...settings}>
                <Slide />
                <Slide />
                <Slide />
            </Slider>
        </div>
    );
};

export default GameList;
