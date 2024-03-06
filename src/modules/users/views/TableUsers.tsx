import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useUserStore } from "../../../hooks";
import { useEffect } from "react";

interface User {
    user_name: string;
    user_username: string;
    user_address: string;
    user_email: string;
    user_first_lastname: string;
    user_is_admin: number
};

const tableHead = ['Nombres', 'Apellidos', ' E-mail', ' Username', 'Dirección', '¿Es administrador?', 'Acción'];

export const TableUsers = () => {

    const { users, getAllUsers } = useUserStore();

    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow-md shadow-gray-900 lg:px-3 select-none">
            <table className="min-w-full">
                <thead className="hidden border-b-2 border-gray-950 lg:table-header-group">
                    <tr className="whitespace-normal font-semibold text-black text-center">
                        {(tableHead.map(head => (
                            <th key={head} className="py-3 text-sm sm:px-3">{head}</th>
                        )))}
                    </tr>
                </thead>

                <tbody className="bg-white lg:border-gray-300">
                    {(users.map((user: User) => (
                        <tr key={user.user_email} className="border-b border-gray-400 text-black hover:scale-95 duration-300">
                            <td className="whitespace-no-wrap py-4 text-left text-sm font-semibold sm:px-3 lg:text-left">
                                <p className="capitalize">{user.user_name}</p>
                                <div className="mt-[2px] flex flex-col text-xs font-medium lg:hidden">
                                    <div>
                                        {user.user_username}
                                    </div>
                                    <div className="flex items-center">

                                        Desktop Computer
                                    </div>
                                    <div className="">24 x 10 x 5 cm</div>
                                    <div className="flex items-center">

                                        1 Kg
                                    </div>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden py-3 text-xs text-center sm:px-3 lg:table-cell">{user.user_first_lastname}</td>

                            <td className="whitespace-no-wrap hidden py-3 text-xs text-center sm:px-3 lg:table-cell">{user.user_email}</td>
                            <td className="whitespace-no-wrap hidden py-3 text-xs text-right sm:px-3 lg:table-cell lg:text-left">{user.user_username}</td>
                            <td className="whitespace-no-wrap hidden py-3 text-xs text-right sm:px-3 lg:table-cell lg:text-center">{user.user_address}</td>
                            <td className="whitespace-no-wrap hidden py-4 text-center text-xs sm:px-3 lg:table-cell lg:text-center">{(user.user_is_admin === 1) ? 'Administrador' : 'Usuario'}</td>
                            {/* <span className="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-center text-xs text-blue-800 lg:hidden">Pending</span> */}

                            <td className="whitespace-no-wrap hidden py-4 text-xs font-normal sm:px-3 lg:table-cell">
                                <button className="bg-yellow-50 px-3 py-2 rounded-lg">
                                    <FiEdit className="text-yellow-600" />
                                </button>
                                <button className="ms-3 bg-red-50 px-3 py-2 rounded-lg">
                                    <FiTrash2 className="text-red-800" />
                                </button>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );
};