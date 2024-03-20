import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAuthStore } from '../../../hooks';
import { LoginOptions, LoginValidations } from '../../../helpers';
import { MessageAlert } from '../../components';

export const FormLogin = () => {

    const { startLogin } = useAuthStore();

    const handleSubmit = async ({ email, password }: LoginOptions) => {
        await startLogin({ email, password });
    };

    return (
        <Formik
            initialValues={{ email: '', password: '', }}
            onSubmit={handleSubmit}
            validationSchema={LoginValidations}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="email" className="font-semibold">Usuario:</label>
                    <Field
                        type="email"
                        name="email"
                        id="email"
                        className={`login_input ${(!errors.email || !touched.email) ? 'border-gray-400' : 'border-red-600 text-red-700'}`} placeholder="username@mail.com"
                    />
                    <ErrorMessage name="email" component={() => <MessageAlert message={errors.email} />} />

                    <div className="relative mt-6">
                        <label htmlFor="password" className="font-semibold">Contraseña:</label>
                        <Field
                            type="password"
                            name="password"
                            id="password"
                            className={`login_input ${(!errors.password || !touched.password) ? 'border-gray-400' : 'border-red-600'}`}
                        />
                        <ErrorMessage name="password" component={() => <MessageAlert message={errors.password} />} />
                    </div>

                    <div className="w-full flex justify-between gap-x-6 mt-16 font-bold">
                        <button type="submit" className="bg-teal-800 py-2 px-2 w-1/2 rounded-lg shadow-lg text-white shadow-green-950 hover:shadow-md hover:shadow-green-800 duration-300">Ingresar</button>
                        <button type="reset" className="bg-yellow-500 py-2 px-2 w-1/2 rounded-lg text-gray-800 shadow-lg shadow-yellow-700 hover:shadow-md hover:shadow-yellow-800 duration-300">Cancelar</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
