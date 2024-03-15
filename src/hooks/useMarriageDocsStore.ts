import { SireciApi } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingDocuments, onGetMarriageDocuments, onSelectCertificateMarriage, onSuccessRegisterDoc } from "../store/documents/documentsSlice";


export const useMarriageDocsStore = () => {

    const { marriageDocuments, activeCertificateMarriage, isLoadingDocuments } = useAppSelector(state => state.documents);
    const dispatch = useAppDispatch();

    const getCertificateById = async (id: string) => {
        try {
            const { data: CertificateMarriage } = await SireciApi().get(`/certificates/marriage/${id}`);
            console.log(CertificateMarriage.data);
            dispatch(onSelectCertificateMarriage(CertificateMarriage.data));
            return true;
        } catch (error) {
            return false;
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

    const startRegisterMarriageDoc = async (values: any) => {
        try {
            const { data } = await SireciApi().post('/certificates/marriage', values);
            console.log(data);
            return true;
        } catch (error) {
            return false;
        };
    };

    const startEditMarriageDoc = async (id: string, values: any) => {
        try {
            const resp = await SireciApi().patch(`/certificates/marriage/${id}`, values);
            console.log(resp);
            return true;
        } catch (error) {
            return false;
        };
    };

    const startDeleteMarriageDoc = async (id: string) => {
        try {
            const resp = await SireciApi().delete(`/certificates/marriage/${id}`);
            console.log(resp);
            return true;
        } catch (error) {
            return false;
        };
    };

    const clearActiveCertificate = () => {
        dispatch(onSelectCertificateMarriage({}));
    };

    const startSendSuccessMessage = (message: string) => {
        dispatch(onSuccessRegisterDoc(message));
    };

    return {

        //*Properties
        activeCertificateMarriage,
        isLoadingDocuments,
        marriageDocuments,

        //*Methods
        clearActiveCertificate,
        getAllCertificatesMarriage,
        getCertificateById,
        startDeleteMarriageDoc,
        startEditMarriageDoc,
        startRegisterMarriageDoc,
        startSendSuccessMessage,
    };
};