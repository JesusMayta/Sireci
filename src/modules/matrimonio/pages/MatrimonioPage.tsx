import { useUiStore } from '../../../hooks';
import { TitlePage } from '../../components';
import { PrincipalLayout, PrincipalView } from '../../layouts';
import { TableMarriage } from '../components/TableMarriage';
import { MarriageDocument } from '../views';
import { ModalUpdateMarriage } from '../views/ModalUpdateMarriage';

const SortBy = ['Marido', 'Mujer', 'Código'];

export const MatrimonioPage = () => {

    const { isOpenViewForm, isOpenEditModal } = useUiStore();


    return (
        <PrincipalLayout>
            <>
                <div className="pt-6 sm:pt-2">
                    <TitlePage title={(isOpenViewForm) ? 'Registrar acta de matrimonio' : 'Actas de matrimonio'} />
                </div>
                {(isOpenViewForm) ?
                    (<MarriageDocument />)
                    : (
                        <PrincipalView SortBy={SortBy} placeHolder='Buscar por dni, nombres y libro' textButton='Agregar acta'>
                            <TableMarriage />
                        </PrincipalView>
                    )}
            </>
            {(isOpenEditModal) && <ModalUpdateMarriage />}
        </PrincipalLayout>
    );
};

