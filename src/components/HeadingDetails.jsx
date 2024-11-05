
const HeadingDetails = ({ title, subtitle }) => {
    return (
        <div>
            <div className="flex flex-col w-full justify-center items-center bg-[#9538e2]">
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 mt-20 w-2/3 text-center'>{title}</h1>
                <p className='text-xs md:text-base text-white w-2/3 text-center mb-36'>{subtitle}</p>
            </div>
            
            
        </div>
    );
};

export default HeadingDetails;