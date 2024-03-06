import { closeSidebar, onCloseViewForm, onOpenViewForm, openSidebar, useAppDispatch, useAppSelector } from "../store";

export const useUiStore = () => {

    const { isOpenSidebar, isOpenViewForm } = useAppSelector((state) => state.ui);
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

    return {

        // Properties
        isOpenSidebar,
        isOpenViewForm,

        //Methods
        onOpenSideBar,
        onCloseSidebar,

        onChangeStateViewForm
    };
};