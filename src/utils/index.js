import toast from "react-hot-toast"

const getAllCartData = () => {
    const all = localStorage.getItem('addCart')
    if (all) {
        const addCart = JSON.parse(all)
        return addCart
    } else {
        return []
    }
}



const addToCart = (gadget) => {


    const addCart = getAllCartData()
    const isExist = addCart.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('Already exist!');

    addCart.push(gadget)
    localStorage.setItem('addCart', JSON.stringify(addCart))
    toast.success('Successfully added!');
}


const getAllWishlistData = () => {
    const wishAll = localStorage.getItem('wishlist')
    if (wishAll){
        const wishlist = JSON.parse(wishAll)
        return wishlist
    } else{
        return []
    }
};


    const addToWishlist = (gadget) => {

    const wishlist = getAllWishlistData()

    const isExist = wishlist.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('Already exist!');
        
        wishlist.push(gadget);

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        toast.success('Successfully added!');
    
};







export { addToCart, getAllCartData , addToWishlist, getAllWishlistData}