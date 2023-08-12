import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarDays, faCartShopping, faWallet } from '@fortawesome/free-solid-svg-icons';
import useCart from "../hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="flex">
            <div className="bg-[#D1A054] w-4/12 h-[150vh] flex flex-col">
                <div className="text-xl">
                    <div className="sideBarMenu mt-20 list-none pl-5 uppercase grid gap-y-3">
                        <li>
                            <NavLink to="/dashboard/userhome" className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faHome} />user home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/reservations" className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCalendarDays} />reservations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/history" className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faWallet} />payment history
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/mycart" className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCartShopping} />my cart
                                <div className="ml-2 badge badge-secondary">+{cart?.length || 0}</div>
                            </NavLink>
                        </li>
                    </div>
                </div>
                <div className="divider bg-white h-[2px]"></div>
            </div>
            <div className="bg-gray-50 w-full px-20">
                <div className="mt-20">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;