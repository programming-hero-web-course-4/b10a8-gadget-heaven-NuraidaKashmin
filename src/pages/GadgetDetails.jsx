import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import HeadingDetails from "../components/HeadingDetails";
import { addToCart, addToWishlist, getAllWishlistData, getAllCartData } from "../utils";

const GadgetDetails = () => {
    const data = useLoaderData();
    const { product_id } = useParams();
    const [gadgets, setGadgets] = useState({});
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id === product_id);
        setGadgets(singleData);

        const wishlistItems = getAllWishlistData();
        if (wishlistItems.some(item => item.product_id === singleData.product_id)) {
            setIsInWishlist(true);
        }

        const cartItems = getAllCartData();
        if (cartItems.some(item => item.product_id === singleData.product_id)) {
            setIsInCart(true);
        }
    }, [data, product_id]);

    const handleCart = (gadget) => {
        addToCart(gadget);
        setIsInCart(true);
    };

    const handleWishlist = (gadget) => {
        addToWishlist(gadget);
        setIsInWishlist(true);
    };

    return (
        <div>
            <div className="relative">
                <HeadingDetails
                    title="Product Details"
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                />
                <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-4 p-4 bg-base-100 rounded-3xl">
                    <div>
                        <img className="rounded-xl" src={gadgets.product_image} alt={gadgets.product_title} />
                    </div>
                    <div>
                        <h1 className="mt-4 text-2xl font-bold">{gadgets.product_title}</h1>
                        <p className="mt-4 text-xl text-gray-500 font-bold">Price: {gadgets.price}K</p>
                        <p className={`border ${gadgets.availability ? 'border-green-400 bg-lime-50' : 'border-red-400 bg-red-50'} p-1 w-1/3 text-center rounded-full font-bold mt-4`}>
                            {gadgets.availability ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <p className="text-gray-500 mt-4">{gadgets.description}</p>
                        <h2 className="font-bold mt-4">Specification:</h2>
                        {gadgets.specification && gadgets.specification.length > 0 ? (
                            <ul className="list-decimal pl-9 mt-4 text-gray-500">
                                {gadgets.specification.map((spec, index) => (
                                    <li className="mt-2" key={index}>{spec}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No specifications available.</p>
                        )}
                        <p className="font-bold mt-4">Rating : {gadgets.rating}</p>
                        <div className="flex gap-4 mt-4">
                            <NavLink
                                onClick={() => handleCart(gadgets)}
                                className={`btn rounded-full text-white ${isInCart ? 'bg-gray-500' : 'bg-[#9538e2]'}`}
                                
                            >
                                {isInCart ? 'Added to Cart' : 'Add to Cart'}
                            </NavLink>
                            <NavLink
                                onClick={() => handleWishlist(gadgets)}
                                className={`btn border bg-white text-black rounded-full p-2 ${isInWishlist ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isInWishlist}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-96">
                <h1 className="mt-52 text-[#f7f0f0]">text</h1>
            </div>
        </div>
    );
};

export default GadgetDetails;
