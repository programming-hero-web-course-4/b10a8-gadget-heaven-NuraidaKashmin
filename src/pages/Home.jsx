import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import SubHeading from "../components/SubHeading";
import { Helmet } from 'react-helmet-async';

const Home = () => {


    const categories = useLoaderData()

    const imageSection = (
        <div className='absolute  top-3/4 left-1/2 transform -translate-x-1/2 p-4 border-white border-2 rounded-3xl'>
            <img className="border rounded-3xl w-full" src='../../public/assets/banner.jpg' alt="banner" />
        </div>
    )

    return (
        <div>
            <Helmet>
                <title>Home || Gadget Heaven</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            {/* Heading */}
            <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} button={'Shop Now'} imageSection={imageSection}></Heading>
            <SubHeading></SubHeading>
            {/* Dynamic nested component */}

            <div className=" grid grid-cols-11 gap-4">
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Home;