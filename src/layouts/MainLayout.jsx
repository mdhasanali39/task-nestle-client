import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-primary-bg pb-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer  */}
            <Footer/>
        </div>
    );
};

export default MainLayout;