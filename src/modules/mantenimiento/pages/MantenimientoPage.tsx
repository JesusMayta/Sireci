import { commonFormClasses } from '../../../utils/common-form-classes';
import { successButton } from '../../../utils/general-style-classes';
import { PrincipalLayout, PrincipalViewContainer } from '../../layouts';
import { useBackupStore } from '../../../hooks';
import { useEffect, useRef } from 'react';
import { LoadComponent } from '../../components';
import { getEnvVariables } from '../../../helpers';

const { VITE_API_URL } = getEnvVariables();

export const MantenimientoPage = () => {
  const { getBackupDocumentNames, isLoadingDocuments, backupDocumentNames } =
    useBackupStore();

  const selectRef = useRef(null);
  const selectedBackupName = useRef('');

  useEffect(() => {
    getBackupDocumentNames();
  }, []);

  const handleSelectedBackupNameChange = () => {
    selectedBackupName.current = selectRef.current?.value;
  };

  const handleDownload = () => {
    const urlPath = `backup/${selectedBackupName.current}`;

    const completeUrl = `${VITE_API_URL}/${urlPath}`;
    console.log('completeUrl');
    console.log(completeUrl);

    const token = `Bearer ${localStorage.getItem('token')}`;

    console.log('token');
    console.log(token);

    fetch(completeUrl, {
      method: 'GET',
      headers: {
        // Add any necessary headers (e.g., authorization token)
        authorization: token,
      },
    })
      .then((res) => res.blob())
      .then((data) => {
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        const fileName =
          'sireci' +
          (selectedBackupName.current === '' ? '' : '_') +
          selectedBackupName.current;
        link.setAttribute('download', `${fileName}.json`); // Set the desired file name
        document.body.appendChild(link);

        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <PrincipalLayout title={'Realizar backup'}>
      <PrincipalViewContainer>
        {isLoadingDocuments ? (
          <LoadComponent />
        ) : (
          <>
            <div className='h-full'>
              <form>
                <div className={`${commonFormClasses.formResponsiveGrid}`}>
                  <div>
                    <select
                      className={`${commonFormClasses.input}`}
                      onChange={handleSelectedBackupNameChange}
                      ref={selectRef}
                    >
                      {['', ...backupDocumentNames].map(
                        (backupDocumentName, i) => (
                          <option
                            key={i}
                            defaultValue={''}
                            value={backupDocumentName}
                          >
                            {backupDocumentName === ''
                              ? 'todos'
                              : backupDocumentName}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className='flex flex-wrap gap-x-6 gap-y-4'>
                    <button
                      type='button'
                      className={successButton}
                      onClick={handleDownload}
                    >
                      Download
                    </button>
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
