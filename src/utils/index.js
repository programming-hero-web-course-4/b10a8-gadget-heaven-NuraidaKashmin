import toast from "react-hot-toast"

const getAllCartData = ()=>{
    const all = localStorage.getItem('addCart')
    if(all){
        const addCart = JSON.parse(all)
        return addCart
    }else{
        return []
    }
}



const addToCart = (gadget)=>{


    const addCart = getAllCartData()
    const isExist = addCart.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('Already exist!');
   
    addCart.push(gadget)
    localStorage.setItem('addCart', JSON.stringify(addCart))
    toast.success('Successfully added!');
}







export {addToCart , getAllCartData}