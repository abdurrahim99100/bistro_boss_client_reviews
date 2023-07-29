import UseMenu from "../../../Hooks/UseMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuDesserts = ({ img }) => {
    const [menu] = UseMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    return (
        <section>
            <Cover img={img} name={"DESSERTS"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <div className="grid md:grid-cols-2 my-10">
                {
                    desserts.map(item => <MenuItems key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mb-10">
                <button className="btn border-0 border-b-4 border-gray-900">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default MenuDesserts;