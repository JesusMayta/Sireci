import { commonFormClasses } from '../../../utils/common-form-classes';
import { successButton } from '../../../utils/general-style-classes';
import { PrincipalLayout, PrincipalViewContainer } from '../../layouts';
import { useBackupStore } from '../../../hooks';
import { useEffect } from 'react';
import { LoadComponent } from '../../components';

export const MantenimientoPage = () => {
  const { getBackupDocuments, isLoadingDocuments, backupDocuments } =
    useBackupStore();

  useEffect(() => {
    getBackupDocuments('');
  }, []);

  return (
    <PrincipalLayout title={'Realizar backup'}>
      <PrincipalViewContainer>
        {isLoadingDocuments ? (
          <LoadComponent />
        ) : (
          <>
            <pre>{`Backup: ${JSON.stringify(backupDocuments)}`}</pre>
            <div className='h-full'>
              <form>
                <div className={`${commonFormClasses.formResponsiveGrid}`}>
                  <div className=''>
                    <label className={commonFormClasses.label}>Nombre</label>
                    <input
                      id='nombre'
                      type='text'
                      className={`${commonFormClasses.input}`}
                      placeholder='nombre de la municipalidad '
                    />
                  </div>
                  <div className=''>
                    <label className={commonFormClasses.label}>RUC</label>
                    <input
                      id='nombre'
                      type='text'
                      className={`${commonFormClasses.input}`}
                      placeholder='escriba el RUC '
                    />
                  </div>
                  <div className=''>
                    <label className={commonFormClasses.label}>Sitio web</label>
                    <input
                      id='nombre'
                      type='text'
                      className={`${commonFormClasses.input}`}
                      placeholder='nombre de algun sitio web '
                    />
                  </div>
                  <div className=''>
                    <label className={commonFormClasses.label}>Telefono</label>
                    <input
                      id='nombre'
                      type='text'
                      className={`${commonFormClasses.input}`}
                      placeholder='escriba su telefono '
                    />
                  </div>
                  <div className=''>
                    <label className={commonFormClasses.label}>Direccion</label>
                    <input
                      id='nombre'
                      type='text'
                      className={`${commonFormClasses.input}`}
                      placeholder='escriba su direccion '
                    />
                  </div>
                  <div className=''>
                    <label className={commonFormClasses.label}>Email</label>
                    <input
                      id='nombre'
                      type='email'
                      className={`${commonFormClasses.input}`}
                      placeholder='escriba su correro electrónico '
                    />
                  </div>
                  <div className='flex flex-wrap gap-x-6 gap-y-4'>
                    <button type='submit' className={successButton}>
                      Guardar
                    </button>
                    <button type='submit' className={successButton}>
                      Download
                    </button>
                  </div>
                  <div>
                    <select className={`${commonFormClasses.input}`}>
                      <option>actas de matrimonio</option>
                      <option>people</option>
                      <option>defuncion</option>
                      <option>nacimiento</option>
                      <option></option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </PrincipalViewContainer>
      {/* crear un select que te guarde los nombres de las colecciones  */}
    </PrincipalLayout>
  );
};
