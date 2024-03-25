import { TitlePage } from '../../components';
import { PrincipalLayout, PrincipalView } from '../../layouts';
import { useUiStore } from '../../../hooks';
import { TableDeathDocs } from '../components/TableDeathDocs';
import { ModalUpdateDeath, DefuncionDocument } from '../views';

export const DefuncionPage = () => {
  const { isOpenViewForm, isOpenEditModal } = useUiStore();

  return (
    <PrincipalLayout>
      <>
        <div className='pt-6 sm:pt-2'>
          <TitlePage
            title={
              isOpenViewForm
                ? 'Registrar acta de defuncion'
                : 'Actas de defuncion'
            }
          />
        </div>
        {isOpenViewForm ? (
          <DefuncionDocument />
        ) : (
          <PrincipalView
            SortBy={['DNI', 'Nombres y apellidos', 'Libro del acta', 'Acción']}
            placeHolder='Buscar por dni, nombres Ó libro'
            textButton='Agregar acta'
          >
            <TableDeathDocs />
          </PrincipalView>
        )}
      </>
      {isOpenEditModal && <ModalUpdateDeath />}
    </PrincipalLayout>
  );
};
