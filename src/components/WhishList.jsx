/* eslint-disable react/prop-types */
import Card from "./Card";

const WhishList = ({ gadgets }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Wish List</h2>
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

export default WhishList;