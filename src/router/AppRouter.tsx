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
import { MantenimientoPage } from '../pages/mantenimiento';
import { PersonasPages } from '../pages/personas/pages/PersonasPages';


export const AppRouter = () => {

    const { status, user, verifyAuthToken } = useAuthStore();

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
                        <Route path="/mantenimiento" element={<MantenimientoPage/>} />
                        <Route path="/personas" element={<PersonasPages/>}/>
                        <Route path="/*" element={<Navigate to="/nacimiento" />} />

                        {(user.role === 'admin') && <Route path='/usuarios' element={< UsersPage />} />}
                    </>
                )};
        </Routes>
    )
}