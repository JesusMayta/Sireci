import { ContentTableBirth, ContentTableDeath, ContentTableMarriage, PersonOptions } from '.';

const expReg = /\s+/g;

export const FilterPeopleMarriage = (text: string, marriageDocuments: ContentTableMarriage[]) => {

    return (text === '') ? marriageDocuments : marriageDocuments.filter((person: ContentTableMarriage) => person.mar_husband.per_names.toLowerCase().replace(expReg, '')
        .includes(text.toLowerCase().replace(expReg, '')) ||
        (person.mar_husband.per_first_lastname.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, ''))) ||
        (person.mar_wife.per_names.toLowerCase().replace(expReg, '').replace(expReg, '').includes(text.replace(expReg, ''))) ||
        (person.mar_wife.per_first_lastname.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, '')))
    );
};

export const FilterPeopleBirth = (text: string, birthDocuments: ContentTableBirth[]) => {
    return (text === '') ? birthDocuments : birthDocuments.filter((person: ContentTableBirth) => person.person_per_id.per_names.toLowerCase().replace(expReg, '')
        .includes(text.toLowerCase().replace(expReg, '')) ||
        (person.person_per_id.per_first_lastname.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, ''))) ||
        (person.person_per_id.per_document_number.replace(expReg, '').includes(text.replace(expReg, ''))) ||
        (person.birth_book.toLowerCase().replace(expReg, '').includes(text.replace(expReg, ''))));
};

export const FilterPeopleDeath = (text: string, deathDocuments: ContentTableDeath[]) => {

    return (text === '') ? deathDocuments : deathDocuments.filter((person: ContentTableDeath) => person.person_per_id.per_names.toLowerCase().replace(/\s+/g, '')
        .includes(text.toLowerCase().replace(expReg, '')) ||
        (person.person_per_id.per_first_lastname.toLowerCase().replace(expReg, '')
            .includes(text.toLowerCase().replace(expReg, ''))) ||
        (person.person_per_id.per_document_number.replace(expReg, '').includes(text.replace(expReg, ''))) ||
        (person.dea_book.replace(expReg, '').includes(text.replace(expReg, ''))));
}