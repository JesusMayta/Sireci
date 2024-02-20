import { MdAdd, MdOutlineSearch } from "react-icons/md";

interface BarOptions {
    onOpenForm: (value: boolean) => void;
    textButton: string;
    optionsSort: string[];
    placeHolder: string;
};
export const OptionsBar = ({ onOpenForm, textButton, optionsSort, placeHolder }: BarOptions) => {

    const onAddDoc = () => {
        onOpenForm(true);
    };

    return (
        <div className="mt-3 md:mt-1 w-full">
            <div className="flex w-full flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
                <form className="relative flex w-full md:w-3/4 items-center">
                    <MdOutlineSearch className="absolute left-2 text-2xl" />
                    <input type="name" name="search" className="h-12 w-full rounded-md shadow-md shadow-gray-400 bg-gray-100 py-3 pl-12 text-sm outline-none" placeholder={placeHolder} />
                </form>

                <div className="flex items-center justify-between md:justify-end w-full">
                    <div className="flex items-center">
                        <label htmlFor="orderBy" className="mr-2 flex-shrink-0 text-xs sm:text-sm font-semibold text-black">Ordenar por: </label>
                        <select name="" id="orderBy" className="sm:mr-4 block w-full whitespace-pre rounded-lg border border-gray-400 p-1 pr-10 text-xs sm:text-sm outline-none">
                            {(optionsSort.map(option => (
                                <option key={option} className="whitespace-no-wrap text-sm">{option}</option>
                            )))}
                        </select>
                    </div>

                    <button onClick={onAddDoc} type="button" className="inline-flex cursor-pointer items-center rounded-lg bg-green-600 shadow-lg shadow-green-900 py-2 px-2 md:px-3 text-xs md:text-sm font-semibold text-white hover:shadow-md hover:shadow-green-950 duration-300">
                        <MdAdd className="text-lg mr-1" />
                        {textButton}
                    </button>
                </div>
            </div>
        </div>
    );
};
