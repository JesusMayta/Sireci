import { MdAdd, MdOutlineSearch } from 'react-icons/md';
import { usePeopleStore, useUiStore } from '../../../hooks';

export const BarOptions = ({ textButton, optionsSort, placeHolder }: { textButton: string, optionsSort: string[], placeHolder: string }) => {

    const { onChangeStateViewForm } = useUiStore();
    const { startSearchPeople } = usePeopleStore();

    const openviewForm = () => {
        onChangeStateViewForm(true);
    };

    const onSearchingDocs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            console.log(event.target.value);
            startSearchPeople(event.target.value);
        }, 500);
    };

    return (
        <div className="mt-3 md:mt-1 w-full">
            <div className="flex flex-col items-center justify-between space-y-6 w-full lg:flex-row lg:space-y-0">
                <div className="relative flex w-full lg:w-3/4 items-center">
                    <MdOutlineSearch className="absolute left-3 text-2xl text-blue-800" />
                    <input type="text" name="search" onChange={onSearchingDocs} className="border border-gray-400 shadow-md shadow-gray-400 h-12 w-full rounded-3xl bg-white py-3 pl-11 text-sm outline-none placeholder:text-xs md:placeholder:text-sm" placeholder={placeHolder} autoComplete="off" />
                </div>

                <div className="flex items-center justify-between lg:justify-end w-full">
                    <div className="flex items-center">
                        <label htmlFor="orderBy" className="mr-2 flex-shrink-0 text-xs sm:text-sm font-semibold text-black">Ordenar por: </label>
                        <select name="" id="orderBy" className="sm:mr-4 block w-full rounded-xl shadow-md shadow-gray-400  border border-gray-400 p-1 pr-10 text-xs sm:text-sm outline-none cursor-pointer">
                            {(optionsSort.map(option => (
                                <option key={option} className="text-sm">{option}</option>
                            )))}
                        </select>
                    </div>

                    <button onClick={openviewForm} type="button" className="inline-flex cursor-pointer items-center rounded-lg bg-green-600 shadow-lg shadow-green-900 py-2 px-2 lg:px-4 text-xs md:text-sm font-semibold text-white hover:shadow-md hover:shadow-green-950 duration-300">
                        <MdAdd className="text-lg mr-1" />
                        {textButton}
                    </button>
                </div>
            </div>
        </div>
    );
};