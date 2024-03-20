import { PrincipalLayout, PrincipalView } from '../../layouts';
import { useUiStore } from '../../../hooks';

import { TitlePage } from '../../components';
import { BirthDocument, ModalUpdateBirth } from '../views';
import { TableBirthDocuments } from '../components/TableBirthDocuments';

const SortBy = ['Dni', 'Nombres', 'Código'];

export const NacimientoPage = () => {

    const { isOpenViewForm, isOpenEditModal } = useUiStore();

    return (
        <PrincipalLayout>
            <>
                <div className="pt-6 sm:pt-2">
                    <TitlePage title={(isOpenViewForm) ? 'Registrar partida de nacimiento' : 'Actas de nacimiento'} />
                </div>
                {(isOpenViewForm) ?
                    (<BirthDocument />)
                    : (
                        <PrincipalView SortBy={SortBy} placeHolder='Buscar por dni, nombres y libro' textButton='Agregar acta'>
                            <TableBirthDocuments />
                        </PrincipalView>
                    )}
            </>
            {(isOpenEditModal) && <ModalUpdateBirth />}
        </PrincipalLayout>
    );
};
