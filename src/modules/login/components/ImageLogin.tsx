export const ImageLogin = () => {

    return (
        <div className="relative hidden md:flex items-end  md:w-[40%] lg:w-[65%] xl:w-[70%] h-full animate-fade-right animate-duration-[1500ms] bg-login-image bg-cover bg-no-repeat">
            <div className="absolute w-full h-full bg-black opacity-60"></div>
            <div className="absolute z-20 left-8 bottom-28 text-white">
                <h1 className="text-6xl lg:text-7xl font-black ">Iniciar Sesión</h1>
                <p className="hidden lg:block text-base mt-3 font-semibold">Bienvenido a la app de SIRECI, por favor ingresa para poder realizar tus actividades.</p>
            </div>
        </div>
    );
};
