import { FC } from "react";

interface Props {
    title: string;
};

export const TitlePage: FC<Props> = ({ title }) => {
    return (
        <div className="px-[6px]">
            <div className="flex items-center ps-4 w-full h-10 sm:h-12 bg-blue-800 rounded-lg shadow-lg shadow-blue-800">
                <h1 className="uppercase text-white font-semibold text-xs sm:text-base">{title}</h1>
            </div>
        </div>
    );
};
