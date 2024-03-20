
export const InfoForm = ({ text }: { text: string }) => {
    return (
        <>
            <h3 className="font-semibold text-4xl">Republica del Perú</h3>
            <figure className="mt-3">
                <img src="/public/images/escudo-registro.png" alt="Escudo del Perú" className="h-72 w-72 2xl:w-80 2xl:h-80" />
            </figure>
            <p className="px-12 xl:px-9 2xl:px-16 text-justify font-medium text-xs xl:text-sm 2xl:text-base ">{text}</p>
        </>
    );
};
