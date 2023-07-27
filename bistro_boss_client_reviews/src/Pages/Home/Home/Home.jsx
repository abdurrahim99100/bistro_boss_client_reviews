import Banner from "../Banner/Banner";
import BistroServiceSection from "../BistroServiceSection/BistroServiceSection";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BistroServiceSection />
            <PopularMenu />
            <CallUs />
            <ChefRecommends />
            <Featured />
        </div>
    );
};

export default Home;