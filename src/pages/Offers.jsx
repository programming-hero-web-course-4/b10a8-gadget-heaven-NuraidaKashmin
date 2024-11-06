import { Helmet } from 'react-helmet-async';

const Offers = () => {
    return (
        <>
            <Helmet>
                <title>Offers || Gadget Heaven</title>
                <meta name="description" content="Offers Page"/>
            </Helmet>
            <div>
                <div className="flex flex-col w-full justify-center items-center bg-[#9538e2]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 mt-20 w-2/3 text-center">Hurry Up!!!</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 mt-20 w-2/3 text-center">Find Out Exciting Offers</h2>
                <p className="text-xs md:text-base text-white w-2/3 text-center mb-36">Do not miss the opportunity to bring home this affordable gadgets. Shop now while supplies last.</p>
                <button className="btn rounded-full mb-36 text-[#9538e2]">Shop Now</button>
                </div>
                
            </div>
        </>
    );
};

export default Offers;