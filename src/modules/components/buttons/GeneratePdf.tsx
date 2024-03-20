import { HiMiniDocumentArrowUp } from 'react-icons/hi2';

export const GeneratePdf = ({ createPdf }: { createPdf: any }) => {
    return (
        <button type="submit" onClick={createPdf} className="flex items-center justify-center gap-x-2 w-full py-2 shadow-lg shadow-blue-900 bg-blue-600 rounded-lg text-white focus:outline-none hover:shadow-md hover:shadow-blue-950 duration-300 font-semibold">
            <HiMiniDocumentArrowUp className="text-xl" />
            Generar PDF
        </button>
    );
};
