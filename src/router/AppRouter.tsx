import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoadingPage, LoginPage, NacimientoPage, MatrimonioPage, UsersPage, DefuncionPage, PersonasPages } from '../modules';

import { useAuthStore } from '../hooks';

export const AppRouter = () => {

    const { status, userSession, verifyAuthToken } = useAuthStore();

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
            {(status === 'not-authenticated') ?
                (<>
                    <Route path="/" element={<LoginPage />} />
                    {/* <Route path="/register" element={<RegisterPage />} /> */}
                    <Route path="/*" element={<Navigate to="/" />} />
                </>) :
                (<>
                    {/* <Route path="/profile" element={<ProfilePage />} /> */}
                    <Route path="/nacimiento" element={<NacimientoPage />} />
                    <Route path="/matrimonio" element={<MatrimonioPage />} />
                    <Route path='/personas' element={< PersonasPages />} />
                    <Route path='/defuncion' element={< DefuncionPage />} />
                    <Route path="/*" element={<Navigate to="/nacimiento" />} />
                    {(userSession.isAdmin === 1) && <Route path='/usuarios' element={< UsersPage />} />}
                </>)};
        </Routes>
    );
};