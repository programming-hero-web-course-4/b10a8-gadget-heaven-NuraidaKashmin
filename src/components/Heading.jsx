/* eslint-disable react/prop-types */

const Heading = ({ title, subtitle, button, imageSection }) => {
    
    return (
        <div className='relative'>
            <div className="flex flex-col w-full justify-center items-center bg-[#9538e2]">
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-white mb-6 mt-20 w-2/3 text-center'>{title}</h1>
                <p className='text-xs md:text-base text-white w-2/3 text-center mb-6'>{subtitle}</p>
                <button className="btn rounded-full mb-36">{button}</button>
            </div>
            <div>{imageSection}</div>   
        </div>
    );
};

export default Heading;