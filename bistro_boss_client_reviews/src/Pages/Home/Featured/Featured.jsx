import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import backgroundImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="h-[800px] featured bg-fixed">
            <div className="pt-1 lg:pt-24 text-white">
                <SectionTitle subHeading="Check it out" heading="from out menu" />
            </div>
            <div className="flex-none lg:flex gap-5 justify-center text-white p-5 lg:p-0">
                <div className="w-auto lg:w-5/12">
                    <img className="rounded" src={backgroundImg} alt="" />
                </div>
                <div className="w-auto lg:w-5/12 text-sm lg:text-xl">
                    <h3>March 20, 2023</h3>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div>
                        <button className="btn btn-outline border-0 border-b-4 border-gray-900 mt-5 text-white">View full menu</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;