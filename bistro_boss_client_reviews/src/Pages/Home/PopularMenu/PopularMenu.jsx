import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import UseMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {

    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <div>
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"from out menu"}
                >
                </SectionTitle>
            </div>
            <div className="grid md:grid-cols-2">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center mb-10">
                <button className="btn border-0 border-b-4 border-gray-900">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;