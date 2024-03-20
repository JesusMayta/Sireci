import { SireciApi } from "../api";
import { ContentTableMarriage } from "../helpers";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingDocuments, onGetMarriageDocuments, onSelectCertificateMarriage, onShowAlertMessage, onUpdatingDocument } from "../store/documents/documentsSlice";


export const useMarriageDocsStore = () => {

    const { marriageDocuments, activeCertificateMarriage, isLoadingDocuments, isUpdateDocument, isDeletingDocument, successMessage } = useAppSelector(state => state.documents);
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
            const FilterMarriage = CertificatesMarriage.data.filter((doc: ContentTableMarriage) => doc.mar_state !== false);
            dispatch(onShowAlertMessage(undefined));
            dispatch(onGetMarriageDocuments(FilterMarriage));
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

        dispatch(onUpdatingDocument(true));

        try {
            await SireciApi().patch(`/certificates/marriage/${id}`, values);
            dispatch(onUpdatingDocument(false));
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

    const startShowMarriageAlert = (message: string) => {
        dispatch(onShowAlertMessage(message));
    };

    return {

        //*Properties
        activeCertificateMarriage,
        isLoadingDocuments,
        marriageDocuments,
        isUpdateDocument,
        isDeletingDocument,
        successMessage,

        //*Methods
        clearActiveCertificate,
        getAllCertificatesMarriage,
        getCertificateById,
        startDeleteMarriageDoc,
        startEditMarriageDoc,
        startShowMarriageAlert,
        startRegisterMarriageDoc,
    };
};