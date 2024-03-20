import { Link, NavLink } from 'react-router-dom';
import { SideLinks } from '../../../helpers';

import { FcPortraitMode, FcImport } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';
import { useAuthStore, useUiStore } from '../../../hooks';

export const Sidebar = () => {

    const { userSession, logoutUserSession } = useAuthStore();
    const { isOpenSidebar, startOpenSidebar } = useUiStore();

    const logoutSession = () => {
        logoutUserSession();
    };

    return (
        <aside className={`${(isOpenSidebar) ? 'translate-x-0' : 'xl:translate-x-0'} fixed z-30 inset-0 w-64 sm:w-72 bg-gray-100 rounded-lg my-2 mx-2 -translate-x-80 border border-gray-400 shadow-lg shadow-gray-700 transition-all duration-500`}>
            <button onClick={() => startOpenSidebar(false)} className="absolute xl:hidden right-[6px] top-2">
                <IoClose className="text-2xl" />
            </button>

            <div className="flex flex-col justify-between h-full mx-4 font-bold">
                <div className="h-[75%] mt-14">
                    <h2 className="text-center text-2xl font-black mb-8">Sistema de Registro Civil</h2>
                    {(SideLinks[(userSession.isAdmin === 1) ? 'admin' : 'user'].map(href => (
                        <NavLink onClick={() => startOpenSidebar(false)} to={href.to} key={href.id} className={({ isActive }) => `flex flex-row items-center mx-1 my-5 py-2 hover:bg-gray-900 hover:text-white hover:shadow-lg hover:shadow-gray-700 rounded-lg ${(isActive) ? 'bg-gray-900 text-white shadow-lg shadow-gray-700' : ''}`}>
                            <href.icon className="w-[35%] text-xl sm:text-3xl" />
                            <p className="text-sm sm:text-base">{href.name}</p>
                        </NavLink>
                    )))}
                </div>

                <div className="flex flex-col justify-around items-center  w-full h-[25%] border-t border-gray-800">
                    <p className="self-start font-black">Mas opciones</p>
                    <div className="w-full h-[60%]">
                        <Link to="/profile" className="flex items-center py-2 mx-1 hover:bg-gray-900 hover:text-white hover:shadow-lg hover:shadow-gray-700 rounded-lg">
                            <FcPortraitMode className="w-[35%] text-xl sm:text-3xl" />
                            <p className="text-center text-sm sm:text-base">Mi perfil</p>
                        </Link>
                        <button type="button" onClick={logoutSession} className="flex items-center hover:bg-red-700 hover:text-white w-full py-2 rounded-lg hover:shadow-lg hover:shadow-red-800 mt-4">
                            <FcImport className="w-[35%] text-xl sm:text-3xl" />
                            <p className="text-sm sm:text-base">Cerrar Sesión</p>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};
