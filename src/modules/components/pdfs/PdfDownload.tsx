import { PDFDownloadLink } from "@react-pdf/renderer";
import { HiArrowDownTray } from "react-icons/hi2";

export const PdfDownload = ({ doc }: { doc: any }) => {

    return (
        <PDFDownloadLink document={doc} fileName="birthDocument.pdf">
            {({ loading, }) => (loading) ?
                <p className="font-semibold">Cargando...</p> :
                <button type="button" className="flex items-center justify-center gap-x-3 bg-yellow-500 py-2 w-full  rounded-lg shadow-lg shadow-yellow-800 font-semibold text-white hover:shadow-md hover:shadow-yellow-900 duration-300">
                    <HiArrowDownTray className="text-xl" />
                    Descargar Pdf
                </button>
            }
        </PDFDownloadLink>
    );
};
