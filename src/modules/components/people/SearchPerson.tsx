import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { HiMiniChevronUpDown } from 'react-icons/hi2';
import { PersonOptions } from '../../../helpers';
import { usePeopleStore } from '../../../hooks';

interface SearchOptions {
    error: boolean;
    placeHolder: string;
    getPerson: (person: PersonOptions) => void;
    inputText: string;
};

export const SearchPerson = ({ error, placeHolder, getPerson, inputText }: SearchOptions) => {

    const { people } = usePeopleStore();

    const [selected, setSelected] = useState(inputText)
    const [query, setQuery] = useState('')


    const onGetValue = (person: any) => {
        setSelected(person);
        getPerson(person)
    };

    const filteredPeople = (query === '')
        ? people
        : people.filter((person: PersonOptions) => person.per_names.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')) ||
            (person.per_first_lastname.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))));

    return (
        <Combobox value={selected} onChange={onGetValue}>
            <div className="relative mt-2">
                <div className={`relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left sm:text-sm shadow-lg shadow-gray-300 border ${(error) ? 'border-red-600' : 'border-gray-400'}`} >
                    <Combobox.Input
                        className="w-full border-none py-2 px-3 text-sm leading-5 text-black focus:outline-none"
                        placeholder={placeHolder}
                        displayValue={(person: PersonOptions) => (person.per_names === undefined) ? selected : person.per_names + ' ' + person.per_first_lastname}
                        onChange={(event: any) => setQuery(event.target.value)}
                        autoComplete='off'
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <HiMiniChevronUpDown className="h-5 w-5 text-gray-700" aria-hidden="true" />
                    </Combobox.Button>
                </div>
                {(query !== '') &&
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg shadow-gray-900 focus:outline-none border border-gray-500 sm:text-sm">
                            {(filteredPeople.length === 0 && query !== '') ? (
                                <div className="relative select-none py-2 text-center text-sm text-black font-semibold uppercase">
                                    Persona no encontrada
                                </div>
                            ) : (
                                (filteredPeople.map((person: PersonOptions) => (
                                    <Combobox.Option
                                        key={person._id}
                                        className={({ active }) =>
                                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-900 text-white font-semibold' : 'text-black'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {`${person.per_names} ${person.per_first_lastname} (${person.per_document_number})`}
                                    </Combobox.Option>
                                ))
                                ))}
                        </Combobox.Options>
                    </Transition >
                }
            </div >
        </Combobox >
    );
};
