import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginValidations } from "../../../helpers";
import { useAuthStore } from "../../../hooks";

import { MessageAlert } from "../../components";
import { NavBar } from "../components/NavBar";

export interface LoginOptions {
  email: string;
  password: string;
};

export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();

  const handleSubmit = (values: LoginOptions) => {
    console.log({ email: values.email, password: values.password });
    startLogin({ email: values.email, password: values.password });
  };

  return (
    <div className="h-screen w-screen">

      <section className="relative flex w-full h-full bg-gray-200">

        <div className="absolute z-10 w-full h-16">
          <NavBar />
        </div>

        <figure className="relative flex items-end w-[70%] h-full bg-red-900">
          <div className="absolute z-20 left-16 bottom-28 text-white">
            <h1 className="text-7xl font-black">Iniciar Sesión</h1>
            <p className="mt-3 font-semibold">Bienvenido a la app de SIRECI, por favor ingresa para poder realizar tus actividades.</p>
          </div>
          <img src="/public/images/fondo-login.jpg" alt="image login" className="h-full opacity-75" />
        </figure>

        <div className="flex items-center h-full w-[30%] bg-white">
          <div className="w-full h-[70%] px-12">
            <h2 className="mt-24 text-center font-extrabold text-6xl">Bienvenido</h2>
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
                    className={`w-full bg-gray-200 py-2 ps-3 mt-4 rounded-lg focus:outline-none border-2 ${(!errors.email || !touched.email) ? 'border-gray-300' : 'border-red-600'}`} placeholder="username@mail.com"
                  />
                  <ErrorMessage name="email" component={() => <MessageAlert message={errors.email} />} />

                  <div className="relative mt-6">
                    <label htmlFor="password" className="font-semibold">Contraseña:</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={`w-full bg-gray-200 py-2 ps-3 mt-4 rounded-lg border-2 focus:outline-none ${(!errors.password || !touched.password) ? 'border-gray-300' : 'border-red-600'}`}
                    />
                    <ErrorMessage name="password" component={() => <MessageAlert message={errors.password} />} />
                  </div>

                  <div className="w-full flex justify-between gap-x-6 mt-16 font-bold">
                    <button type="submit" className="bg-teal-800 py-2 px-2 w-1/2 rounded-lg text-white shadow-lg shadow-green-950">Ingresar</button>
                    <button type="reset" className="bg-yellow-500 w-1/2 rounded-lg text-black shadow-lg shadow-yellow-700">Limpiar</button>
                  </div>

                </Form>
              )}
            </Formik>

          </div>
        </div>
      </section>
    </div >
  );
};
