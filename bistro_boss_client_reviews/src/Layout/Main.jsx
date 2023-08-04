import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {

    const location = useLocation();
    const noHeaderFooterLogin = location.pathname.includes('login');
    const noHeaderFooterSignUp = location.pathname.includes('signup');
    return (
        <div>
            {noHeaderFooterLogin || noHeaderFooterSignUp || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooterLogin || noHeaderFooterSignUp || <Footer></Footer>}
        </div>
    );
};

export default Main;