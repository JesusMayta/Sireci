import { useEffect } from 'react';
import { PrincipalLayout } from '../../layouts';
import { useUiStore } from '../../../hooks';

import { Footer, TitlePage } from '../../components';
import { BirthDocument, PrincipalView } from '../views';


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

                    {(isOpenViewForm) ? (<BirthDocument />) : (<PrincipalView />)}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
        </PrincipalLayout>
    );
};
