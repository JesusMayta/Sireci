import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../login';
import { RegisterPage } from '../register';
import { ProfilePage } from '../profile';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
    )
}