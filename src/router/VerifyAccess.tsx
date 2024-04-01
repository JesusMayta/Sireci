import { Component } from 'react';
import { onCheckingAuthSession, onLogoutUserSession, useAppDispatch } from '../store';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';


const accessPage = ['nacimiento', 'matrimonio', 'personas', 'defuncion', 'profile'];

export const VerifyAccess = ({ component }: { component: Component }) => {

    const dispatch = useAppDispatch();
    const { getUserByEmail, userSession } = useAuthStore();

    const token = localStorage.getItem('token');

    if (token) {

        const routesAccess = {
            'admin': [...accessPage, 'usuarios'],
            'usuario': [...accessPage]
        };

        const verifyAuthToken = async () => {
            const success = await getUserByEmail();
            const pathUser = routesAccess[data.rol];
        };

        dispatch(onCheckingAuthSession());

        const access = (pathUser.includes(window.location.pathname.split('/')[1])) ? true : false;
        return (access) ? <Component /> : <Navigate to='/principal' />;

        return <Component />
    } else {
        dispatch(onLogoutUserSession(undefined));
        return <Navigate to='/' />;
    };
};
