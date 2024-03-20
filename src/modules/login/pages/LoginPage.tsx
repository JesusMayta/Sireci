import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { LoginOptions, loginValidations } from "../../../helpers";
import { useAuthStore } from "../../../hooks";
import { AlertError } from '../../../config';

import { MessageAlert } from "../../components";
import { ImageLogin, NavBar } from '../components';

import styles from './LoginPage.module.css';

export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();

  const handleSubmit = ({ email, password }: LoginOptions) => {
    startLogin({ email, password });
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      AlertError(errorMessage);
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      <section className="relative flex w-full h-full bg-gray-200">
        <div className="absolute z-10 w-full h-16">
          <NavBar />
        </div>
        <ImageLogin />
        <div className="flex items-center h-full w-full md:w-[60%] lg:w-[35%] xl:w-[30%] bg-white">
          <div className="w-full h-[70%] px-12">
            <h2 className="mt-24 text-center font-extrabold text-5xl sm:text-6xl">Bienvenido</h2>
            <p className="text-center font-semibold mt-4 mb-12">Ingrese sus crendenciales</p>

            <Formik
              initialValues={{ email: '', password: '', }}
              onSubmit={handleSubmit}
              validationSchema={loginValidations}
            >
              {({ errors, touched }) => (

                <Form>
                  <label htmlFor="email" className="font-semibold">Usuario:</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={`${styles.input_field} ${(!errors.email || !touched.email) ? 'border-gray-400' : 'border-red-600 text-red-700'}`} placeholder="username@mail.com"
                  />
                  <ErrorMessage name="email" component={() => <MessageAlert message={errors.email} />} />

                  <div className="relative mt-6">
                    <label htmlFor="password" className="font-semibold">Contraseña:</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={`${styles.input_field} ${(!errors.password || !touched.password) ? 'border-gray-400' : 'border-red-600'}`}
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

          </div>
        </div>
      </section>
      {(!!errorMessage) && <ToastContainer />}
    </div >
  );
};
