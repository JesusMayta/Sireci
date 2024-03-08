import { BarOptions } from "../../views"
import { TableMarriage } from "../components/TableMarriage";

const SortBy = ['Marido', 'Mujer', 'Código'];
export const PrincipalView = () => {
    return (
        <div className="my-6 pb-4 px-4 sm:px-10 overflow-y-scroll h-[90%]">
            <BarOptions textButton="Agregar Acta" optionsSort={SortBy} placeHolder="Buscar por marido, mujer ó código" />
            <TableMarriage />
        </div>
    )
}
