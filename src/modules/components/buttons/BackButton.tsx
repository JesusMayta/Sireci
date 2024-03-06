import { IoMdArrowBack } from "react-icons/io"
import { useUiStore } from "../../../hooks"

export const BackButton = () => {

    const { onChangeStateViewForm } = useUiStore();

    return (
        <button onClick={() => onChangeStateViewForm(false)} className="flex items-center gap-x-2 font-bold hover:underline">
            <IoMdArrowBack />
            Volver
        </button>
    );
};
