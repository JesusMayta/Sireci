import { useState } from "react";
import { Footer, OptionsBar, TitlePage } from "../../components";
import { PrincipalLayout } from "../../layouts";
import { AddDocumentView, TableView } from "../../views";

const thead = ['DNI', 'Nombres y apellidos', 'Código', 'Acción'];

export const NacimientoPage = () => {

    const [openFormDoc, setopenFormDoc] = useState<boolean>(false);

    const openViewForm = (value: boolean) => {
        setopenFormDoc(value);
    };

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">

                <div className="h-[90%] flex flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(openFormDoc) ? 'Registrar Acta de nacimiento' : 'Actas de nacimiento'} />
                    </div>

                    {(openFormDoc) ? (
                        <AddDocumentView onCloseForm={openViewForm} />
                    ) : (
                        <>
                            {/* <div className="mb-12 w-full">
                                <OptionsBar onOpenForm={openViewForm} />
                            </div> */}
                            <div className="my-7 px-4 sm:px-10 overflow-y-auto h-[90%] rounded-lg">
                                <OptionsBar onOpenForm={openViewForm} textButton="Agregar Acta" optionsSort={['dni', 'nombres', 'código']} placeHolder="Buscar por dni, nombres ó código" />
                                <TableView tableHead={thead} />
                            </div>
                        </>
                    )}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
        </PrincipalLayout>
    )
}
