import { useEffect, useState } from "react";
import HeadingDetails from "../components/HeadingDetails";
import { getAllCartData } from "../utils";
import Card from "../components/Card";
import Cart from "../components/Cart";
import WhishList from "../components/WhishList";
import { useNavigate } from "react-router-dom";




const Dashboard = () => {
    const navigate = useNavigate();
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        const favorites = getAllCartData()
        setGadgets(favorites)
    }, [])
    return (
        <div>
            <HeadingDetails title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></HeadingDetails>
            {/* <div className="flex gap-4  justify-center items-center bg-[#9538e2]">
                <button>Cart</button>
                <button>Wishlist</button>
            </div> */}



            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black col-span-9">
                {
                    gadgets.map(gadget => (
                        <Card key={gadget.product_id} gadget={gadget} />
                    ))
                }

            </div> */}

            <button
                className="btn btn-primary m-2"
                onClick={() => navigate('/cart')}
            >
                Go to Cart
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={() => navigate('/wishlist')}
            >
                Go to Wish List
            </button>

            <Cart gadgets={gadgets}></Cart>
            <WhishList gadgets={gadgets}></WhishList>


        </div>
    );
};

export default Dashboard;