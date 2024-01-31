import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../login';
import { RegisterPage } from '../register';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}