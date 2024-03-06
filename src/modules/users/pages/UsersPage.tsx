
import { PrincipalLayout } from "../../layouts";


const options = ['Nombres', 'Apellidos', 'Username', 'Tipo de usuario'];

export const UsersPage = () => {

    // const { isOpenViewForm, onChangeStateViewForm } = useUiStore();

    // useEffect(() => {
    //     onChangeStateViewForm(false);
    // }, []);


    return (
        <PrincipalLayout>
            {/* <div className="flex flex-col justify-between h-full">

                <div className="h-[90%] flex flex-col justify-between w-full">
                    <div className="pt-3 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? '' : 'Lista de usuarios'} />
                    </div>
                    {(isOpenViewForm) ? (
                        <AddDocumentView />
                    ) : (
                        <>
                            <div className="mt-8 px-4 md:px-12 xl:px-12 2xl:px-8 overflow-y-auto h-[90%] rounded-lg">
                                <BarOptions textButton="Agregar usuario" optionsSort={options} placeHolder="Buscar por " />
                                <TableUsers />
                            </div>
                        </>
                    )}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div> */}
            <div>sads</div>
        </PrincipalLayout>
    );
};
