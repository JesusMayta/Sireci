import ejemData from '../../data/docs.json';
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface optionsTable {
    tableHead: string[];
};
export const TableView = ({ tableHead }: optionsTable) => {
    return (
        <div className="mt-8 overflow-hidden rounded-xl border border-gray-500 shadow-lg shadow-gray-500">
            <table className="min-w-full bg-white">
                <thead className=" hidden border-b border-gray-900 lg:table-header-group">
                    <tr className="">
                        {(tableHead.map(head => (
                            <td key={head} className="whitespace-normal py-3 text-sm font-semibold text-black text-center bg-gray-100 sm:px-12">{head}</td>
                        )))}
                    </tr>
                </thead>

                <tbody className="lg:border-gray-300">
                    {(ejemData.map(data =>
                        <tr key={data.codigo} className="border-b border-gray-300 hover:scale-95 duration-300">
                            <td className="whitespace-no-wrap ps-7 lg:ps-3 py-1 text-sm text-left lg:text-center">
                                {data.dni}
                                <div className="mt-1 lg:hidden">
                                    <p className="font-normal text-gray-500">{data.nombre}</p>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden text-center py-1 text-sm sm:px-6 lg:table-cell">{data.nombre}</td>

                            <td className="whitespace-no-wrap py-1 px-6 text-right text-sm text-gray-600 lg:text-left">
                                <span className="font-bold">Código: {data.codigo}</span>
                                <div className="flex mt-4 ml-auto items-center rounded-full  bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Editar</div>
                                <div className="flex mt-3 ml-auto items-center rounded-full  bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Eliminar</div>
                            </td>

                            <td className="whitespace-no-wrap hidden text-center py-4 text-sm font-semibold lg:table-cell">
                                <button className="bg-yellow-50 px-3 py-2 rounded-lg">
                                    <FiEdit className="text-yellow-600" />
                                </button>
                                <button className="ms-3 bg-red-50 px-3 py-2 rounded-lg">
                                    <FiTrash2 className="text-red-800" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
