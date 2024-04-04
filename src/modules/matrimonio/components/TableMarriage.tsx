import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useMarriageDocsStore, usePeopleStore, useUiStore } from '../../../hooks';
import { ContentTableMarriage, FilterPeopleMarriage } from '../../../helpers';
import { DeleteModal, LoadComponent, LoadingModal } from '../../components';
import { useEffect, useState } from "react";

const tableHead = ['Marido', 'Mujer', 'Fecha de registro', 'Libro', 'Acción'];

export const TableMarriage = () => {

    const { textFindPeople } = usePeopleStore();
    const { getCertificateById, marriageDocuments, getAllCertificatesMarriage, isLoadingDocuments, successMessage, isUpdateDocument } = useMarriageDocsStore();
    const { startOpenEditModal, startOpenDeleteModal, isOpenDeleteModal, textToSort } = useUiStore();

    const [optionsToDelete, setOptionsToDelete] = useState({ id: '', option: '' });

    useEffect(() => {
        getAllCertificatesMarriage();
    }, [successMessage]);

    if (isLoadingDocuments) {
        return <LoadComponent />
    };

    const openEditModal = async (id: string) => {
        const isValid = await getCertificateById(id);
        if (isValid) {
            startOpenEditModal(true);
        };
    };

    const onDeleteDoc = (id: string) => {
        setOptionsToDelete({ id, option: 'marriage' });
        startOpenDeleteModal(true);
    };

    return (
        <div className="mt-8 h-full">
            {(FilterPeopleMarriage(textFindPeople, marriageDocuments, textToSort).length === 0) ? (
                <div className="flex justify-center mt-32 h-full text-2xl font-semibold">No se han encontrado registros</div>)
                : (
                    <div className="mt-6 overflow-hidden rounded-xl bg-white px-1 shadow-md shadow-gray-900 lg:px-3 select-none">
                        <table className="min-w-full h-fit">
                            <thead className="hidden border-b-2 border-gray-950 lg:table-header-group">
                                <tr className="whitespace-normal font-semibold text-black text-center">
                                    {(tableHead.map(head => (
                                        <th key={head} className="py-3 text-sm sm:px-3">{head}</th>
                                    )))}
                                </tr>
                            </thead>

                            <tbody className="bg-white lg:border-gray-300">
                                {(FilterPeopleMarriage(textFindPeople, marriageDocuments, textToSort).map((data: ContentTableMarriage) =>
                                    <tr key={data._id} className="border-b border-gray-400 text-black hover:scale-95 duration-300">
                                        <td className="ps-3 py-1 text-xs text-left lg:text-center text-black font-semibold sm:px-3">
                                            <p className="lg:hidden font-normal me-1 mb-1">Esposo:</p>
                                            {`${data.mar_husband.per_names} ${data.mar_husband.per_first_lastname}`}
                                            <div className="lg:hidden">
                                                <p className="font-normal me-1 mb-1 mt-2">Esposa:</p>
                                                {`${data.mar_wife.per_names} ${data.mar_wife.per_first_lastname}`}
                                            </div>
                                            <div className="mt-1 lg:hidden">
                                                <p className="font-semibold ">{data.mar_husband.per_names}</p>
                                            </div>
                                        </td>

                                        <td className="hidden text-center py-1 text-xs sm:px-6 lg:table-cell font-semibold">{`${data.mar_wife.per_names} ${data.mar_wife.per_first_lastname}`}</td>
                                        <td className="hidden text-center py-1 text-xs sm:px-6 lg:table-cell font-semibold">{new Date(data.mar_date).toISOString().substring(0, 10)}</td>

                                        <td className="py-3 lg:py-2 px-6 text-xs">
                                            <p className="text-right lg:text-center"><span className="lg:hidden font-semibold me-1">Libro:</span> {data.mar_book}</p>
                                            <div className="flex lg:hidden flex-col gap-y-3 items-end w-full mt-3">
                                                <button
                                                    onClick={() => openEditModal(data._id)}
                                                    className="flex justify-center items-center w-[70%] rounded-xl bg-yellow-400 py-2 px-3 text-xs font-medium text-black border border-yellow-800 outline-none">
                                                    <FiEdit className="text-lg me-2 sm:me-3" />
                                                    Editar
                                                </button>

                                                <button
                                                    onClick={() => onDeleteDoc(data._id)}
                                                    className="flex justify-center items-center w-[70%] rounded-xl bg-red-400 py-2 px-3 text-xs font-medium text-white border border-red-800 outline-none">
                                                    <FiTrash2 className="text-lg me-1" />
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>

                                        <td className="hidden text-center py-4 text-sm font-semibold lg:table-cell">
                                            <button type="button" className="bg-yellow-200 px-3 py-2 rounded-lg" onClick={() => openEditModal(data._id)} >
                                                <FiEdit className="text-yellow-800" />
                                            </button>
                                            <button className="ms-3 bg-red-200 px-3 py-2 rounded-lg" onClick={() => onDeleteDoc(data._id)}>
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