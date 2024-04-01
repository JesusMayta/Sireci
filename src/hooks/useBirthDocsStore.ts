import { SireciApi } from '../api';
import { ContentTableBirth } from '../helpers';
import { useAppDispatch, useAppSelector } from '../store';
import { onCheckingDocuments, onDeletingDocument, onGetBirthDocuments, onSelectCertificateBirth, onShowAlertMessage, onUpdatingDocument } from '../store/documents/documentsSlice';

export const useBirthDocsStore = () => {

    const { birthDocuments, isLoadingDocuments, isDeletingDocument, successMessage, activeCertificateBirth, isUpdateDocument } = useAppSelector(state => state.documents);
    const dispatch = useAppDispatch();

    const getCertificateBirthById = async (id: string) => {

        dispatch(onUpdatingDocument(true));

        try {
            const { data: CertificateBirth } = await SireciApi().get(`/certificates/birth/${id}`);
            dispatch(onSelectCertificateBirth(CertificateBirth.data));
            dispatch(onUpdatingDocument(false));
            return true;
        } catch (error) {
            return false;
        };
    };

    const getAllCertificatesBirth = async () => {

        dispatch(onCheckingDocuments());

        try {
            const { data: CertificatesBirth } = await SireciApi().get('/certificates/birth');
            const FilterBirth = CertificatesBirth.data.filter((doc: ContentTableBirth) => doc.birth_state !== false);
            dispatch(onShowAlertMessage(undefined));
            dispatch(onGetBirthDocuments(FilterBirth));
        } catch (error) {
            console.log('error');
        };
    };

    const startRegisterBirthDocument = async (values: any) => {

        try {
            await SireciApi().post('/certificates/birth', values);
            return true;
        } catch (error) {
            return false;
        };
    };

    const startUpdateBirthDocument = async (id: string, values: any) => {

        dispatch(onUpdatingDocument(true));

        try {
            await SireciApi().patch(`/certificates/birth/${id}`, values);
            dispatch(onUpdatingDocument(false));
            return true;
        } catch (error) {
            return false;
        };
    };

    const startDeleteBirthDoc = async (id: string) => {

        dispatch(onDeletingDocument(true));

        try {
            await SireciApi().delete(`/certificates/birth/${id}`);
            dispatch(onDeletingDocument(false));
            return true;
        } catch (error) {
            return false
        };
    };

    const clearActiveCertificate = () => {
        dispatch(onSelectCertificateBirth({}));
    };

    const startShowBirthMessage = (message: string) => {
        dispatch(onShowAlertMessage(message));
    };


    return {

        //* Properties
        activeCertificateBirth,
        birthDocuments,
        isLoadingDocuments,
        isDeletingDocument,
        successMessage,
        isUpdateDocument,

        //*Methods
        clearActiveCertificate,
        getAllCertificatesBirth,
        getCertificateBirthById,
        startDeleteBirthDoc,
        startRegisterBirthDocument,
        startUpdateBirthDocument,
        startShowBirthMessage,
    }

};