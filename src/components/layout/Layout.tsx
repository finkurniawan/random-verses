import Navbar from "../layout/NavBar";
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;