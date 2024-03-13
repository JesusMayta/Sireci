import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDocumentsStore, usePeopleStore, useUiStore } from '../../../hooks';
import { ContentTableMarriage } from '../../../helpers';
import { LoadComponent } from '../../components';
import { useEffect } from "react";
// import { ModalDocument } from "../views/ModalDocument";

const tableHead = ['Marido', 'Mujer', 'Código', 'Acción'];

export const TableMarriage = () => {

    const { textFindPeople } = usePeopleStore();
    const { startOpenEditModal } = useUiStore();
    const { isLoadingDocuments, marriageDocuments, getAllCertificatesMarriage } = useDocumentsStore();

    useEffect(() => {
        getAllCertificatesMarriage();
    }, []);

    if (isLoadingDocuments) {
        return <LoadComponent />
    };

    const filterPeople = (textFindPeople === '')
        ? marriageDocuments
        : marriageDocuments.filter((person: ContentTableMarriage) => person.mar_husband.per_names.toLowerCase().replace(/\s+/g, '').includes(textFindPeople.toLowerCase().replace(/\s+/g, '')) ||
            (person.mar_husband.per_first_lastname.toLowerCase().replace(/\s+/g, '').includes(textFindPeople.toLowerCase().replace(/\s+/g, ''))) ||
            (person.mar_wife.per_names.replace(/\s+/g, '').includes(textFindPeople.replace(/\s+/g, ''))))

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
                            {(filterPeople.map((data: ContentTableMarriage) =>
                                <tr key={data._id} className="border-b border-gray-400">
                                    <td className="ps-7 lg:ps-3 py-1 text-sm text-left lg:text-center text-black">
                                        {`${data.mar_husband.per_names} ${data.mar_husband.per_first_lastname}`}
                                        <div className="mt-1 lg:hidden">
                                            <p className="font-semibold">{data.mar_husband.per_names}</p>
                                        </div>
                                    </td>

                                    <td className="hidden text-center py-1 text-sm sm:px-6 lg:table-cell">{`${data.mar_wife.per_names} ${data.mar_wife.per_first_lastname}`}</td>

                                    <td className="py-3 lg:py-2 px-6 text-sm text-gray-600">
                                        <p className="text-right lg:text-center"><span className="lg:hidden font-semibold">Código:</span> {data.mar_book}</p>
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
                                        <button type="button" className="bg-yellow-200 px-3 py-2 rounded-lg" onClick={startOpenEditModal} >
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