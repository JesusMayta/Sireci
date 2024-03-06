import ejemData from '../../../data/docs.json';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDocumentsStore, usePeopleStore } from '../../../hooks';
import { LoadComponent } from '..';
import { ContentTableBirth } from '../../../helpers';

interface OptionsTable {
    tableHead: string[];
    contentTable: ContentTableBirth[];
};

export const ContentTable = ({ tableHead, contentTable }: OptionsTable) => {

    const { isLoadingDocuments } = useDocumentsStore();
    const { textFindPeople } = usePeopleStore();

    if (isLoadingDocuments) {
        return <LoadComponent />
    };

    const filterPeople = (textFindPeople === '')
        ? contentTable
        : contentTable.filter((person: ContentTableBirth) => person.person_per_id.per_names.toLowerCase().replace(/\s+/g, '').includes(textFindPeople.toLowerCase().replace(/\s+/g, '')) ||
            (person.person_per_id.per_first_lastname.toLowerCase().replace(/\s+/g, '').includes(textFindPeople.toLowerCase().replace(/\s+/g, ''))) ||
            (person.person_per_id.per_document.replace(/\s+/g, '').includes(textFindPeople.replace(/\s+/g, ''))))

    const handleopenModal = () => {

    };

    return (
        <div className="mt-8 h-full">
            {(filterPeople.length === 0) ? (
                <div className="flex justify-center mt-32 h-full text-2xl font-semibold">No hay coincidencias de busqueda</div>)
                : (
                    <table className="min-w-full bg-gray-100 border border-gray-400 shadow-md shadow-gray-500 h-fit">
                        <thead className="hidden border-b-2 border-gray-600 lg:table-header-group">
                            <tr>
                                {(tableHead.map(head => (
                                    <th key={head} className="whitespace-normal py-3 text-sm font-semibold text-white text-center bg-gray-900 sm:px-12">{head}</th>
                                )))}
                            </tr>
                        </thead>

                        <tbody>
                            {(filterPeople.map((data: ContentTableBirth) =>
                                <tr key={data._id} className="border-b border-gray-400 sm:hover:scale-95 duration-300">
                                    <td className="ps-7 lg:ps-3 py-1 text-sm text-left lg:text-center text-black">
                                        {data.person_per_id.per_document}
                                        <div className="mt-1 lg:hidden">
                                            <p className="font-semibold">{data.birth_father}</p>
                                        </div>
                                    </td>

                                    <td className="hidden text-center py-1 text-sm sm:px-6 lg:table-cell">{`${data.person_per_id.per_names} ${data.person_per_id.per_first_lastname}`}</td>

                                    <td className="py-3 lg:py-2 px-6 text-sm text-gray-600">
                                        <p className="text-right lg:text-center"><span className="lg:hidden font-semibold">Código:</span> {data.birth_book}</p>
                                        <div className="flex lg:hidden flex-col gap-y-3 items-end w-full">
                                            <button className="flex items-center justify-center gap-x-2 mt-3 w-[30%] rounded-xl bg-yellow-500 py-[7px] px-3 text-xs font-medium text-white">
                                                <FiEdit />
                                                Editar
                                            </button>
                                            <button className="flex items-center justify-center w-2/5 rounded-xl  bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white">
                                                <FiTrash2 />
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>

                                    <td className="hidden text-center py-4 text-sm font-semibold lg:table-cell">
                                        <button type="button" onClick={handleopenModal} className="bg-yellow-200 px-3 py-2 rounded-lg">
                                            <FiEdit className="text-yellow-800" />
                                        </button>
                                        <button className="ms-3 bg-red-200 px-3 py-2 rounded-lg">
                                            <FiTrash2 className="text-red-800" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                )}
        </div>
    );
};
