import { SireciApi } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingDocuments, onGetBirthDocuments, onSelectCertificateBirth, onSuccessRegisterDoc } from "../store/documents/documentsSlice";

export const useBirthDocsStore = () => {

    const { birthDocuments, isLoadingDocuments, successMessage } = useAppSelector(state => state.documents);
    const dispatch = useAppDispatch();

    const getCertificateBirthById = async (id: string) => {
        try {
            const { data } = await SireciApi().get(`/certificates/birth/${id}`);
            console.log(data);
        } catch (error) {
            console.log(error);
        };
    };

    const getAllCertificatesBirth = async () => {

        dispatch(onCheckingDocuments());

        try {
            const { data: CertificatesBirth } = await SireciApi().get('/certificates/birth');
            dispatch(onGetBirthDocuments(CertificatesBirth.data));
        } catch (error) {
            console.log('error');
        };
    };

    const startRegisterBirthDocument = async (values: any) => {

        try {
            const { data } = await SireciApi().post('/certificates/birth', values);
            console.log(data);
            return true;
        } catch (error) {
            return false;
        };
    };

    const startDeleteBirthDoc = async () => {

    };

    const getCertificateBirthByParams = () => {

    };

    const clearActiveCertificate = () => {
        dispatch(onSelectCertificateBirth({}));
    };

    const startSendSuccessMessage = (message: string) => {
        dispatch(onSuccessRegisterDoc(message));
    };


    return {

        //* Properties
        birthDocuments,
        isLoadingDocuments,

        //*Methods
        clearActiveCertificate,
        getAllCertificatesBirth,
        getCertificateBirthById,
        getCertificateBirthByParams,
        startDeleteBirthDoc,
        startRegisterBirthDocument,
        startSendSuccessMessage,
    }

};