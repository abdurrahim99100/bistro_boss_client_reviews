import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import card1 from '../../../assets/home/slide1.jpg';
const ChefRecommends = () => {
    return (
        <section className="my-28">
            <SectionTitle subHeading="Should try" heading="chef recommends" />
            <div className="grid lg:grid-cols-3 justify-center lg:justify-between px-5 lg:px-0">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img className="h-[300px]" src={card1} />
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="w-40 btn btn-outline bg-gray-100 border-0 border-b-4 border-amber-600">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img className="h-[300px]" src={card1} />
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="w-40 btn btn-outline bg-gray-100 border-0 border-b-4 border-amber-600">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img className="h-[300px]" src={card1} />
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="w-40 btn btn-outline bg-gray-100 border-0 border-b-4 border-amber-600">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;