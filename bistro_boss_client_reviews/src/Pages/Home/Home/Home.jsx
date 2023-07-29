import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import homeCover from '../../../assets/home/chef-service.jpg';
import HomeCover from "../HomeCover/HomeCover";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner />
            <Category />
            <HomeCover img={homeCover} />
            <PopularMenu />
            <CallUs />
            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;