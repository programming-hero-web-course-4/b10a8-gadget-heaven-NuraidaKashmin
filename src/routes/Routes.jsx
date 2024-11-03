import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"

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
            <Route path="/" element={<Home></Home>}/>
            <Route path="/statistics" element={<Statistics></Statistics>}/>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}/>

        </Route>
    )
)
export default routes