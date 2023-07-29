import UseMenu from "../../../Hooks/UseMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuSalads = ({ img }) => {

    const [menu] = UseMenu();
    const salad = menu.filter(item => item.category === "salad");


    return (
        <section>
            <Cover img={img} name={'SALADS'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <div className="grid md:grid-cols-2 my-10">
                {
                    salad.map(item => <MenuItems key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mb-10">
                <button className="btn border-0 border-b-4 border-gray-900">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default MenuSalads;