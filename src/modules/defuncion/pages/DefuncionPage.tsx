import { Footer, TitlePage } from '../../components';
import { PrincipalLayout } from '../../layouts';
import { DefunciónDocument } from '../views/DefunciónDocument';
import { PrincipalView } from '../views';
import { useUiStore } from '../../../hooks';

export const DefuncionPage = () => {

    const { isOpenViewForm } = useUiStore();

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">
                <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? 'Registrar acta de defunción' : 'Actas de defunción'} />
                    </div>

                    {(isOpenViewForm) ? (<DefunciónDocument />) : (<PrincipalView />)}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
        </PrincipalLayout>
    );
};
