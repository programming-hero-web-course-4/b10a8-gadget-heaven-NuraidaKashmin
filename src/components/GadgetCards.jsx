import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    const data = useLoaderData()
    const category = useParams()
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        if (category.category) {
            const filteredGadgets = [...data].filter(gadget => gadget.category === category.category)
            setGadgets(filteredGadgets)
        } else{
            setGadgets(data)
        }
    }, [category, data])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black col-span-9">
            {
                gadgets.map(gadget => (
                    <Card key={gadget.product_id} gadget={gadget} />
                ))
            }

        </div>


    );

};

export default GadgetCards;