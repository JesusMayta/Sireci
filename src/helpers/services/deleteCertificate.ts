import { useBirthDocsStore, useMarriageDocsStore } from "../../hooks";


export const deleteCertificate = async (certificate: string = '', id: string = '') => {

    const { } = useBirthDocsStore();
    const { startDeleteMarriageDoc } = useMarriageDocsStore();

    let success: boolean;

    switch (certificate) {
        case 'birth':
            break;
        case 'marriage':
            success = await startDeleteMarriageDoc(id);
            break;
        case 'death':
            break;
    };
    return;


};