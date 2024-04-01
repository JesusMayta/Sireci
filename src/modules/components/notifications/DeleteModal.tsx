import { IoCloseOutline } from 'react-icons/io5';
import { TiWarningOutline } from 'react-icons/ti';
import { useBirthDocsStore, useDeathDocsStore, useMarriageDocsStore, useUiStore } from '../../../hooks';
import { Bounce, toast } from 'react-toastify';
import { useAppDispatch } from '../../../store';
import { onShowAlertMessage } from '../../../store/documents/documentsSlice';

export const DeleteModal = ({ toDelete }: { toDelete: { id: string, option: string } }) => {

    const { startDeleteBirthDoc, isDeletingDocument } = useBirthDocsStore();
    const { startDeleteMarriageDoc, isDeletingDocument: deletingMarriageDoc } = useMarriageDocsStore();
    const { startDeleteDeathDoc, isDeletingDocument: deletingDeathDoc } = useDeathDocsStore();
    const { startOpenDeleteModal } = useUiStore();

    const dispatch = useAppDispatch();

    const closeModal = () => {
        startOpenDeleteModal(false);
    };

    const handleDelete = async () => {

        let success: boolean = false;

        switch (toDelete.option) {
            case 'birth':
                success = await startDeleteBirthDoc(toDelete.id);
                break;
            case 'marriage':
                success = await startDeleteMarriageDoc(toDelete.id);
                break;
            case 'death':
                success = await startDeleteDeathDoc(toDelete.id);
                break;
        };

        if (success) {
            dispatch(onShowAlertMessage('Certificado archivado exitosamente!'));
            startOpenDeleteModal(false);
        } else {
            toast.error('Ocurrio un error al momento de editar', { transition: Bounce });
        };
    };

    return (
        <div className="fixed bg-black/70 inset-0 w-screen h-screen flex items-center justify-center z-40 antialiased">
            <div className="relative flex flex-col justify-center items-center container rounded-lg w-[90%] md:w-1/2 max-w-md text-black bg-gray-200 pt-5 pb-6 animate-fade-up animate-duration-1000">
                <TiWarningOutline className="text-4xl text-yellow-600" />
                <h2 className="text-center font-semibold">Eliminar registro</h2>
                <button type="button" onClick={closeModal} className="absolute right-3 top-3 p-2 bg-red-600 rounded-full">
                    <IoCloseOutline className="text-xl text-white" />
                </button>

                <h2 className="mt-2 text-gray-500 text-sm">¿Estas seguro de eliminar este registro?</h2>
                <button
                    disabled={isDeletingDocument}
                    type="button" className="flex items-center gap-x-1 bg-red-600 py-2 px-3 rounded-lg mt-4 text-white outline-none hover:bg-red-400" onClick={handleDelete}>
                    {(isDeletingDocument || deletingMarriageDoc || deletingDeathDoc) ? (
                        <>
                            <div className="w-6 h-6 border-t-transparent border-2 border-white rounded-full animate-spin"></div>
                            <p className="animate-pulse text-sm">Eliminando...</p>
                        </>
                    ) : (<p>Sí, eliminar!</p>)}
                </button>
            </div>
        </div >
    );
};
