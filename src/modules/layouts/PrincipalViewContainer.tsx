import { ReactNode, useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';
import { ToastAlert } from '../components';
import { useAppSelector } from '../../store';

export const PrincipalViewContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { successMessage } = useAppSelector((state) => state.documents);

  useEffect(() => {
    if (successMessage !== undefined) {
      toast.success(successMessage, { transition: Bounce });
    }
  }, [successMessage]);

  return (
    <div className='my-6 pb-4 px-4 sm:px-10 overflow-y-scroll h-[90%]'>
      {children}
      <ToastAlert />
    </div>
  );
};
