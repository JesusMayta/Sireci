import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../hooks';
import {
  DefuncionPage,
  LoadingPage,
  LoginPage,
  MatrimonioPage,
  NacimientoPage,
  PersonasPages,
  ProfilePage,
  UsersPage,
  MantenimientoPage,
} from '../modules';

export const AppRouter = () => {
  const { status, verifyAuthToken } = useAuthStore();
  const token = localStorage.getItem('token');

  useEffect(() => {
    verifyAuthToken();
  }, []);

  if (status === 'checking') {
    return <LoadingPage />;
  }

  return (
    <Routes>
      {!token ? (
        <>
          <Route path='/' element={<LoginPage />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </>
      ) : (
        <>
          <Route path='/nacimiento' element={<NacimientoPage />} />
          <Route path='/matrimonio' element={<MatrimonioPage />} />
          <Route path='/personas' element={<PersonasPages />} />
          <Route path='/defuncion' element={<DefuncionPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/mantenimiento' element={<MantenimientoPage />} />{' '}
          <Route path='/usuarios' element={<UsersPage />} />
          <Route path='/*' element={<Navigate to='/nacimiento' />} />
        </>
      )}
    </Routes>
  );
};
