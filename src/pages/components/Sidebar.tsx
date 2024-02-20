import { Link, NavLink } from "react-router-dom";
import { SideLinks } from "../../helpers";

import { FcPortraitMode, FcImport } from 'react-icons/fc';
import { IoClose } from "react-icons/io5";
import { closeSidebar, useAppDispatch, useAppSelector } from "../../store";
import { useAuthStore } from "../../hooks";

export const Sidebar = () => {

    const { isOpenSidebar } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    const { userSession, logoutUserSession } = useAuthStore();

    const logoutSession = () => {
        logoutUserSession();
    };

    const onCloseSidebar = () => {
        dispatch(closeSidebar())
    };


    return (

        <aside className={`${(isOpenSidebar) ? 'translate-x-0' : 'xl:translate-x-0'} fixed z-30 inset-0 w-72 bg-gray-300 rounded-lg my-2 mx-2 -translate-x-80 border border-gray-400 shadow-lg shadow-gray-700 transition-all duration-500`}>

            <button onClick={onCloseSidebar} className="absolute xl:hidden right-[6px] top-2">
                <IoClose className="text-2xl" />
            </button>

            <div className="flex flex-col justify-between h-full mx-4 font-bold">

                <div className="h-[75%] mt-14">

                    <p className="text-center text-2xl font-black mb-8">Sistema de Registro Civil</p>
                    {(SideLinks[(userSession.isAdmin === 1) ? 'admin' : 'user'].map(link => (
                        <NavLink to={link.to} key={link.id} className={({ isActive }) => `flex flex-row items-center mx-1 my-5 py-2 hover:bg-gray-900 hover:text-white hover:shadow-lg hover:shadow-gray-700 rounded-lg ${(isActive) ? 'bg-gray-900 text-white shadow-lg shadow-gray-700' : ''}`}>
                            <link.icon className="w-[35%] text-3xl" />
                            <p className="">{link.name}</p>
                        </NavLink>
                    )))}
                </div>

                <div className="flex flex-col justify-around items-center  w-full h-[25%] border-t border-gray-800">
                    <p className="self-start font-black">Mas opciones</p>

                    <div className="w-full h-[60%]">
                        <Link to="/profile" className="flex items-center py-2 mx-1 hover:bg-gray-900 hover:text-white hover:shadow-lg hover:shadow-gray-700 rounded-lg">
                            <FcPortraitMode className="w-[35%] text-3xl" />
                            <p className="text-center">Mi perfil</p>
                        </Link>
                        <button type="button" onClick={logoutSession} className="flex items-center hover:bg-red-700 hover:text-white w-full py-2 rounded-lg hover:shadow-lg hover:shadow-red-800 mt-4">
                            <FcImport className="w-[35%] text-3xl" />
                            <p>Cerrar Sesión</p>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};
