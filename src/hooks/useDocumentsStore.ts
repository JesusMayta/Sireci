import { SireciApi } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingDocuments, onGetBirthDocuments, onGetDeathCertificates, onGetMarriageDocuments, onSuccessRegisterDoc } from "../store/documents/documentsSlice";


export const useDocumentsStore = () => {

    const { successMessage, birthDocuments, isLoadingDocuments, marriageDocuments, deathCertificates } = useAppSelector((state) => state.documents);
    const dispatch = useAppDispatch();

    const getAllCertificatesBirth = async () => {

        dispatch(onCheckingDocuments());

        try {

            const { data: CertificatesBirth } = await SireciApi().get('/certificates/birth');
            dispatch(onGetBirthDocuments(CertificatesBirth.data));

        } catch (error) {
            console.log('error');
        };
    };

    const getAllCertificatesMarriage = async () => {

        dispatch(onCheckingDocuments());

        try {

            const { data: CertificatesMarriage } = await SireciApi().get('/certificates/marriage');
            dispatch(onGetMarriageDocuments(CertificatesMarriage.data));

        } catch (error) {
            console.log('error');
        };
    };

    const getAllCertificatesDeath = async () => {
        dispatch(onCheckingDocuments());

        try {

            const { data: CertificatesDeath } = await SireciApi().get('/certificates/death');
            dispatch(onGetDeathCertificates(CertificatesDeath.data));

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

    const startRegisterMarriageDoc = async (values: any) => {
        try {
            const { data } = await SireciApi().post('/certificates/marriage', values);
            console.log(data);
            return true;
        } catch (error) {
            return false;
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

    const startSendSuccessMessage = (message: string) => {
        dispatch(onSuccessRegisterDoc(message));
    };

    return {
        //*Properties
        birthDocuments,
        deathCertificates,
        isLoadingDocuments,
        marriageDocuments,
        successMessage,

        //*Methods
        getAllCertificatesBirth,
        getAllCertificatesDeath,
        getAllCertificatesMarriage,
        startSendSuccessMessage,
        startRegisterBirthDocument,
        startRegisterDeathDoc,
        startRegisterMarriageDoc
    };
};