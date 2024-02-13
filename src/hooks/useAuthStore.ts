import SireciApi from "../api/sireciApi";
import { LoginOptions } from "../pages/login";
import { closeFormDocument, loginUser, logoutUser, onChecking, useAppDispatch, useAppSelector } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const startLogin = async ({ email, password }: LoginOptions) => {

        dispatch(onChecking());

        try {
            const { data } = await SireciApi.post('/auth/login', { email, password });
            console.log(data);
            dispatch(loginUser({ name: 'Jesus', uid: 1, role: 'admin' }));

        } catch (error) {
            dispatch(logoutUser('Usuario y/o contraseña incorrecta!'))
            console.log(error);
        };
    };

    const logoutUserSession = () => {
        dispatch(logoutUser(undefined));
    };

    const verifyAuthToken = async () => {

        // const token = localStorage.getItem('token');

        // if (!token) return dispatch(logoutUser(undefined));

        try {

            dispatch(loginUser({ name: 'Jesus', uid: 1, role: 'admin' }));
        } catch (error) {
            dispatch(logoutUser(undefined));
        };
    };

    return {
        // Properties
        status,
        user,
        errorMessage,

        // Methods
        startLogin,
        logoutUserSession,
        verifyAuthToken
    };
};