import { sort } from 'fast-sort';
import { ContentTableBirth, ContentTableDeath, ContentTableMarriage, ContentTableUsers } from '.';


export const SortBirthDocuments = (birthDocuments: ContentTableBirth[], filterSort: string) => {

    let birthSorted: any;

    switch (filterSort) {
        case 'Dni':
            birthSorted = sort(birthDocuments).asc(person => person.person_per_id.per_document_number);
            break;
        case 'Nombres':
            birthSorted = sort(birthDocuments).asc(person => person.person_per_id.per_names);
            break;
        case 'Libro':
            birthSorted = sort(birthDocuments).asc(person => person.birth_book);
            break;
        default:
            birthSorted = birthDocuments;
            break;
    };
    return birthSorted;
};

export const SortMarriageDocuments = (marriageDocuments: ContentTableMarriage[], filterSort: string) => {

    let marriageSort: any;

    switch (filterSort) {
        case 'Esposo':
            marriageSort = sort(marriageDocuments).asc(person => person.mar_husband.per_names);
            break;
        case 'Esposa':
            marriageSort = sort(marriageDocuments).asc(person => person.mar_wife.per_names);
            break;
        case 'Libro':
            marriageSort = sort(marriageDocuments).asc(person => person.mar_book);
            break;
        default:
            marriageSort = marriageDocuments;
            break;
    };
    return marriageSort;

};

export const SortDeathDocuments = (deathDocuments: ContentTableDeath[], filterSort: string) => {

    let deathSorted: any;

    switch (filterSort) {
        case 'Dni':
            deathSorted = sort(deathDocuments).asc(person => person.person_per_id.per_document_number);
            break;
        case 'Nombres':
            deathSorted = sort(deathDocuments).asc(person => person.person_per_id.per_names);
            break;
        case 'Libro':
            deathSorted = sort(deathDocuments).asc(person => person.dea_book);
            break;
        default:
            deathSorted = deathDocuments;
            break;
    };
    return deathSorted;
};

export const SortUsers = (allUsers: ContentTableUsers[], filterSort: string) => {

    let sortedUsers: any;

    switch (filterSort) {
        case 'Nombres':
            sortedUsers = sort(allUsers).asc(person => person.user_name);
            break;
        case 'Apellidos':
            sortedUsers = sort(allUsers).asc(person => person.user_first_lastname);
            break;
        case 'Username':
            sortedUsers = sort(allUsers).asc(person => person.user_username);
            break;
        case 'Email':
            sortedUsers = sort(allUsers).asc(person => person.user_email);
            break;
        default:
            sortedUsers = allUsers;
            break;
    };
    return sortedUsers;
};

