import { SireciApi } from '../api';
import { ContentTableDeath } from '../helpers';
import { useAppDispatch, useAppSelector } from '../store';
import { onCheckingDocuments, onDeletingDocument, onGetDeathCertificates, onSelectCertificateDeath, onShowAlertMessage, onUpdatingDocument } from '../store/documents/documentsSlice';

export const useDeathDocsStore = () => {

    const { deathCertificates, successMessage, isLoadingDocuments, isUpdateDocument, isDeletingDocument, activeCertificateDeath } = useAppSelector(state => state.documents);
    const dispatch = useAppDispatch();

    const getCertificateById = async (id: string) => {

        dispatch(onUpdatingDocument(true));

        try {
            const { data: CertificateDeath } = await SireciApi().get(`/certificates/death/${id}`);
            dispatch(onSelectCertificateDeath(CertificateDeath.data));
            dispatch(onUpdatingDocument(false));
            return true;
        } catch (error) {
            return false;
        };
    };

    const getAllCertificatesDeath = async () => {

        dispatch(onCheckingDocuments());
        try {
            const { data: CertificatesDeath } = await SireciApi().get('/certificates/death');
            const FilterDeath = CertificatesDeath.data.filter((doc: ContentTableDeath) => doc.dea_state !== false);
            dispatch(onGetDeathCertificates(FilterDeath));

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

    const startDeleteDeathDoc = async (id: string) => {
        dispatch(onDeletingDocument(true));

        try {
            await SireciApi().delete(`/certificates/death/${id}`);
            dispatch(onDeletingDocument(false));
            return true;
        } catch (error) {
            return false
        }
    };

    const startUpdteDeathDoc = async (id: string, values: any) => {

        dispatch(onUpdatingDocument(true));

        try {
            const resp = await SireciApi().patch(`/certificates/death/${id}`, values);
            dispatch(onUpdatingDocument(false));
            console.log(resp);
            return true;
        } catch (error) {
            return false;
        };
    };

    const startShowMessageDeath = (message: string) => {
        dispatch(onShowAlertMessage(message));
    };

    const clearActiveDeathDoc = () => {
        dispatch(onSelectCertificateDeath({}));
    };

    return {

        //* Properties
        deathCertificates,
        isLoadingDocuments,
        isDeletingDocument,
        successMessage,
        activeCertificateDeath,
        isUpdateDocument,

        //* Methods
        clearActiveDeathDoc,
        getAllCertificatesDeath,
        startRegisterDeathDoc,
        startShowMessageDeath,
        startDeleteDeathDoc,
        startUpdteDeathDoc,
        getCertificateById
    }
};