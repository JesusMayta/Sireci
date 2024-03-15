import { SireciApi } from '../api';
import { useAppDispatch, useAppSelector } from '../store';
import { onCheckingDocuments, onGetDeathCertificates, onSuccessRegisterDoc } from '../store/documents/documentsSlice';

export const useDeathDocsStore = () => {

    const { deathCertificates, successMessage, isLoadingDocuments } = useAppSelector(state => state.documents);
    const dispatch = useAppDispatch();

    const getAllCertificatesDeath = async () => {

        dispatch(onCheckingDocuments());
        try {
            const { data: CertificatesDeath } = await SireciApi().get('/certificates/death');
            dispatch(onGetDeathCertificates(CertificatesDeath.data));

        } catch (error) {
            console.log('error');
        };
    };

    const startRegisterDeathDoc = async (values: any) => {
        try {
            const { data } = await SireciApi().post('/certificates/death', values);
            console.log(data);
            return true;
        } catch (error) {
            return false;
        };
    };

    const startDeleteDeathDoc = async () => {

    };

    const startUpdteDeathDoc = async (id: string, values: any) => {
        try {
            const resp = await SireciApi().patch(`/certificates/death/${id}`, values);
            console.log(resp);
            return true;
        } catch (error) {
            return false;
        };
    };

    const startSendSuccessMessage = (message: string) => {
        dispatch(onSuccessRegisterDoc(message));
    };

    const clearActiveCertificate = () => {
        // dispatch(onSelectCertificateMarriage({}));
    };

    return {

        //* Properties
        deathCertificates,
        isLoadingDocuments,
        successMessage,

        //* Methods
        clearActiveCertificate,
        getAllCertificatesDeath,
        startRegisterDeathDoc,
        startSendSuccessMessage,
        startDeleteDeathDoc,
        startUpdteDeathDoc
    }
};