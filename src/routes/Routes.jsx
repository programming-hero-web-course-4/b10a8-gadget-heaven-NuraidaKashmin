import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import GadgetCards from "../components/GadgetCards";
import Offers from "../pages/Offers";

// const routes = createBrowserRouter([
//     {
//         path: '/',
//         element: <App></App>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home></Home>
//             },
//             {
//                 path: '/statistic',
//                 element: <Statistics></Statistics>
//             },
            
//         ]
//     }
// ])


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

        </Route>
    )
)
export default routes