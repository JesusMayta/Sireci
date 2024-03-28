import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { ContentTableDeath, FilterPeopleDeath } from '../../../helpers';
import { usePeopleStore, useUiStore } from '../../../hooks';
import { DeleteModal, LoadComponent, LoadingModal } from '../../components';
import { useEffect, useState } from "react";
import { useDeathDocsStore } from '../../../hooks';
// import { ModalDocument } from "../views/ModalDocument";

const tableHead = ['DNI', 'Nombres y apellidos', 'Libro', 'Defunción', 'Acción'];

export const TableDeathDocs = () => {

    const { textFindPeople } = usePeopleStore();
    const { isLoadingDocuments, deathCertificates, getAllCertificatesDeath, getCertificateById, successMessage, isUpdateDocument } = useDeathDocsStore();
    const { startOpenDeleteModal, startOpenEditModal, isOpenDeleteModal } = useUiStore();

    const [optionsToDelete, setOptionsToDelete] = useState({ id: '', option: '' });

    useEffect(() => {
        getAllCertificatesDeath();
    }, [successMessage]);

    if (isLoadingDocuments) {
        return <LoadComponent />
    };

    const onUpdateCertificate = async (id: string) => {
        const isValid = await getCertificateById(id);
        if (isValid) {
            startOpenEditModal(true);
        };
    };

    const onDeleteCertificate = (id: string) => {
        setOptionsToDelete({ id, option: 'death' });
        startOpenDeleteModal(true);
    };

    return (
        <div className="mt-8 h-full">
            {(FilterPeopleDeath(textFindPeople, deathCertificates).length === 0) ? (
                <div className="flex justify-center mt-32 h-full text-3xl font-semibold">No hay coincidencias de busqueda</div>) :
                (
                    <div className="mt-6 overflow-hidden rounded-xl bg-white px-2 shadow-md shadow-gray-900 lg:px-3 select-none">
                        <table className="min-w-full h-fit">
                            <thead className="hidden border-b-2 border-gray-950 lg:table-header-group">
                                <tr className="whitespace-normal font-semibold text-black text-center">
                                    {(tableHead.map(head => (
                                        <th key={head} className="py-3 text-sm sm:px-3">{head}</th>
                                    )))}
                                </tr>
                            </thead>

                            <tbody className="bg-white lg:border-gray-300">
                                {(FilterPeopleDeath(textFindPeople, deathCertificates).map((data: ContentTableDeath) =>
                                    <tr key={data._id} className="border-b border-gray-400 text-black hover:scale-95 duration-300">
                                        <td className="ps-1 py-1 text-xs text-left lg:text-center text-black sm:px-3">
                                            <p className="lg:hidden font-normal me-1 mb-1">DNI:</p>
                                            <p className="font-semibold">{data.person_per_id.per_document_number}</p>
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-semibold mt-1">{`${data.person_per_id.per_names} ${data.person_per_id.per_first_lastname}`}</p>
                                                <p className="mt-2">+ {new Date(data.dea_date).toISOString().substring(0, 10)}</p>
                                            </div>
                                        </td>

                                        <td className="hidden text-center py-1 text-xs sm:px-6 lg:table-cell font-semibold">{`${data.person_per_id.per_names} ${data.person_per_id.per_first_lastname}`}</td>

                                        <td className="py-3 lg:py-2 px-3 text-xs">
                                            <p className="text-right lg:text-center"><span className="lg:hidden font-semibold me-1">Libro:</span> {data.dea_book}</p>
                                            <div className="flex lg:hidden flex-col gap-y-3 items-end w-full mt-3">
                                                <button
                                                    onClick={() => onUpdateCertificate(data._id)}
                                                    className="flex items-center w-[70%] rounded-xl bg-yellow-400 py-2 px-3 text-xs font-medium text-black border border-yellow-800 outline-none">
                                                    <FiEdit className="text-lg me-2 sm:me-3" />
                                                    Editar
                                                </button>
                                                <button
                                                    onClick={() => onDeleteCertificate(data._id)}
                                                    className="flex items-center w-[70%] rounded-xl bg-red-400 py-2 px-3 text-xs font-medium text-white border border-red-800 outline-none">
                                                    <FiTrash2 className="me-1" />
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>

                                        <td className="hidden text-center py-1 text-xs sm:px-6 lg:table-cell">{new Date(data.dea_date).toISOString().substring(0, 10)}</td>

                                        <td className="hidden text-center py-4 text-sm font-semibold lg:table-cell">
                                            <button type="button" className="bg-yellow-200 px-3 py-2 rounded-lg" onClick={() => onUpdateCertificate(data._id)}>
                                                <FiEdit className="text-yellow-800" />
                                            </button>
                                            <button className="ms-3 bg-red-200 px-3 py-2 rounded-lg" onClick={() => onDeleteCertificate(data._id)}>
                                                <FiTrash2 className="text-red-800" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            {(isOpenDeleteModal) && <DeleteModal toDelete={optionsToDelete} />}
            {(isUpdateDocument) && <LoadingModal />}
        </div>
    );
};