import {
  FormLayout,
  PrincipalLayout,
  PrincipalView,
  PrincipalViewContainer,
} from '../../layouts';
import { useUiStore } from '../../../hooks';

import {
  TableBirthDocuments,
  FormRegister,
  ModalUpdateBirth,
} from '../components';

const SortBy = ['Dni', 'Nombres', 'Libro'];

export const NacimientoPage = () => {
  const { isOpenViewForm, isOpenEditModal } = useUiStore();

  return (
    <PrincipalLayout
      title={
        isOpenViewForm
          ? 'Registrar partida de nacimiento'
          : 'Actas de nacimiento'
      }
    >
      <>
        {isOpenViewForm ? (
          <PrincipalViewContainer>
            <FormLayout infoText='El registro del nacimiento no sólo es un derecho humano fundamental, sino que también contribuye a garantizar que se respeten otros derechos de los niños, como el derecho a la protección contra la violencia y a recibir servicios sociales esenciales, entre ellos la atención de la salud y la justicia.'>
              <FormRegister />
            </FormLayout>
          </PrincipalViewContainer>
        ) : (
          <PrincipalView
            SortBy={SortBy}
            placeHolder='Buscar por dni, nombres y libro'
            textButton='Nueva acta'
            page='birth'
          >
            <TableBirthDocuments />
          </PrincipalView>
        )}
      </>
      {isOpenEditModal && <ModalUpdateBirth />}
    </PrincipalLayout>
  );
};
