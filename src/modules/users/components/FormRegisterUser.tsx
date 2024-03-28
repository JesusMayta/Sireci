import { Form, Formik, ErrorMessage, Field } from 'formik';
import { HiDocumentArrowUp, HiXCircle } from 'react-icons/hi2';
import { MessageAlert, ToastAlert } from '../../components';
import { UserRegisterValidations } from '../../../helpers';
import { useUiStore, useUserStore } from '../../../hooks';
import { Bounce, toast } from 'react-toastify';

export const FormRegisterUser = () => {

    const { startRegisterNewUser, startShowAlertMessage } = useUserStore();
    const { startOpenViewForm } = useUiStore();

    const onHandleRegister = async (values: any) => {

        const successRegister = await startRegisterNewUser({ ...values, user_is_admin: parseInt(values.user_is_admin), user_is_active: 1 })

        if (successRegister) {
            startShowAlertMessage('Usuario registrado exitosamente!');
            startOpenViewForm(false);
        } else {
            toast.error('No se pudo registrar el nuevo usuario', { transition: Bounce });
        };

    };


    return (
        <>
            <Formik
                initialValues={{ user_name: '', user_first_lastname: '', user_second_lastname: '', user_address: '', user_email: '', user_is_admin: '0', user_password: '', user_username: '' }}
                validationSchema={UserRegisterValidations}
                onSubmit={onHandleRegister}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="w-full flex flex-col sm:flex-row justify-center gap-x-12">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="user_name" className="font-semibold text-sm">Nombres:</label>
                                <Field type="text" id="user_name" name="user_name" className={`input_field ${(!errors.user_name || !touched.user_name) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} placeholder="ej:Mateo Percy" />
                                <ErrorMessage name="user_name" component={() => <MessageAlert message={errors.user_name} />} />
                            </div>

                            <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
                                <label htmlFor="firstLastname" className="font-semibold text-sm">Primer Apellido:</label>
                                <Field type="text" id="firstLastname" name="user_first_lastname" className={`input_field ${(!errors.user_first_lastname || !touched.user_first_lastname) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} placeholder="ej:Gutierrez" />
                                <ErrorMessage name="user_first_lastname" component={() => <MessageAlert message={errors.user_first_lastname} />} />
                            </div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-center gap-x-12 mt-3">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="secondLastname" className="font-semibold text-sm">Segundo Apellido(Opcional):</label>
                                <Field type="text" id="secondLastname" name="user_second_lastname" className={`input_field capitalize ${(!errors.user_second_lastname || !touched.user_second_lastname) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} placeholder="ej:Gonzales" />
                                <ErrorMessage name="user_second_lastname" component={() => <MessageAlert message={errors.user_second_lastname} />} />
                            </div>

                            <div className="w-full sm:w-1/2 mt-3">
                                <label htmlFor="address" className="font-semibold text-sm">Dirección:</label>
                                <Field type="text" id="address" name="user_address" className={`input_field ${(!errors.user_address || !touched.user_address) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} placeholder="ej:Calle los Arces 201" />
                                <ErrorMessage name="user_address" component={() => <MessageAlert message={errors.user_address} />} />
                            </div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-center gap-x-12 mt-3">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="email" className="font-semibold text-sm">Email:</label>
                                <Field type="email" id="email" name="user_email" className={`input_field ${(!errors.user_email || !touched.user_email) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} placeholder="ej:Consulting@mail.com" />
                                <ErrorMessage name="user_email" component={() => <MessageAlert message={errors.user_email} />} />
                            </div>

                            <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
                                <label htmlFor="address" className="font-semibold text-sm">Rol:</label>
                                <Field as="select" name="user_is_admin" className="input_field border-gray-400">
                                    <option value="0">Usuario</option>
                                    <option value="1">Administrador</option>
                                </Field>
                            </div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-center gap-x-12 mt-3">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="password" className="font-semibold text-sm">Password:</label>
                                <Field type="password" id="password" name="user_password" className={`input_field ${(!errors.user_password || !touched.user_password) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} placeholder="ej:Consulting@mail.com" />
                                <ErrorMessage name="user_password" component={() => <MessageAlert message={errors.user_password} />} />
                            </div>

                            <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
                                <label htmlFor="username" className="font-semibold text-sm">Nombre de usuario:</label>
                                <Field type="text" id="username" name="user_username" className={`input_field ${(!errors.user_username || !touched.user_username) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} placeholder="ej:Consulting@mail.com" />
                                <ErrorMessage name="user_username" component={() => <MessageAlert message={errors.user_username} />} />
                            </div>
                        </div>

                        <div className="flex flex-row mt-10 pb-6 sm:mt-10 w-full justify-center gap-x-6 sm:gap-x-12 text-white font-semibold text-xs sm:text-base">
                            <button type="submit" className="flex items-center gap-x-2 bg-green-700 px-7 py-2 rounded-lg shadow-lg shadow-green-950 hover:shadow-md hover:shadow-green-900 duration-300">
                                <HiDocumentArrowUp className="text-lg" />
                                Registrar
                            </button>
                            <button type="reset" className="flex items-center gap-x-2 bg-red-700 px-7 py-2 rounded-lg shadow-lg shadow-red-950 hover:shadow-md hover:shadow-red-900 duration-300">
                                <HiXCircle className="text-lg" />
                                Cancelar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastAlert />
        </>
    );
};
