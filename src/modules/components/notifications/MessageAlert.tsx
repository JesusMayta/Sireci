import { MdOutlineError } from "react-icons/md";

interface options {
    message: string | undefined;
};

export const MessageAlert = ({ message }: options) => {
    return (
        <div className="flex items-center gap-x-1 mt-1 text-xs xl:text-sm text-red-600 font-bold">
            <MdOutlineError />
            <p>{message}</p>
        </div>
    );
};
