import { closeSidebar, onCloseEditModal, onCloseViewForm, onOpenEditModal, onOpenViewForm, openSidebar, useAppDispatch, useAppSelector } from "../store";

export const useUiStore = () => {

    const { isOpenSidebar, isOpenViewForm, isOpenEditModal } = useAppSelector((state) => state.ui);
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

    return {

        // Properties
        isOpenSidebar,
        isOpenViewForm,
        isOpenEditModal,

        //Methods
        onOpenSideBar,
        onCloseSidebar,
        startOpenEditModal,
        startCloseEditModal,
        onChangeStateViewForm
    };
};