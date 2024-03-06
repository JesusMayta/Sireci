import { SireciApi } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { onCheckingPeople, onLoadPeople, onSearchPeople, setEmptyPeople } from "../store/people/peopleSlice";


export const usePeopleStore = () => {

    const { people, isLoadingPeople, textFindPeople } = useAppSelector((state) => state.people);
    const dispatch = useAppDispatch();

    const getAllPersons = async () => {

        dispatch(onCheckingPeople());

        try {
            const { data: AllPeople } = await SireciApi().get('/people');
            dispatch(onLoadPeople(AllPeople.data));
        } catch (error) {
            dispatch(setEmptyPeople());
        };
    };

    const startSearchPeople = (inputText: string) => {
        // console.log(inputText);
        dispatch(onSearchPeople(inputText));
    };

    return {

        //Properties
        isLoadingPeople,
        people,
        textFindPeople,

        //Methods
        getAllPersons,
        startSearchPeople
        // getPersonByName
    };
};
