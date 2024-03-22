import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { useBirthDocsStore, usePeopleStore, useUiStore } from '../../../hooks';
import { ContentTableBirth, FilterPeopleBirth } from '../../../helpers';
import { DeleteModal, LoadComponent, LoadingModal } from '../../components';

export const TableBirthDocuments = () => {

    const { textFindPeople } = usePeopleStore();
    const { isLoadingDocuments, birthDocuments, getAllCertificatesBirth, successMessage, getCertificateBirthById, isUpdateDocument } = useBirthDocsStore();
    const { startOpenEditModal, isOpenDeleteModal, startOpenDeleteModal } = useUiStore();

    const [optionsToDelete, setoptionsToDelete] = useState({ id: '', option: '' });

    useEffect(() => {
        getAllCertificatesBirth();
    }, [successMessage]);

    if (isLoadingDocuments) {
        return <LoadComponent />
    };

    const openEditModal = async (id: string) => {
        const isCorrect = await getCertificateBirthById(id);
        if (isCorrect) {
            startOpenEditModal(true);
        };
    };

    const openDeleteModal = (id: string) => {
        setoptionsToDelete({ id, option: 'birth' });
        startOpenDeleteModal(true);
    };

    return (
        <div className="mt-10 h-full">
            {(FilterPeopleBirth(textFindPeople, birthDocuments).length === 0) ? (
                <div className="flex justify-center mt-32 h-full text-2xl font-semibold">No hay coincidencias de busqueda</div>)
                : (
                    <div className="overflow-hidden rounded-xl bg-white px-3 shadow-md shadow-gray-900 lg:px-3 select-none">
                        <table className="min-w-full h-fit">
                            <thead className="hidden border-b-2 border-gray-950 lg:table-header-group">
                                <tr className="whitespace-normal font-semibold text-black text-center">

                                    {(['DNI', 'Nombres', 'Apellidos', 'Libro', 'Nacimiento', 'Acción'].map(head => (
                                        <th key={head} className="py-3 text-sm sm:px-3">{head}</th>
                                    )))}
                                </tr>
                            </thead>

                            <tbody className="bg-white lg:border-gray-300">
                                {(FilterPeopleBirth(textFindPeople, birthDocuments).map((data: ContentTableBirth) =>
                                    <tr key={data._id} className="border-b border-gray-400 text-black hover:scale-95 duration-300">
                                        <td className="ps-3 py-1 text-xs text-left lg:text-center text-black font-semibold sm:px-3">
                                            <span className="lg:hidden font-normal me-1">DNI:</span><span>{data.person_per_id.per_document_number}</span>
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-semibold">{`${data.person_per_id.per_names} ${data.person_per_id.per_first_lastname}`}</p>
                                                <p className="text-xs mt-1">Nacimiento:</p>
                                                <p className="font-light mt-1">{new Date(data.birth_date).toISOString().substring(0, 10)}</p>
                                            </div>
                                        </td>

                                        <td className="hidden text-center py-1 text-xs sm:px-6 lg:table-cell font-semibold">{data.person_per_id.per_names}</td>
                                        <td className="hidden text-center py-1 text-xs sm:px-6 lg:table-cell font-semibold">{data.person_per_id.per_first_lastname}</td>

                                        <td className="py-3 lg:py-2 px-6 text-xs">
                                            <p className="text-right lg:text-center"><span className="lg:hidden font-semibold me-1">Libro:</span> {data.birth_book}</p>
                                            <div className="flex lg:hidden flex-col gap-y-3 items-end w-full mt-3">
                                                <button
                                                    onClick={() => openEditModal(data._id)}
                                                    className="flex items-center w-[70%] rounded-xl bg-yellow-400 py-2 px-3 text-xs font-medium text-black border border-yellow-800 outline-none">
                                                    <FiEdit className="text-lg me-3" />
                                                    Editar
                                                </button>
                                                <button
                                                    onClick={() => openDeleteModal(data._id)}
                                                    className="flex items-center w-[70%] rounded-xl bg-red-400 py-2 px-3 text-xs font-medium text-white border border-red-800 outline-none">
                                                    <FiTrash2 className="text-lg me-1" />
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>
                                        <td className="hidden text-center py-1 text-xs sm:px-6 lg:table-cell">{new Date(data.birth_date).toISOString().substring(0, 10)}</td>

                                        <td className="hidden text-center py-4 text-sm font-semibold lg:table-cell">
                                            <button type="button" onClick={() => openEditModal(data._id)} className="bg-yellow-200 px-3 py-2 rounded-lg">
                                                <FiEdit className="text-yellow-800" />
                                            </button>
                                            <button className="ms-3 bg-red-200 px-3 py-2 rounded-lg" onClick={() => openDeleteModal(data._id)}>
                                                <FiTrash2 className="text-red-800" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            {(isUpdateDocument) && <LoadingModal />}
            {(isOpenDeleteModal) && <DeleteModal toDelete={optionsToDelete} />}
        </div>
    );
};
