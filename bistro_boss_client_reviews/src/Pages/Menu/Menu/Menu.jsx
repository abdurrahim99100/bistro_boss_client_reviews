import { Helmet } from "react-helmet-async";
import MenuBanner from "../MenuBanner/MenuBanner";
import menuBannerImg from '../../../assets/menu/banner3.jpg';
import TodayOffers from "../TodayOffers/TodayOffers";
import MenuDesserts from "../MenuDesserts/MenuDesserts";
import menuDessertsBanner from "../../../assets/menu/dessert-bg.jpeg";
import MenuPizza from "../MenuPizza/MenuPizza";
import MenuPizzaBanner from "../../../assets/menu/pizza-bg.jpg";
import MenuSalads from "../MenuSalads/MenuSalads";
import MenuSaladsBanner from "../../../assets/menu/salad-bg.jpg";
import MenuSoups from "../MenuSoups/MenuSoups";
import MenuSoupsBanner from "../../../assets/menu/soup-bg.jpg";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <MenuBanner img={menuBannerImg} />
            <TodayOffers />
            <MenuDesserts img={menuDessertsBanner} />
            <MenuPizza img={MenuPizzaBanner} />
            <MenuSalads img={MenuSaladsBanner} />
            <MenuSoups img={MenuSoupsBanner} />
        </div>
    );
};

export default Menu;