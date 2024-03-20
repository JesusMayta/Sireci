import { SireciApi } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingDocuments, onGetBirthDocuments } from "../store/documents/documentsSlice";


export const useDocumentsStore = () => {

    const { birthDocuments, isLoadingDocuments } = useAppSelector((state) => state.documents);
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

    return {
        //*Properties
        birthDocuments,
        isLoadingDocuments,

        //*Methods
        getAllCertificatesBirth
    };
};