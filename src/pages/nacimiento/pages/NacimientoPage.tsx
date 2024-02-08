import { Search, TableDocs } from "../../components";
import { PrincipalLayout } from "../../layouts";

const thead = ['DNI', 'Nombres y apellidos', 'Código', 'Acción'];

export const NacimientoPage = () => {
    return (
        <PrincipalLayout>
            <div className="h-full">

                <div className="h-[20%]">
                    <div className="flex items-center ps-4 w-full h-10 sm:h-12 mt-3 sm:mt-0 bg-blue-800 rounded-lg">
                        <h1 className="uppercase text-white font-semibold text-xs sm:text-base">Acta de nacimiento</h1>
                    </div>
                    <Search />
                </div>

                <div className="h-[80%] px-4 sm:px-8 pt-12 sm:pt-4 overflow-y-auto">
                    <TableDocs tableHead={thead} />
                </div>
            </div>

        </PrincipalLayout>
    )
}
