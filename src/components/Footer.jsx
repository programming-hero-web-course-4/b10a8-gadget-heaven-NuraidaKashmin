
const Footer = () => {
    return (
        <footer className=" bg-base-100 p-10 mt-14">
            <div className="text-center mb-9">
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6'>Gadget Heaven</h1>
                <p className="text-gray-500">Leading the way in cutting edge technology and innovation</p>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center mt-9">

                <nav className="grid">
                    <h6 className="text-black font-bold">Services</h6>
                    <a className="link link-hover text-gray-500">Branding</a>
                    <a className="link link-hover text-gray-500">Design</a>
                    <a className="link link-hover text-gray-500">Marketing</a>
                    <a className="link link-hover text-gray-500">Advertisement</a>
                </nav>
                <nav className="grid gap-2">
                    <h6 className="text-black font-bold">Company</h6>
                    <a className="link link-hover text-gray-500">About us</a>
                    <a className="link link-hover text-gray-500">Contact</a>
                    <a className="link link-hover text-gray-500">Jobs</a>
                    <a className="link link-hover text-gray-500">Press kit</a>
                </nav>
                <nav className="grid">
                    <h6 className="text-black font-bold">Legal</h6>
                    <a className="link link-hover text-gray-500">Terms of use</a>
                    <a className="link link-hover text-gray-500">Privacy policy</a>
                    <a className="link link-hover text-gray-500">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;