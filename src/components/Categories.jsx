/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";

const Categories = ({ categories }) => {
    
    const navigate = useNavigate()
    return (

        <div className=" col-span-2">
            <div className="grid gap-4">
                <NavLink onClick={() => navigate('/')} className="btn rounded-full text-white bg-[#9538e2] font-bold">All Products</NavLink>

                {categories.map((category) => <NavLink className={({ isActive }) => ` ${isActive ? 'btn rounded-full text-white bg-[#9538e2] font-bold' : 'btn border-gray-300 rounded-full text-gray-500 font-bold'}`} key={category.category} to={`/category/${category.category}`}>
                    {category.category}
                </NavLink>)}
            </div>
            <div></div>

        </div>

    );
};

export default Categories;