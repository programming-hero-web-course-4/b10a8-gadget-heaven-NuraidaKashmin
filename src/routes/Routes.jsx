import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import GadgetCards from "../components/GadgetCards";
import Offers from "../pages/Offers";
import GadgetDetails from "../pages/GadgetDetails";
import Cart from "../components/Cart";
import WhishList from "../components/WhishList";


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="/" element={<Home></Home>} loader={()=> fetch('../../public/gadgets.json')}>
                <Route path="/" element={<GadgetCards></GadgetCards>}
                loader={()=>fetch('../../public/allGadgets.json')}></Route>
                <Route path="/category/:category" element={<GadgetCards></GadgetCards>}
                loader={()=>fetch('../../public/allGadgets.json')}></Route>
            </Route>
            
            
            <Route path="/statistics" element={<Statistics></Statistics>}/>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
            <Route path="/offers" element={<Offers></Offers>}/>
            <Route path="/gadget/:product_id" element={<GadgetDetails></GadgetDetails>}
            loader={()=>fetch('../../public/allGadgets.json')}
            />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<WhishList/>} />

        </Route>
    )
)
export default routes