import { FC, ReactNode, useEffect } from 'react';
import { usePeopleStore, useUiStore } from '../../hooks';
import { Footer, Navbar, Sidebar, TitlePage } from '../components';

interface Props {
  children: ReactNode;
  title: string;
}

export const PrincipalLayout: FC<Props> = ({ children, title }) => {
  const { isOpenSidebar, startOpenViewForm, startSelectSort } = useUiStore();
  const { startSearchPeople, getAllPersons } = usePeopleStore();

  useEffect(() => {
    //* Get Persons
    getAllPersons();

    //* Close form to Add certificate
    startOpenViewForm(false);

    //* clear filter to search
    startSearchPeople('');

    startSelectSort('');
  }, []);

  return (
    <main className='h-screen w-screen bg-gray-50 transition-all duration-700'>
      <Sidebar />
      <section className='relative p-2 xl:ml-80 h-full'>
        <div
          className={`${
            isOpenSidebar ? 'absolute xl:hidden' : 'hidden'
          } w-screen inset-0 bg-black/80 h-screen z-20 `}
        ></div>
        <div className='h-[8%] w-full'>
          <Navbar />
        </div>
        <div className='h-[92%] w-full'>
          <div className='flex flex-col justify-between h-full'>
            <div className='h-[90%] flex flex-col justify-between w-full overflow-y-auto sm:overflow-hidden'>
              <div className='pt-6 sm:pt-2'>
                <TitlePage title={title} />
              </div>
              {children}
            </div>
            <div className='h-10 sm:h-[10%] w-full'>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
