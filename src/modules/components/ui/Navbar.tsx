import { IoMenuSharp } from 'react-icons/io5';

import { useAuthStore, useUiStore } from '../../../hooks';


export const Navbar = () => {

    const { userSession } = useAuthStore();
    const { onOpenSideBar } = useUiStore();

    const photoUser = "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";

    return (
        <nav className="sticky top-1 z-10 h-16 py-2 bg-gray-900 rounded-lg text-white shadow-lg shadow-gray-700">
            <div className="h-full flex flex-row justify-between items-center mx-12">
                <div className="flex items-center gap-x-10 w-1/2">

                    {/* Menu sidebar */}
                    <button className="inline xl:hidden" onClick={onOpenSideBar}>
                        <IoMenuSharp className="text-2xl sm:text-3xl" />
                    </button>

                    <p className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold">SIRECI</p>
                </div>

                <figure className="flex items-center gap-2">
                    <span className="hidden sm:inline me-3">{userSession?.name}</span>
                    <img src={photoUser} alt="" className="h-full w-9 md:w-11 rounded-full" />
                </figure>
            </div>
        </nav>
    );
};
