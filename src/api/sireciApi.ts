import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

export const SireciApi = () => {

    const token = localStorage.token;

    const apiAxios = axios.create({
        baseURL: VITE_API_URL,
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    return apiAxios;
};
