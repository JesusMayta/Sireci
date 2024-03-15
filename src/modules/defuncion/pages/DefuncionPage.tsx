import { DeleteModal, Footer, TitlePage } from '../../components';
import { PrincipalLayout, PrincipalView } from '../../layouts';
import { DefunciónDocument } from '../views/DefunciónDocument';
import { useUiStore } from '../../../hooks';
import { TableDeathDocs } from '../components/TableDeathDocs';
import { ModalUpdateDeath } from '../views';

export const DefuncionPage = () => {

    const { isOpenViewForm, isOpenDeleteModal, isOpenEditModal } = useUiStore();

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">
                <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? 'Registrar acta de defunción' : 'Actas de defunción'} />
                    </div>

                    {(isOpenViewForm) ? (<DefunciónDocument />) : (
                        <PrincipalView SortBy={['DNI', 'Nombres y apellidos', 'Libro del acta', 'Acción']}>
                            <TableDeathDocs />
                        </PrincipalView>
                    )}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
            {(isOpenEditModal) && <ModalUpdateDeath />}
            {(isOpenDeleteModal) && <DeleteModal />}
        </PrincipalLayout>
    );
};
