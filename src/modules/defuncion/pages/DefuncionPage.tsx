import { FormLayout, PrincipalLayout, PrincipalView } from '../../layouts';
import { useUiStore } from '../../../hooks';
import { TableDeathDocs, FormRegister, ModalUpdateDeath } from '../components';

export const DefuncionPage = () => {
  const { isOpenViewForm, isOpenEditModal } = useUiStore();

  return (
    <PrincipalLayout
      title={
        isOpenViewForm ? 'Registrar acta de defunción' : 'Actas de Defunción'
      }
    >
      <>
        {isOpenViewForm ? (
          <FormLayout infoText='Es el procedimiento donde se registra el fallecimiento de una persona, para ello debe contar con el Certificado de Defunción, el cual tiene que estar debidamente firmado y sellado por profesional de salud o Declaración Jurada de la autoridad política, judicial o religiosa, en los lugares donde no existe un profesional de salud que acredite la defunción.'>
            <FormRegister />
          </FormLayout>
        ) : (
          <PrincipalView
            SortBy={['DNI', 'Nombres', 'Libro']}
            placeHolder='Buscar por dni, nombres y libro'
            textButton='Nueva acta'
            page='death'
          >
            <TableDeathDocs />
          </PrincipalView>
        )}
      </>
      {isOpenEditModal && <ModalUpdateDeath />}
    </PrincipalLayout>
  );
};
