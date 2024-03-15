import { useUiStore } from '../../../hooks';
import { DeleteModal, Footer, TitlePage } from '../../components';
import { PrincipalLayout, PrincipalView } from '../../layouts';
import { TableMarriage } from '../components/TableMarriage';
import { MarriageDocument } from '../views';
import { ModalToUpdate } from '../views/ModalToUpdate';

const SortBy = ['Marido', 'Mujer', 'Código'];

export const MatrimonioPage = () => {

    const { isOpenViewForm, isOpenEditModal, isOpenDeleteModal } = useUiStore();


    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">
                <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? 'Registrar partida de matrimonio' : 'Actas de matrimonio'} />
                    </div>

                    {(isOpenViewForm) ? (<MarriageDocument />) : (
                        <PrincipalView SortBy={SortBy}>
                            <TableMarriage />
                        </PrincipalView>
                    )}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
            {(isOpenEditModal) && <ModalToUpdate />}
            {(isOpenDeleteModal) && <DeleteModal />}
        </PrincipalLayout>
    );
};
