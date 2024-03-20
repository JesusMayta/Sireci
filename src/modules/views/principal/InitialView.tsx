import { BarOptions, ContentTable } from "..";

interface BarOptions {
    textButton: string;
    placeHolder: string;
    optionsSort: string[];
    tableHead: string[];
    contentTable: any
};
export const InitialView = ({ textButton, placeHolder, optionsSort, tableHead, contentTable }: BarOptions) => {
    return (
        <div className="my-6 pb-4 px-4 sm:px-10 overflow-y-scroll h-[90%]">
            <BarOptions textButton={textButton} optionsSort={optionsSort} placeHolder={placeHolder} />
            <ContentTable tableHead={tableHead} contentTable={contentTable} />
        </div>
    );
};
