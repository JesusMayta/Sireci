import { IoMdArrowBack } from "react-icons/io"
import { useUiStore } from "../../../hooks"

export const BackButton = () => {

    const { startOpenViewForm } = useUiStore();

    return (
        <button onClick={() => startOpenViewForm(false)} className="flex items-center gap-x-2 font-bold hover:underline">
            <IoMdArrowBack />
            Volver
        </button>
    );
};
