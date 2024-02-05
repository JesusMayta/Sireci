import { useAppSelector } from '../../store';
import { Navbar, Sidebar } from '../components';

interface Component {
    children: React.ReactNode
};

export const PrincipalLayout = ({ children }: Component) => {

    const { isOpen } = useAppSelector((state) => state.sideBar);

    return (
        <main className="min-h-screen bg-gray-200 transition-all duration-700">
            <Sidebar />
            <section className="relative p-2 xl:ml-80">

                <div className={`${(isOpen) ? 'absolute xl:hidden' : 'hidden'} w-screen inset-0 bg-black/80 h-screen z-20 `}></div>

                <Navbar />
                {children}
            </section>
        </main >
    );
};
