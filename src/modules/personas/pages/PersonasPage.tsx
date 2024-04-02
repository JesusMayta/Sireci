import { useFormik } from 'formik';
import { PrincipalLayout, PrincipalViewContainer } from '../../layouts';
import * as Yup from 'yup';
import { commonFormClasses } from '../../../utils/common-form-classes';
import { ErrorText } from '../../components';
import { successButton } from '../../../utils/general-style-classes';

const validationSchema = Yup.object({
  nombres: Yup.string().required('Campo requerido'),
  primer_apellido: Yup.string().required('Campo requerido'),
});

export const PersonasPages = () => {
  const formik = useFormik({
    initialValues: {
      nombres: '',
      primer_apellido: '',
      segundo_apellido: '',
      tipo_documento: '',
      documeto_number: '',
      persona_genero: '',
      marital_status: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('valores enviados', values);
    },
  });

  return (
    <PrincipalLayout title={'Registrar personas'}>
      <PrincipalViewContainer>
        <div className='h-full'>
          <form className=''>
            <div className={`${commonFormClasses.formResponsiveGrid}`}>
              <div className=''>
                <label className={commonFormClasses.label}>Nombres</label>
                <input
                  type='text'
                  id='nombres'
                  name='nombres'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nombres}
                  placeholder='Ingrese sus nombres'
                  className={`${commonFormClasses.input}`}
                />
                {formik.touched.nombres && (
                  <ErrorText errorMessage={formik.errors.nombres} />
                )}
              </div>
              <div>
                <label className={commonFormClasses.label}>
                  Primer Apellido
                </label>
                <input
                  type='text'
                  id='primer_apellido'
                  name='primer_apellido'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.primer_apellido}
                  placeholder='Ingrese su apellido paterno'
                  className={`${commonFormClasses.input}`}
                />
                {formik.touched.primer_apellido && (
                  <ErrorText errorMessage={formik.errors.primer_apellido} />
                )}
              </div>
              <div>
                <label className={commonFormClasses.label}>
                  Segundo Apellido
                </label>
                <input
                  type='text'
                  id='segundo_apellido'
                  name='segundo_apellido'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.segundo_apellido}
                  placeholder='Ingrese su apellido materno'
                  className={`${commonFormClasses.input}`}
                />
              </div>
              <div>
                <label className={commonFormClasses.label}>Documento</label>
                <select
                  id='tipo_documento'
                  name='tipo_documento'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tipo_documento}
                  className={`${commonFormClasses.input}`}
                >
                  <option value='' label='Selecciona su tipo de documento' />
                  <option value='2' label='D.N.I'></option>
                  <option value='1' label='Carnet de extranjería'></option>
                  <option value='0' label='Pasaporte'></option>
                </select>
              </div>
              <div>
                <label className={commonFormClasses.label}>
                  Numero de documento
                </label>
                <input
                  type='text'
                  id='documeto_number'
                  name='documeto_number'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.documeto_number}
                  placeholder='Ingrese su numero de D.N.I o carnet de extranjería'
                  className={`${commonFormClasses.input}`}
                />
              </div>
              <div>
                <label className={commonFormClasses.label}>Genero</label>
                <select
                  id='persona_genero'
                  name='persona_genero'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.persona_genero}
                  className={`${commonFormClasses.input}`}
                >
                  <option value='' label='Seleccione su genero' />
                  <option value='3' label='Femenino'></option>
                  <option value='2' label='Masculino'></option>
                  <option value='1' label='Otros'></option>
                  <option value='0' label='Prefiero no decirlo'></option>
                </select>
              </div>
              <div>
                <label className={commonFormClasses.label}>Estado Civil</label>
                <input
                  type='text'
                  id='marital_status'
                  name='marital_status'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.marital_status}
                  placeholder='Indique su estado civil'
                  className={`${commonFormClasses.input}`}
                />
              </div>
              <div>
                <button type='submit' className={successButton}>
                  Registrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </PrincipalViewContainer>
    </PrincipalLayout>
  );
};
