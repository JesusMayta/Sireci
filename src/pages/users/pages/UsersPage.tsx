import { useState } from "react";
import { Footer, OptionsBar, TitlePage } from "../../components";
import { PrincipalLayout } from "../../layouts";
import { AddDocumentView } from "../../views";
import { TableUsers } from "../views/TableUsers";

const options = ['Nombres', 'Apellidos', 'Username', 'Tipo de usuario'];

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
                        <TitlePage title={(openFormDoc) ? '' : 'Lista de usuarios'} />
                    </div>
                    {(openFormDoc) ? (
                        <AddDocumentView />
                    ) : (
                        <>
                            <div className="mt-8 px-4 md:px-12 xl:px-12 2xl:px-8 overflow-y-auto h-[90%] rounded-lg">
                                <OptionsBar onOpenForm={openViewForm} textButton="Agregar usuario" optionsSort={options} />
                                <TableUsers />
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
