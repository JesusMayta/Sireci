import { useAuthStore } from '../../../hooks';
import { BackButton, InfoForm } from '../../components';
import { FormRegister } from '../components/FormRegister';

export const DefuncionDocument = () => {

    const { userSession } = useAuthStore();

    return (
        <div className="w-full h-full flex flex-row mt-5 p-4 animate-fade-right animate-duration-1000">
            <div className="w-full lg:w-[60%]">
                <BackButton />
                <h2 className="mt-6 text-center text-2xl sm:text-3xl font-semibold">Complete los campos</h2>
                <div className="mt-4 sm:mt-12 px-6 xl:px-4 2xl:px-12">
                    <FormRegister user={userSession.id} />
                </div>
            </div>

            <div className="hidden lg:flex w-[40%] h-full flex-col justify-evenly items-center border-l-2 border-gray-400">
                <InfoForm text="Es el procedimiento donde se registra el fallecimiento de una persona, para ello debe contar con el Certificado de Defunción, el cual tiene que estar debidamente firmado y sellado por profesional de salud o Declaración Jurada de la autoridad política, judicial o religiosa, en los lugares donde no existe un profesional de salud que acredite la defunción." />
            </div>
        </div >
    );
};
