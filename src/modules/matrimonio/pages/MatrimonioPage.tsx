import { useUiStore } from '../../../hooks';
import {
  FormLayout,
  PrincipalLayout,
  PrincipalView,
  PrincipalViewContainer,
} from '../../layouts';
import {
  FormRegister,
  ModalUpdateMarriage,
  TableMarriage,
} from '../components';

const SortBy = ['Esposo', 'Esposa', 'Libro'];

export const MatrimonioPage = () => {
  const { isOpenViewForm, isOpenEditModal } = useUiStore();

  return (
    <PrincipalLayout
      title={
        isOpenViewForm ? 'Registrar acta de matrimonio' : 'Actas de matrimonio'
      }
    >
      <>
        {isOpenViewForm ? (
          <PrincipalViewContainer>
            <FormLayout infoText='Es el procedimiento donde se registra el fallecimiento de una persona, para ello debe contar con el Certificado de Defunción, el cual tiene que estar debidamente firmado y sellado por profesional de salud o Declaración Jurada de la autoridad política, judicial o religiosa, en los lugares donde no existe un profesional de salud que acredite la defunción.'>
              <FormRegister />
            </FormLayout>
          </PrincipalViewContainer>
        ) : (
          <PrincipalView
            SortBy={SortBy}
            placeHolder='Buscar al esposo o a la esposa'
            textButton='Nueva acta'
            page='marriage'
          >
            <TableMarriage />
          </PrincipalView>
        )}
      </>
      {isOpenEditModal && <ModalUpdateMarriage />}
    </PrincipalLayout>
  );
};
