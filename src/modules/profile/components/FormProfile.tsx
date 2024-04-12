import { Field, Form, Formik } from 'formik';
import { useAuthStore } from '../../../hooks';
import { ProfileValidations } from '../../../helpers';

export const FormProfile = () => {
  const { userSession } = useAuthStore();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: userSession.name,
        lastName: userSession.lastName,
        email: userSession.email,
        username: userSession.username,
        address: userSession.address,
      }}
      validationSchema={ProfileValidations}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="w-full h-full px-2 mt-12">
          <div className="flex md:flex-row flex-col justify-center gap-x-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label htmlFor="name" className="font-semibold text-sm mb-1">
                Nombres:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="input_field font-medium border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col mt-6 md:mt-0">
              <label htmlFor="lastName" className="font-semibold text-sm mb-1">
                Apellido paterno:
              </label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                className="input_field font-medium border-gray-300"
                placeholder="Ej: Gutierrez"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-x-12 mt-5 md:mt-8">
            <div className="w-full md:w-1/2 flex flex-col">
              <label htmlFor="email" className="font-semibold text-sm mb-1">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="input_field font-medium border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col mt-6 md:mt-0">
              <label htmlFor="username" className="font-semibold text-sm mb-1">
                Nombre de usuario:
              </label>
              <Field
                type="text"
                name="username"
                id="username"
                className="input_field font-medium border-gray-300"
              />
            </div>
          </div>

          <div className="mt-8 me-0 md:me-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label htmlFor="address" className="font-semibold text-sm mb-1">
                Dirección:
              </label>
              <Field
                type="text"
                name="address"
                id="address"
                className="input_field font-medium border-gray-300"
              />
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <button
              type="submit"
              className="py-2 px-8 font-medium bg-blue-700 text-white rounded-lg  shadow-lg shadow-blue-700 hover:shadow-md hover:shadow-blue-800 duration-300 z-[2] mb-8"
            >
              Atualizar datos
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
