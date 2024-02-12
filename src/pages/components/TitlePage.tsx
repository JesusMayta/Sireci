interface TitleOptions {
    title: string;
};

export const TitlePage = ({ title }: TitleOptions) => {
    return (
        <div className="flex items-center ps-4 w-full h-10 sm:h-12 bg-blue-800 rounded-lg">
            <h1 className="uppercase text-white font-semibold text-xs sm:text-base">{title}</h1>
        </div>
    )
}
