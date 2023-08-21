import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarDays, faCartShopping, faWallet, faUtensils, faBars, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import useCart from "../hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart();
    const isAdmin = true;

    return (
        <div className="flex">
            <div className="bg-[#D1A054] w-4/12 h-[150vh] flex flex-col">
                <div className="sideBarMenu mt-20 list-none pl-5 uppercase grid gap-y-3 text-xl">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminhome" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faHome} />admin home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/additems" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faUtensils} />add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageitems" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faBars} />manage items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/managebooking" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faBook} />manage booking
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faUsers} />all users
                                </NavLink>
                            </li>
                        </> : <>
                            <li>
                                <NavLink to="/dashboard/userhome" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faHome} />user home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservations" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faCalendarDays} />reservations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/history" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faWallet} />payment history
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mycart" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="w-5 h-5" icon={faCartShopping} />my cart
                                    <div className="ml-2 badge badge-secondary">+{cart?.length || 0}</div>
                                </NavLink>
                            </li>
                        </>
                    }
                </div>
                <div className="divider bg-white h-[2px]"></div>
                <div className="sideBarMenu mt-5 list-none pl-5 uppercase grid gap-y-3 text-xl">
                    <li>
                        <NavLink to="/" className="flex gap-2 items-center">
                            <FontAwesomeIcon className="w-5 h-5" icon={faHome} />home
                        </NavLink>
                    </li>
                </div>
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