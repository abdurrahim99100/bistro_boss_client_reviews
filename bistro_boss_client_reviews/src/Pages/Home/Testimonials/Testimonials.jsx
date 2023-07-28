import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// react rating import;
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle subHeading='What Out Client Say' heading='testimonials' />
            <div>
                < Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="lg:px-28">
                                    <div className="mx-auto grid justify-center mt-5">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                    </div>
                                    <p className="text-9xl font-bold my-5">!!</p>
                                    <p className="px-14 lg:px-0">{review.details}</p>
                                    <h3 className="text-amber-600 text-3xl font-semibold my-10">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section >
    );
};

export default Testimonials;