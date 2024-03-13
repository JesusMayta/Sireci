import { useEffect } from 'react';
import { usePeopleStore, useUiStore } from '../../hooks';
import { Navbar, Sidebar } from '../components';

export const PrincipalLayout = ({ children }: { children: React.ReactNode }) => {

    const { isOpenSidebar, onChangeStateViewForm, startCloseEditModal } = useUiStore();
    const { startSearchPeople, getAllPersons } = usePeopleStore();

    useEffect(() => {
        getAllPersons();
        startCloseEditModal();
        onChangeStateViewForm(false);
        startSearchPeople('');
    }, []);

    return (
        <main className="h-screen w-screen bg-gray-50 transition-all duration-700">
            <Sidebar />
            <section className="relative p-2 xl:ml-80 h-full">
                <div className={`${(isOpenSidebar) ? 'absolute xl:hidden' : 'hidden'} w-screen inset-0 bg-black/80 h-screen z-20 `}></div>
                <div className="h-[8%] w-full">
                    <Navbar />
                </div>
                <div className="h-[92%] w-full">
                    {children}
                </div>
            </section>
        </main >
    );
};
