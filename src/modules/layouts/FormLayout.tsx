import { ReactNode } from 'react';
import { BackButton, InfoForm } from '../components';

export const FormLayout = ({ children, infoText }: { children: ReactNode, infoText: string }) => {
    return (
        <div className="w-full h-full flex flex-row mt-5 p-1 sm:p-4 animate-fade-right animate-duration-1000">
            <div className="w-full lg:w-[60%] ">
                <BackButton />
                <h2 className="mt-3 sm:mt-6 text-center text-xl sm:text-3xl font-semibold">Complete los campos</h2>
                <div className="mt-3 sm:mt-20 px-6 xl:px-4 2xl:px-12">
                    {children}
                </div>
            </div>

            <div className="hidden lg:flex w-[40%] h-full flex-col justify-evenly items-center border-l-2 border-gray-400">
                {/* <InfoForm text="El registro del nacimiento no sólo es un derecho humano fundamental, sino que también contribuye a garantizar que se respeten otros derechos de los niños, como el derecho a la protección contra la violencia y a recibir servicios sociales esenciales, entre ellos la atención de la salud y la justicia." /> */}
                <InfoForm text={infoText} />
            </div>
        </div>
    );
};
