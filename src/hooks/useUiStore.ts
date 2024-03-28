import { onOpenDeleteModal, onOpenEditModal, onOpenSidebar, onOpenViewForm, onSetTextToSort, useAppDispatch, useAppSelector } from '../store';

export const useUiStore = () => {

    const { isOpenSidebar, isOpenViewForm, isOpenEditModal, isOpenDeleteModal, textToSort } = useAppSelector((state) => state.ui);
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

    const startSelectSort = (value: string) => {
        dispatch(onSetTextToSort(value));
    };

    return {

        //*Properties
        isOpenSidebar,
        isOpenViewForm,
        isOpenDeleteModal,
        isOpenEditModal,
        textToSort,

        //*Methods
        startOpenSidebar,
        startOpenViewForm,
        startOpenEditModal,
        startOpenDeleteModal,
        startSelectSort
    };
};