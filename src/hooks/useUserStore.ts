
import { SireciApi } from "../api/sireciApi";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingUsers, onLoadUsers, onRegisterNewUser, onSendMessageAlert } from "../store/users/userSlice";


export const useUserStore = () => {

    const { users, isLoadingUsers, messageAlert } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    const getAllUsers = async () => {

        dispatch(onCheckingUsers());

        try {
            const { data: AllUsers } = await SireciApi().get('/users');
            dispatch(onLoadUsers(AllUsers.data));
        } catch (error) {
            return [];
        };
    };

    const startRegisterNewUser = async (values: any) => {

        dispatch(onRegisterNewUser(true));

        try {
            await SireciApi().post('/auth/register', values);
            dispatch(onRegisterNewUser(false));
            return true;
        } catch (error) {
            return false;
        };
    };

    const startShowAlertMessage = (message: string | undefined) => {
        dispatch(onSendMessageAlert(message));
    };

    return {
        // Properties
        users,
        isLoadingUsers,
        messageAlert,

        // Methods
        getAllUsers,
        startRegisterNewUser,
        startShowAlertMessage
    };
};