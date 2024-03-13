import { useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';

import { PrincipalLayout } from '../../layouts';
import { useDocumentsStore, useUiStore } from '../../../hooks';

import { Footer, TitlePage, ToastAlert, BarOptions } from '../../components';
import { BirthDocument } from '../views';
import { TableBirthDocuments } from '../components/TableBirthDocuments';

const SortBy = ['Dni', 'Nombres', 'Código'];

export const NacimientoPage = () => {

    const { isOpenViewForm } = useUiStore();
    const { successMessage } = useDocumentsStore();

    useEffect(() => {

        if (successMessage !== undefined) {
            toast.success(successMessage, { transition: Bounce });
        };
    }, [successMessage])

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">
                <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? 'Registrar partida de nacimiento' : 'Actas de nacimiento'} />
                    </div>
                    {(isOpenViewForm) ?
                        (<BirthDocument />)
                        : (
                            <div className="my-6 pb-4 px-4 sm:px-10 overflow-y-scroll h-[90%]">
                                <BarOptions textButton="Agregar Acta" optionsSort={SortBy} placeHolder="Buscar por dni, nombres ó código" />
                                <TableBirthDocuments />
                                <ToastAlert />
                            </div>
                        )}
                </div>
                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
        </PrincipalLayout>
    );
};
