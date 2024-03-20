
import { useUiStore } from "../../../hooks";
import { TitlePage } from "../../components";
import { PrincipalLayout, PrincipalView } from "../../layouts";
import { TableUsers } from '../views/TableUsers';



export const UsersPage = () => {

    const { isOpenViewForm } = useUiStore();

    return (
        <PrincipalLayout>
            <>
                <div className="pt-6 sm:pt-2">
                    <TitlePage title={(isOpenViewForm) ? 'Registrar nuevo usuario' : 'Lista de Usuarios'} />
                </div>
                {(isOpenViewForm) ?
                    (<p>dd</p>)
                    : (
                        <PrincipalView SortBy={['Nombres', 'Apellidos', 'Username', 'Tipo de usuario']} placeHolder='Buscar por dni, nombres Ó libro' textButton="Agregar usuario">
                            <TableUsers />
                        </PrincipalView>
                    )}
            </>
        </PrincipalLayout>
    );
};
