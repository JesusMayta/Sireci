import { FC, ReactNode, useEffect } from 'react'
import { Bounce, toast } from 'react-toastify';
import { BarOptions, ToastAlert } from '../components';
import { useAppSelector } from '../../store';
import { useUserStore } from '../../hooks';

interface Props {
    children: ReactNode;
    SortBy: string[];
    placeHolder: string;
    textButton: string;
};

export const PrincipalView: FC<Props> = ({ children, SortBy, placeHolder, textButton }) => {

    const { successMessage } = useAppSelector(state => state.documents);
    const { messageAlert } = useUserStore();

    useEffect(() => {
        if (successMessage !== undefined || messageAlert !== undefined) {
            toast.success(successMessage, { transition: Bounce });
        };
    }, [successMessage, messageAlert]);

    return (
        <div className="my-6 pb-4 px-[6px] sm:px-10 overflow-y-scroll h-[90%]">
            <BarOptions textButton={textButton} optionsSort={SortBy} placeHolder={placeHolder} />
            {children}
            <ToastAlert />
        </div>
    );
};