import background from '../../../assets/home/chef-service.jpg';

const BistroServiceSection = () => {
    return (
        <div className='px-5 lg:px-0'>
            <div className='w-full h-[600px] lg:h-[500px] mt-28 flex flex-col items-center justify-center' style={{ backgroundImage: `url(${background})` }}>
                <div className=' bg-white w-10/12 lg:w-9/12 h-[450px] lg:h-[300px] rounded-md flex gap-2 flex-col justify-center items-center '>
                    <h3 className='uppercase text-4xl font-semibold'>bistro boss</h3>
                    <p className='px-5 text-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio expedita aliquid delectus ex, explicabo voluptatibus eum id omnis fugiat, nihil a error numquam deleniti aut sint beatae? Eum esse, asperiores nemo minus facilis dolor. Soluta nobis omnis delectus, labore voluptatem culpa sed optio exercitationem, nemo deleniti perspiciatis velit, eum eaque?</p>
                </div>
            </div>
        </div>
    );
};

export default BistroServiceSection;