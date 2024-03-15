import { closeSidebar, onCloseDeleteModal, onCloseEditModal, onCloseViewForm, onOpenDeleteModal, onOpenEditModal, onOpenViewForm, openSidebar, useAppDispatch, useAppSelector } from '../store';

export const useUiStore = () => {

    const { isOpenSidebar, isOpenViewForm, isOpenEditModal, isOpenDeleteModal } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    //SideBar
    const onOpenSideBar = () => {
        dispatch(openSidebar());
    };

    const onCloseSidebar = () => {
        dispatch(closeSidebar());
    };

    // View Form Document
    const onChangeStateViewForm = (value: boolean) => {
        return (value) ? dispatch(onOpenViewForm()) : dispatch(onCloseViewForm());
    };

    const startOpenEditModal = () => {
        dispatch(onOpenEditModal());
    };

    const startCloseEditModal = () => {
        dispatch(onCloseEditModal());
    };

    const startOpenDeleteModal = () => {
        dispatch(onOpenDeleteModal());
    };

    const startCloseDeleteModal = () => {
        dispatch(onCloseDeleteModal());
    };

    return {

        // Properties
        isOpenSidebar,
        isOpenViewForm,
        isOpenDeleteModal,
        isOpenEditModal,

        //Methods
        onOpenSideBar,
        onCloseSidebar,
        startOpenDeleteModal,
        startCloseDeleteModal,
        startOpenEditModal,
        startCloseEditModal,
        onChangeStateViewForm,
    };
};