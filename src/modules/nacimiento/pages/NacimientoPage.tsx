
import { useEffect } from 'react';

import { BirthDocument, PrincipalView } from '../views';

import { Footer, TitlePage } from '../../components';
import { PrincipalLayout } from '../../layouts';
import { useUiStore } from '../../../hooks';

const ThNames = ['DNI', 'Nombres y apellidos', 'Código', 'Acción'];
const SortBy = ['Dni', 'Nombres', 'Código']

export const NacimientoPage = () => {

    const { isOpenViewForm, onChangeStateViewForm } = useUiStore();

    useEffect(() => {
        onChangeStateViewForm(false);
    }, []);

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">
                <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? 'Registrar partida de nacimiento' : 'Actas de nacimiento'} />
                    </div>

                    {(isOpenViewForm) ?
                        (<BirthDocument />) :
                        (<PrincipalView textButton="Agregar Acta" optionsSort={SortBy} placeHolder="Buscar por dni, nombres ó código" tableHead={ThNames} />)}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
        </PrincipalLayout>
    );
};
