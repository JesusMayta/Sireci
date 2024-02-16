import ejemData from '../../data/docs.json';

interface optionsTable {
    tableHead: string[];
};
export const TableView = ({ tableHead }: optionsTable) => {
    return (
        <div className="shadow-lg shadow-gray-600 rounded-lg overflow-x-auto">
            <table className="min-w-full">
                <thead className="bg-gray-900 border-b-2 border-gray-200 text-xs font-semibold text-gray-800 uppercase text-center">
                    <tr>
                        {(tableHead.map(head => (
                            <th key={head} className="px-1 py-3 tracking-wider">
                                {head}
                            </th>
                        )))}
                    </tr>
                </thead>
                <tbody>
                    {
                        (ejemData.map(object => (
                            <tr key={object.codigo} className="text-center">
                                <td className="px-1 py-3 border border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-nowrap ml-3">{object.dni}</p>
                                </td>

                                <td className="px-1 py-3 border border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-nowrap">{object.nombre}</p>
                                </td>

                                <td className="px-1 py-3 border border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-nowrap">{object.codigo}</p>
                                </td>

                                <td className="flex items-center justify-center gap-x-3 px-0 py-3 border border-gray-200 bg-white text-sm text-white">
                                    <button className="bg-yellow-500 py-1 px-2 rounded-md">Editar</button>
                                    <button className="bg-red-700 py-1 px-2 rounded-md">Eliminar</button>
                                </td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </div>
    );
};
