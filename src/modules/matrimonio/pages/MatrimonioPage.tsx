import { useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';

import { useDocumentsStore, useUiStore } from '../../../hooks';
import { BarOptions, Footer, TitlePage, ToastAlert } from '../../components';
import { PrincipalLayout } from '../../layouts';
import { TableMarriage } from '../components/TableMarriage';
import { MarriageDocument } from '../views';
import { ModalMarriage } from '../components/ModalMarriage';

const SortBy = ['Marido', 'Mujer', 'Código'];

export const MatrimonioPage = () => {

    const { isOpenViewForm, isOpenEditModal } = useUiStore();
    const { successMessage } = useDocumentsStore();

    useEffect(() => {
        if (successMessage !== undefined) {
            toast.success(successMessage, { transition: Bounce });
        };
    }, [successMessage]);

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">
                <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? 'Registrar partida de matrimonio' : 'Actas de matrimonio'} />
                    </div>

                    {(isOpenViewForm) ? (<MarriageDocument />) : (
                        <div className="my-6 pb-4 px-4 sm:px-10 overflow-y-scroll h-[90%]">
                            <BarOptions textButton="Agregar Acta" optionsSort={SortBy} placeHolder="Buscar por marido, mujer ó código" />
                            <TableMarriage />
                            <ToastAlert />
                        </div>
                    )}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
            {(isOpenEditModal) && <ModalMarriage />}
        </PrincipalLayout>
    );
};
