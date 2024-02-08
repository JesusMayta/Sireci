import { LoginOptions } from "../pages/login";
import { loginUser, onChecking, useAppDispatch, useAppSelector } from "../store";
import axios from 'axios';

// const urlApi = 'https://sireci-be.onrender.com/api/auth/login'


export const useAuthStore = () => {

    const { status, user, errorMessage } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const startLogin = async ({ email, password }: LoginOptions) => {

        dispatch(onChecking());

        try {
            const resp = await axios.post('https://sireci-be.onrender.com/api/auth/login', { email, password });
            console.log({ resp });
            // dispatch(loginUser(data));

        } catch (error) {
            console.log(error);
        };
    };

    const verifyAuthToken = async () => {

    };

    return {
        status,
        user,
        errorMessage,
        startLogin,
        verifyAuthToken
    };
};