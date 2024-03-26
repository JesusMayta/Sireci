import { useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';

import { useAuthStore } from '../../../hooks';

import { ToastAlert } from '../../components';
import { FormLogin, ImageLogin } from '../components';

export const LoginPage = () => {

  const { errorMessage } = useAuthStore();

  useEffect(() => {
    if (errorMessage !== undefined) {
      toast.error(errorMessage, { transition: Bounce });
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      <section className="relative flex w-full h-full bg-gray-200">
        <div className="absolute z-10 w-full h-16">
          <nav className="flex justify-between items-center w-full h-full bg-gray-900 text-white px-10 md:px-24 shadow-lg shadow-gray-950">
            <p className="text-2xl sm:text-4xl font-extrabold">SIRECI</p>
            <p className="font-semibold text-sm sm:text-xl">Servicio de Registro Civil</p>
          </nav>
        </div>
        <ImageLogin />
        <div className="flex items-center h-full w-full md:w-[60%] lg:w-[35%] xl:w-[30%] bg-white">
          <div className="w-full h-[70%] flex flex-col justify-center">
            <h2 className="mt-24 text-center font-extrabold text-5xl xl:text-6xl">Bienvenido</h2>
            <p className="text-center font-semibold mt-4 mb-12">Ingrese sus crendenciales</p>
            <FormLogin />
          </div>
        </div>
      </section>
      <ToastAlert />
    </div >
  );
};
