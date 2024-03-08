import { SireciApi } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingDocuments, onGetBirthDocuments, onGetDeathCertificates, onGetMarriageDocuments } from "../store/documents/documentsSlice";


export const useDocumentsStore = () => {

    const { birthDocuments, isLoadingDocuments, marriageDocuments, deathCertificates } = useAppSelector((state) => state.documents);
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
            console.log(CertificatesDeath.data);
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

    return {
        //*Properties
        birthDocuments,
        isLoadingDocuments,
        marriageDocuments,

        //*Methods
        getAllCertificatesBirth,
        getAllCertificatesDeath,
        getAllCertificatesMarriage,
        startRegisterBirthDocument
    };
};