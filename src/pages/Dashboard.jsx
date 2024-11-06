import { useEffect, useState } from "react";
import HeadingDetails from "../components/HeadingDetails";
import { getAllCartData, getAllWishlistData } from "../utils";





const Dashboard = () => {

    const [activeTab, setActiveTab] = useState('cart');
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [sortedCartItems, setSortedCartItems] = useState([]);

    useEffect(() => {
        setCartItems(getAllCartData());
        setWishlistItems(getAllWishlistData());
    }, []);

    const handleSortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
        setSortedCartItems(sortedItems);
    };


    return (
        <div>
            <HeadingDetails title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></HeadingDetails>


            <div className="flex gap-4 justify-center pb-24 bg-[#9538e2]">
                <button
                    className={`btn ${activeTab === 'cart' ? 'bg-[#9538e2] text-white' : ''}`}
                    onClick={() => setActiveTab('cart')}
                >
                    Cart
                </button>
                <button
                    className={`btn ${activeTab === 'wishlist' ? 'bg-[#9538e2] text-white' : ''}`}
                    onClick={() => setActiveTab('wishlist')}
                >
                    Wish List
                </button>
            </div>

            {activeTab === 'cart' && (
                <div>

                    <div className="mt-8">
                        <div className="flex gap-4 justify-between">
                            <h2 className="text-2xl font-bold mb-2">Cart</h2>
                            <div className="flex gap-4">
                                <p className=" font-bold text-2xl">
                                    Total Price: {cartItems.reduce((total, item) => total + item.price, 0)}K
                                </p>

                                <button onClick={handleSortByPrice} className="btn rounded-xl border-2 border-[#9538e2] text-[#9538e2]">
                                    Sort by Price
                                </button>
                                <button className="btn bg-[#9538e2] text-white rounded-xl">Purchase</button>
                            </div>
                        </div>


                        {(sortedCartItems.length > 0 ? sortedCartItems : cartItems).map(item => (
                            <div key={item.product_id} className="card mb-4">
                                <img src={item.product_image} alt={item.product_title} className="w-44 h-44" />
                                <div>
                                    <h3 className="font-bold">{item.product_title}</h3>
                                    <p>Price: {item.price}K</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}

            {activeTab === 'wishlist' && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Wishlist Items</h2>
                    <div>
                        {wishlistItems.map(item => (
                            <div key={item.product_id} className="card mb-4">
                                <img src={item.product_image} alt={item.product_title} className="w-44 h-44" />
                                <div>
                                    <h3 className="font-bold">{item.product_title}</h3>
                                    <p>Price: {item.price}K</p>
                                </div>
                            </div>
                        ))}
                        {wishlistItems.length === 0 && <p>No items in the wishlist.</p>}
                    </div>
                </div>
            )}


        </div>
    );
};

export default Dashboard;