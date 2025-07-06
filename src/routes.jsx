import { createBrowserRouter } from "react-router";
import Home from "./js/components/Home";
import RenderContact from "./js/components/RenderContact";
import Contact from "./js/components/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home, 
        children: [
            {index: true, Component: RenderContact},
            {path:"/newcontact", Component: Contact}
        ]
    }
])  


export default router;