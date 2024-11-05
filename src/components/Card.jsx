/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating, brand } = gadget || {}
    return (
        <div>
            <Link to={`/gadget/${product_id}`} className="card bg-base-100 gap-2 shadow-xl">
                <img
                    src={product_image}
                    alt="card image"
                    className="rounded-xl w-full" />
                <h2 className="card-title">{product_title}</h2>
                <p className="text-gray-600 font-bold">Price: {price}K</p>
                <div className="card-actions">
                    <button className="btn rounded-full border-[#9538e2] text-[#9538e2]">View Details</button>
                </div>

            </Link>
        </div>
    );
};

export default Card;