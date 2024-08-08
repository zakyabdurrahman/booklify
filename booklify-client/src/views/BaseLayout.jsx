
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function BaseLayout() {
    

    return (
        <>
           <Navbar/>
           <Outlet/>
        </>
    )
}

export default BaseLayout
