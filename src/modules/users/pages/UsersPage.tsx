import { useUiStore } from '../../../hooks';
import {
  FormLayout,
  PrincipalLayout,
  PrincipalView,
  PrincipalViewContainer,
} from '../../layouts';
import { TableUsers, FormRegisterUser } from '../components';

export const UsersPage = () => {
  const { isOpenViewForm } = useUiStore();

  return (
    <PrincipalLayout
      title={isOpenViewForm ? 'Registrar nuevo usuario' : 'Lista de Usuarios'}
    >
      <>
        {isOpenViewForm ? (
          <PrincipalViewContainer>
            <FormLayout infoText='En esta sección es importante que usted digite bien los datos de un usuario nuevo, para que asi pueda realizar sus actividades en la aplicación.'>
              <FormRegisterUser />
            </FormLayout>
          </PrincipalViewContainer>
        ) : (
          <PrincipalView
            SortBy={['Nombres', 'Apellidos', 'Username', 'Rol']}
            placeHolder='Buscar por dni, nombres, email y rol'
            textButton='Usuario'
          >
            <TableUsers />
          </PrincipalView>
        )}
      </>
    </PrincipalLayout>
  );
};
