import { Footer, OptionsBar, TitlePage } from "../../components";
import { PrincipalLayout } from "../../layouts";
import { AddDocumentView, TableView } from "../../views";

const thead = ['DNI', 'Nombres y apellidos', 'Código', 'Acción'];

export const NacimientoPage = () => {

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full bg-green-600">

                {/* <div className="h-[90%] flex flex-col justify-between w-full">
                    <div className="pt-3 sm:pt-1">
                        <TitlePage title={(openForm) ? 'Registro de partida de nacimiento' : 'Acta de nacimiento'} />
                    </div>

                    {(openForm) ? (
                        <AddDocumentView />
                    ) : (
                        <>
                            <div className="mb-12 w-full">
                                <OptionsBar />
                            </div>
                            <div className="px-4 sm:px-8 pb-8 overflow-y-auto w-full">
                                <TableView tableHead={thead} />
                            </div>
                        </>
                    )}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div> */}
            </div >
        </PrincipalLayout >
    )
}
