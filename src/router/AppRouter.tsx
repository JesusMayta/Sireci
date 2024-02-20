import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { ProfilePage } from '../pages/profile';
import { NacimientoPage } from '../pages/nacimiento';
import { useAuthStore } from '../hooks';
import { LoadingPage } from '../pages/components';
import { MatrimonioPage } from '../pages/matrimonio/pages/MatrimonioPage';
import { UsersPage } from '../pages/users';
import { PersonasPage } from '../pages/personas';


export const AppRouter = () => {

    // const token = localStorage.getItem('token');

    const { status, verifyAuthToken } = useAuthStore();

    useEffect(() => {
        verifyAuthToken();
    }, []);

    if (status === 'checking') {
        return (
            <LoadingPage />
        );
    };

    return (
        <Routes>
            {(status === 'not-authenticated')
                ? (
                    <>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/nacimiento" element={<NacimientoPage />} />
                        <Route path="/matrimonio" element={<MatrimonioPage />} />
                        <Route path='/usuarios' element={< UsersPage />} />
                        <Route path='/personas' element={< PersonasPage />} />
                        <Route path="/*" element={<Navigate to="/nacimiento" />} />
                    </>
                )};
        </Routes>
    )
}