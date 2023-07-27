// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// import swiper img;
import swiper1 from '../../../assets/home/slide1.jpg';
import swiper2 from '../../../assets/home/slide2.jpg';
import swiper3 from '../../../assets/home/slide3.jpg';
import swiper4 from '../../../assets/home/slide4.jpg';
import swiper5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <div className=''>
                <SectionTitle
                    subHeading={'-----From 11.00 am to 10.00 pm-----'}
                    heading={'-----Order Online-----'}
                ></SectionTitle>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-10 "
            >
                <SwiperSlide>
                    <div className='h-auto lg:h-[400px]'>
                        <img className='' src={swiper1} alt="" />
                        <h3 className='uppercase -mt-12 lg:-mt-28 text-xl lg:text-4xl text-white'>salad</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-auto lg:h-[400px]'>
                        <img src={swiper2} alt="" />
                        <h3 className='uppercase -mt-12 lg:-mt-28 text-xl lg:text-4xl text-white'>sup</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-auto lg:h-[400px]'>
                        <img src={swiper3} alt="" />
                        <h3 className='uppercase -mt-12 lg:-mt-28 text-xl lg:text-4xl text-white'>pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-auto lg:h-[400px]'>
                        <img src={swiper4} alt="" />
                        <h3 className='uppercase -mt-12 lg:-mt-28 text-xl lg:text-4xl text-white'>desserts</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-auto lg:h-[400px]'>
                        <img src={swiper5} alt="" />
                        <h3 className='uppercase -mt-12 lg:-mt-28 text-xl lg:text-4xl text-white'>chicken</h3>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;