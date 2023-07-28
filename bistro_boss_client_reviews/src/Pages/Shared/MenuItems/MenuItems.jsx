

const MenuItems = ({ item }) => {
    const { image, name, price, recipe } = item;
    
    return (
        <div className="flex gap-5 mb-5 mr-5 px-5 lg:px-0">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-36 h-24" src={image} alt="" />
            <div>
                <h3 className="text-xl">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-amber-500">${price}</p>
        </div>
    );
};

export default MenuItems;