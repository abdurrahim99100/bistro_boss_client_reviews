

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-20 mb-10">
            <p className="text-xl text-amber-600">{subHeading}</p>
            <hr className="w-[400px] h-[4px] bg-gray-300" />
            <h3 className="text-3xl font-semibold uppercase">{heading}</h3>
            <hr className="w-[400px] h-[4px] bg-gray-300" />
        </div>
    );
};

export default SectionTitle;