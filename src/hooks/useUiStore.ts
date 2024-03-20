import { onOpenDeleteModal, onOpenEditModal, onOpenSidebar, onOpenViewForm, useAppDispatch, useAppSelector } from '../store';

export const useUiStore = () => {

    const { isOpenSidebar, isOpenViewForm, isOpenEditModal, isOpenDeleteModal } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    //SideBar
    const startOpenSidebar = (value: boolean) => {
        dispatch(onOpenSidebar(value));
    };

    // View Form Document
    const startOpenViewForm = (value: boolean) => {
        dispatch(onOpenViewForm(value));
    };

    //Modal Update
    const startOpenEditModal = (value: boolean) => {
        dispatch(onOpenEditModal(value));
    };

    //Modal Delete
    const startOpenDeleteModal = (value: boolean) => {
        dispatch(onOpenDeleteModal(value));
    };

    return {

        //*Properties
        isOpenSidebar,
        isOpenViewForm,
        isOpenDeleteModal,
        isOpenEditModal,

        //*Methods
        startOpenSidebar,
        startOpenViewForm,
        startOpenEditModal,
        startOpenDeleteModal,

    };
};