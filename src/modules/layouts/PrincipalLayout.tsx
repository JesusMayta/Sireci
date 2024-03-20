import { useEffect } from 'react';
import { usePeopleStore, useUiStore } from '../../hooks';
import { Footer, Navbar, Sidebar } from '../components';

export const PrincipalLayout = ({ children }: { children: React.ReactNode }) => {

    const { isOpenSidebar, startOpenViewForm } = useUiStore();
    const { startSearchPeople, getAllPersons } = usePeopleStore();

    useEffect(() => {
        //* Get Persons
        getAllPersons();

        //* Close form to Add certificate
        startOpenViewForm(false);

        //* clear filter to search
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
                    <div className="flex flex-col justify-between h-full">
                        <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                            {children}
                        </div>
                        <div className="h-[10%] w-full">
                            <Footer />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
