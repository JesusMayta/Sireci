import { SireciApi } from "../api";


export const useRegisterDocs = () => {

    const registerBirthPdf = async (birthPdf: any) => {
        try {

            const { data } = await SireciApi().post('/certificates/birth', birthPdf);
            console.log(data);

        } catch (error) {
            
        };
    };

    return {
        registerBirthPdf
    };
};