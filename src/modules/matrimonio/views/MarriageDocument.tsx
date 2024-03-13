import { BackButton, InfoForm } from "../../components";
import { FormRegister } from "../components/FormRegister";

export const MarriageDocument = () => {

    return (
        <div className="w-full h-full flex flex-row mt-5 p-4 animate-fade-right animate-duration-1000">
            <div className="w-full lg:w-[60%]">
                <BackButton />
                <h2 className="mt-6 text-center text-3xl font-semibold">Complete los campos</h2>
                <div className="mt-16 px-6 xl:px-4 2xl:px-12">
                    <FormRegister />
                </div>
            </div>

            <div className="hidden lg:flex w-[40%] h-full flex-col justify-evenly items-center border-l-2 border-gray-400">
                <InfoForm text="Una vez realizado el matrimonio en la municipalidad, esta entrega a los contrayentes el acta y envía la información al Reniec, siempre y cuando el distrito en que se realizó el casamiento se encuentre en su base de datos. Este proceso es automático y gratuito. Luego de 20 días hábiles, podrás solicitar una copia certificada del acta de matrimonio al Reniec." />
            </div>
        </div >
    );
};
