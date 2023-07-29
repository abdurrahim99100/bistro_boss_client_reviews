

const Cover = ({ img, name, details }) => {
    return (
        <div className="hero lg:h-[580px] lg:pt-[68px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60 bg-cover"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="grid text-white bg-black bg-opacity-30 lg:w-[980px] py-5 lg:py-10 px-10 rounded">
                    <h1 className="text-3xl lg:text-7xl font-light mb-2">{name}</h1>
                    <p className="mb-5">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;