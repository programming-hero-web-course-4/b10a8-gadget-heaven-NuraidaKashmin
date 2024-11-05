import { useEffect, useState } from "react";
import HeadingDetails from "../components/HeadingDetails";
import { getAllCartData } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
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

            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black col-span-9">
                {
                    gadgets.map(gadget => (
                        <Card key={gadget.product_id} gadget={gadget} />
                    ))
                }

            </div>


        </div>
    );
};

export default Dashboard;