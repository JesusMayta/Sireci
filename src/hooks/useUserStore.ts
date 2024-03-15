import { SireciApi } from "../api/sireciApi";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingUsers, onLoadUsers } from "../store/users/userSlice";


export const useUserStore = () => {

    const { users, isLoadingUsers } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    const getAllUsers = async () => {

        dispatch(onCheckingUsers());

        try {
            const { data: AllUsers } = await SireciApi().get('/users');
            dispatch(onLoadUsers(AllUsers.data));
            console.log(AllUsers);
        } catch (error) {
            console.log(error);
        };
    };

    return {
        // Properties
        users,
        isLoadingUsers,

        // Methods
        getAllUsers,
    }

};