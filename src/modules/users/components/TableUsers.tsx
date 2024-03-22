import { useUserStore } from "../../../hooks";
import { useEffect } from "react";
import { LoadComponent } from "../../components";

interface User {
    user_name: string;
    user_username: string;
    user_address: string;
    user_email: string;
    user_first_lastname: string;
    user_is_admin: number
};

const tableHead = ['Nombres', 'Apellidos', ' E-mail', ' Username', 'Dirección', '¿Es administrador?'];

export const TableUsers = () => {

    const { users, getAllUsers, isLoadingUsers } = useUserStore();

    useEffect(() => {
        getAllUsers();
    }, [])

    if (isLoadingUsers) {
        return <LoadComponent />
    };

    return (
        <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow-md shadow-gray-900 lg:px-3 select-none">
            <table className="min-w-full">
                <thead className="hidden border-b-2 border-gray-950 lg:table-header-group">
                    <tr className="font-semibold text-black text-center">
                        {(tableHead.map(head => (
                            <th key={head} className="py-3 text-sm sm:px-3">{head}</th>
                        )))}
                    </tr>
                </thead>

                <tbody className="bg-white lg:border-gray-300">
                    {(users.map((user: User) => (
                        <tr key={user.user_email} className="border-b border-gray-400 text-black hover:scale-95 duration-300">
                            <td className="py-4 text-left text-sm font-semibold sm:px-3 lg:text-left border-r border-gray-400">
                                <p className="capitalize hidden lg:block">{user.user_name}</p>
                                <div className="mt-[2px] flex flex-col text-xs font-medium lg:hidden">
                                    <p className="capitalize font-semibold">{`${user.user_name}  ${user.user_first_lastname}`}</p>
                                    <p className="font-medium mt-2">Username: <span className="font-semibold">{user.user_username}</span></p>
                                    <p className="mt-2">Dirección: <span className="font-semibold break-words">{user.user_address}</span></p>
                                </div>
                            </td>
                            <td className="hidden py-3 text-xs text-center sm:px-3 lg:table-cell font-semibold">{user.user_first_lastname}</td>
                            <td className="hidden py-3 text-xs text-center sm:px-3 lg:table-cell">{user.user_email}</td>
                            <td className="hidden py-3 text-xs text-right sm:px-3 lg:table-cell lg:text-center">{user.user_username}</td>
                            <td className="hidden py-3 text-xs text-right sm:px-3 lg:table-cell lg:text-center">{user.user_address}</td>
                            <td className="hidden py-4 text-center text-xs sm:px-3 lg:table-cell lg:text-center font-semibold">{(user.user_is_admin === 1) ? 'Administrador' : 'Usuario'}</td>

                            <td className="py-3 lg:py-2 px-6 text-xs lg:hidden">
                                <p>Rol: <span className="font-semibold">{(user.user_is_admin === 1) ? 'Administrador' : 'Usuario'}</span></p>
                                <p className="mt-2">Email: </p>
                                <span className="font-semibold">{user.user_email}</span>
                            </td>

                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );
};