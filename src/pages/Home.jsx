import Heading from "../components/Heading";

const Home = () => {
    const imageSection = (
        <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 p-4 border-white border-2 rounded-3xl'>
            <img className="border rounded-3xl w-full" src='../../public/assets/banner.jpg' alt="banner" />
        </div>
    )

    return (
        <div>
            {/* Heading */}
            <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} button={'Shop Now'} imageSection={imageSection}></Heading>
            {/* Dynamic nested component */}



        </div>
    );
};

export default Home;