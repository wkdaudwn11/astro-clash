import Parallax from "./Parallax";
import Details from "./Details";
// import Work from "./Work";
// import Advantages from "./Advantages";
// import Offer from "./Offer";
// import Protect from "./Protect";
// import Acquaintance from "./Acquaintance";
import JoinCommunity from "../JoinCommunity";
import FeaturedGame from "../FeaturedGame";

type PageHomeProps = {};

const PageHome = ({}: PageHomeProps) => {
    return (
        <Parallax>
            <Details /> {/** 슬라이드 */}
            {/* <Work /> */}
            {/* <Protect /> */}
            {/* <Acquaintance /> */}
            {/* <Offer /> */}
            {/* <Advantages /> */}
            <FeaturedGame />
            <JoinCommunity />
        </Parallax>
    );
};

export default PageHome;
