
export const TitlePage = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center ps-4 w-full h-10 sm:h-12 bg-blue-800 rounded-lg shadow-lg shadow-blue-950">
            <h1 className="uppercase text-white font-semibold text-xs sm:text-base">{title}</h1>
        </div>
    );
};