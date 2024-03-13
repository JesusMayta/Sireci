import { useEffect } from "react";
import { useDocumentsStore } from "../../../hooks";
import { BarOptions } from "../../views";
import { TableDeathDocs } from "../components/TableDeathDocs";
import { ToastAlert } from "../../components";
import { Bounce, toast } from "react-toastify";

const SortBy = ['Dni', 'Nombres', 'Código'];

export const PrincipalView = () => {

    const { successMessage } = useDocumentsStore();

    useEffect(() => {

        if (successMessage !== undefined) {
            toast.success(successMessage, { transition: Bounce });
        };
    }, [successMessage])

    return (
        <div className="my-6 pb-4 px-4 sm:px-10 overflow-y-scroll h-[90%]">
            <BarOptions textButton="Agregar acta" optionsSort={SortBy} placeHolder="Buscar por dni, nombres ó código" />
            <TableDeathDocs />
            <ToastAlert />
        </div>
    );
};
