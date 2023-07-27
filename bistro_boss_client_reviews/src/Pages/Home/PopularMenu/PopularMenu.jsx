import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular');
                setMenu(popularMenu);
            })
    }, []);

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
                    menu.map(item => <MenuItems
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