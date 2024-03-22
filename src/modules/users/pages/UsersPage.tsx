
import { useUiStore } from '../../../hooks';
import { FormLayout, PrincipalLayout, PrincipalView } from '../../layouts';
import { TableUsers } from '../components';

export const UsersPage = () => {

    const { isOpenViewForm } = useUiStore();

    return (
        <PrincipalLayout title={(isOpenViewForm) ? 'Registrar nuevo usuario' : 'Lista de Usuarios'}>
            <>
                {(isOpenViewForm) ?
                    (
                        <FormLayout infoText="En esta sección es importante que usted digite bien los datos de un usuario nuevo, para que asi pueda realizar sus actividades en la aplicación.">
                            <h1>Hola mundo</h1>
                        </FormLayout>
                    ) : (
                        <PrincipalView SortBy={['Nombres', 'Apellidos', 'Username', 'Rol']} placeHolder='Buscar por dni, nombres, email y rol' textButton='Usuario'>
                            <TableUsers />
                        </PrincipalView>
                    )}
            </>
        </PrincipalLayout>
    );
};
