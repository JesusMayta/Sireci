import { jwtDecode } from 'jwt-decode';
import { SireciApi } from '../api/sireciApi';

import { onCheckingAuthSession, onLoginUserSession, onLogoutUserSession, useAppDispatch, useAppSelector } from '../store';
import { LoginOptions } from '../helpers';


export const useAuthStore = () => {

    const { status, userSession, errorMessage } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const startLogin = async ({ email, password }: LoginOptions) => {

        dispatch(onCheckingAuthSession());

        try {
            const { data: UserToken } = await SireciApi().post('/auth/login', { email, password });
            const { access_token } = UserToken.data;
            localStorage.setItem('token', access_token);
            await getUserByEmail();
        } catch (error) {
            dispatch(onLogoutUserSession('Usuario y/o contraseña incorrecta'));
        };
    };

    const getUserByEmail = async () => {

        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogoutUserSession('Su sesión ha caducado'));

        try {
            const Token: { email: string } = jwtDecode(token);
            const { data: UserLogged } = await SireciApi().get(`/users/by-email/${Token.email}`);
            dispatch(onLoginUserSession(UserLogged.data));
        } catch (error) {
            logoutUserSession();
        };
    };

    const logoutUserSession = () => {
        dispatch(onCheckingAuthSession());
        setTimeout(() => {
            localStorage.clear();
            dispatch(onLogoutUserSession(undefined));
        }, 2000);
    };

    const verifyAuthToken = async () => {

        dispatch(onCheckingAuthSession());

        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogoutUserSession(undefined));

        try {
            await getUserByEmail();
        } catch (error) {
            dispatch(onLogoutUserSession(undefined));
        };
    };

    return {
        // Properties
        status,
        userSession,
        errorMessage,

        // Methods
        startLogin,
        logoutUserSession,
        verifyAuthToken
    };
};