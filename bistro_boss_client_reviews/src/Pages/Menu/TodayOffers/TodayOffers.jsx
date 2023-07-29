import UseMenu from "../../../Hooks/UseMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const TodayOffers = () => {

    const [menu] = UseMenu();
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <section>
            <SectionTitle subHeading="Don't miss" heading="today's offer" />
            <div className="grid md:grid-cols-2 my-10">
                {
                    offered.map(item => <MenuItems key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mb-10">
                <button className="btn border-0 border-b-4 border-gray-900">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default TodayOffers;