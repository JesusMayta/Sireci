import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { ContentTableDeath } from '../../../helpers';
import { usePeopleStore, useUiStore } from '../../../hooks';
import { LoadComponent } from '../../components';
import { useEffect } from "react";
import { useDeathDocsStore } from '../../../hooks';
// import { ModalDocument } from "../views/ModalDocument";

const tableHead = ['DNI', 'Nombres y apellidos', 'Código', 'Acción'];

export const TableDeathDocs = () => {

    const { textFindPeople } = usePeopleStore();
    const { isLoadingDocuments, deathCertificates, getAllCertificatesDeath } = useDeathDocsStore();
    const { startOpenDeleteModal, startOpenEditModal } = useUiStore();

    useEffect(() => {
        getAllCertificatesDeath();
    }, []);

    if (isLoadingDocuments) {
        return <LoadComponent />
    };

    const filterPeople = (textFindPeople === '')
        ? deathCertificates
        : deathCertificates.filter((person: ContentTableDeath) => person.person_per_id.per_names.toLowerCase().replace(/\s+/g, '').includes(textFindPeople.toLowerCase().replace(/\s+/g, '')) ||
            (person.person_per_id.per_first_lastname.toLowerCase().replace(/\s+/g, '').includes(textFindPeople.toLowerCase().replace(/\s+/g, ''))) ||
            (person.person_per_id.per_document_number.replace(/\s+/g, '').includes(textFindPeople.replace(/\s+/g, ''))));

    const onUpdateCertificate = (id: string) => {
        startOpenEditModal();
    };

    const onDeleteCertificate = (id: string) => {

    };

    return (
        <div className="mt-8 h-full">
            {(filterPeople.length === 0) ? (
                <div className="flex justify-center mt-32 h-full text-3xl font-semibold">No hay coincidencias de busqueda</div>) :
                (<table className="min-w-full bg-gray-100 border border-gray-400 shadow-md shadow-gray-500 h-fit">
                    <thead className="hidden lg:table-header-group">
                        <tr>
                            {(tableHead.map(head => (
                                <th key={head} className="whitespace-normal py-3 text-sm font-semibold text-white text-center bg-gray-900 sm:px-12">{head}</th>
                            )))}
                        </tr>
                    </thead>

                    <tbody>
                        {(filterPeople.map((data: ContentTableDeath) =>
                            <tr key={data._id} className="border-b border-gray-400">
                                <td className="ps-7 lg:ps-3 py-1 text-sm text-left lg:text-center text-black">
                                    {data.person_per_id.per_document_number}
                                    <div className="mt-1 lg:hidden">
                                        <p className="font-semibold">{data.person_per_id.per_names}</p>
                                    </div>
                                </td>

                                <td className="hidden text-center py-1 text-sm sm:px-6 lg:table-cell">{`${data.person_per_id.per_names} ${data.person_per_id.per_first_lastname}`}</td>

                                <td className="py-3 lg:py-2 px-6 text-sm text-gray-600">
                                    <p className="text-right lg:text-center"><span className="lg:hidden font-semibold">Código:</span> {data.dea_book}</p>
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
                                    <button type="button" className="bg-yellow-200 px-3 py-2 rounded-lg" onClick={() => onUpdateCertificate(data._id)}>
                                        <FiEdit className="text-yellow-800" />
                                    </button>
                                    <button className="ms-3 bg-red-200 px-3 py-2 rounded-lg" onClick={startOpenDeleteModal}>
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