import { MdOutlineError } from 'react-icons/md';

export const ErrorText = () => {
    return (
        <div className="mt-1 flex items-center text-xs xl:text-sm text-red-600 font-bold">
            <MdOutlineError className="me-1" />
            <p>
                Este campo es obligatorio
            </p>
        </div>
    );
};
