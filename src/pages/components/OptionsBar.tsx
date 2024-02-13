import { MdAdd, MdOutlineSearch } from "react-icons/md";
export const OptionsBar = () => {


    return (
        <div className="flex items-center justify-between px-4 sm:px-12 pb-7 h-16 mt-8 border-b border-gray-400">

            <div className="flex gap-x-4">
                <input className="w-40 md:w-56 py-2 rounded-lg focus:outline-none px-3" placeholder="dni, nombres, codigo..." />
                <button className="flex items-center bg-blue-800 text-white rounded-lg px-2 gap-x-2 font-semibold shadow-md shadow-blue-800">
                    <MdOutlineSearch className="text-lg" />
                    <span className="hidden md:inline">Buscar</span>
                </button>
            </div>

            <button
                // onClick={}
                className="flex items-center bg-teal-800 py-2 px-3 text-white rounded-full sm:rounded-lg gap-x-1 shadow-md shadow-teal-800 font-semibold"
            >
                <MdAdd className="text-xl" />
                <span className="hidden sm:inline">Agregar acta</span>
            </button>

        </div>
    );
};
