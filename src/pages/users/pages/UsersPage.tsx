import { useState } from "react";
import { Footer, OptionsBar, TitlePage } from "../../components";
import { PrincipalLayout } from "../../layouts";
import { AddDocumentView, TableView } from "../../views";

const thead = ['ID', 'Nombres', 'Apellidos', ' Teléfono', ' Usuario', 'Email', 'Acción'];

export const UsersPage = () => {

    const [openFormDoc, setopenFormDoc] = useState<boolean>(false);

    const openViewForm = (value: boolean) => {
        setopenFormDoc(value);
    };


    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">

                <div className="h-[90%] flex flex-col justify-between w-full">
                    <div className="pt-3 sm:pt-2">
                        <TitlePage title={(openFormDoc) ? 'Registro de partida de nacimiento' : 'Acta de nacimiento'} />
                    </div>

                    {(openFormDoc) ? (
                        <AddDocumentView />
                    ) : (
                        <>
                            <div className="mb-12 w-full">
                                <OptionsBar onOpenForm={openViewForm} />
                            </div>
                            <div className="px-4 sm:px-8 pb-8 overflow-y-auto w-full">
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
    );
};
