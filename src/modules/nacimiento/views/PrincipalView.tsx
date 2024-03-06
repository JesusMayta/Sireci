import { useEffect } from "react";
import { useDocumentsStore } from "../../../hooks";
import { BarOptions, ContentTable } from "../../views";


interface BarOptions {
    textButton: string;
    placeHolder: string;
    optionsSort: string[];
    tableHead: string[];
};

export const PrincipalView = ({ textButton, placeHolder, optionsSort, tableHead }: BarOptions) => {

    const { birthDocuments, getAllCertificatesBirth } = useDocumentsStore();

    useEffect(() => {
        getAllCertificatesBirth();
    }, []);

    return (
        <div className="my-6 pb-4 px-4 sm:px-10 overflow-y-scroll h-[90%]">
            <BarOptions textButton={textButton} optionsSort={optionsSort} placeHolder={placeHolder} />
            <ContentTable tableHead={tableHead} contentTable={birthDocuments} />
        </div>
    );
};
