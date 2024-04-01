import { ContentTableBirth, ContentTableDeath, ContentTableMarriage, ContentTableUsers, SortBirthDocuments, SortDeathDocuments, SortMarriageDocuments, SortUsers } from '.';
const expReg = /\s+/g;

export const FilterPeopleMarriage = (text: string, marriageDocuments: ContentTableMarriage[], filterSort: string) => {

    if (filterSort !== '') {
        return SortMarriageDocuments(marriageDocuments, filterSort);
    } else {
        return (text === '') ? marriageDocuments : marriageDocuments.filter((person: ContentTableMarriage) => person.mar_husband.per_names.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, '')) ||
            (person.mar_husband.per_first_lastname.toLowerCase().replace(expReg, '')
                .includes(text.toLowerCase().replace(expReg, ''))) ||
            (person.mar_wife.per_names.toLowerCase().replace(expReg, '').replace(expReg, '').includes(text.replace(expReg, ''))) ||
            (person.mar_wife.per_first_lastname.toLowerCase().replace(expReg, '')
                .includes(text.toLowerCase().replace(expReg, '')))
        );
    };
};

export const FilterPeopleBirth = (text: string, birthDocuments: ContentTableBirth[], filterSort: string) => {

    if (filterSort !== '') {
        return SortBirthDocuments(birthDocuments, filterSort);
    } else {
        return (text === '') ? birthDocuments : birthDocuments.filter((person: ContentTableBirth) => person.person_per_id.per_names.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, '')) ||
            (person.person_per_id.per_first_lastname.toLowerCase().replace(expReg, '')
                .includes(text.toLowerCase().replace(expReg, ''))) ||
            (person.person_per_id.per_document_number.replace(expReg, '').includes(text.replace(expReg, ''))) ||
            (person.birth_book.toLowerCase().replace(expReg, '').includes(text.replace(expReg, ''))));
    };
};

export const FilterPeopleDeath = (text: string, deathDocuments: ContentTableDeath[], filterSort: string) => {

    if (filterSort !== '') {
        return SortDeathDocuments(deathDocuments, filterSort);
    } else {
        return (text === '') ? deathDocuments : deathDocuments.filter((person: ContentTableDeath) => person.person_per_id.per_names.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, '')) ||
            (person.person_per_id.per_first_lastname.toLowerCase().replace(expReg, '')
                .includes(text.toLowerCase().replace(expReg, ''))) ||
            (person.person_per_id.per_document_number.replace(expReg, '').includes(text.replace(expReg, ''))) ||
            (person.dea_book.replace(expReg, '').includes(text.replace(expReg, ''))));
    };
};

export const FilterUsers = (text: string, allUsers: ContentTableUsers[], filterSort: string) => {
    if (filterSort !== '') {
        return SortUsers(allUsers, filterSort);
    } else {
        return (text === '') ? allUsers : allUsers.filter((person: ContentTableUsers) => person.user_name.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, '')) ||
            (person.user_first_lastname.toLowerCase().replace(expReg, '')
                .includes(text.toLowerCase().replace(expReg, ''))) ||
            (person.user_username.toLowerCase().replace(expReg, '').includes(text.replace(expReg, ''))) ||
            (person.user_email.toLowerCase().replace(expReg, '').includes(text.replace(expReg, ''))));
    };
};