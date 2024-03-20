import { ContentTableBirth, ContentTableDeath, ContentTableMarriage } from ".";

export const FilterPeopleMarriage = (text: string, marriageDocuments: ContentTableMarriage[]) => {
    return (text === '') ? marriageDocuments : marriageDocuments.filter((person: ContentTableMarriage) => person.mar_husband.per_names.toLowerCase().replace(/\s+/g, '')
        .includes(text.toLowerCase().replace(/\s+/g, '')) ||
        (person.mar_husband.per_first_lastname.toLowerCase().replace(/\s+/g, '')
            .includes(text.toLowerCase().replace(/\s+/g, ''))) ||
        (person.mar_wife.per_names.toLowerCase().replace(/\s+/g, '').replace(/\s+/g, '').includes(text.replace(/\s+/g, ''))) ||
        (person.mar_wife.per_first_lastname.toLowerCase().replace(/\s+/g, '')
            .includes(text.toLowerCase().replace(/\s+/g, '')))
    )
};

export const FilterPeopleBirth = (text: string, birthDocuments: ContentTableBirth[]) => {

    return (text === '') ? birthDocuments : birthDocuments.filter((person: ContentTableBirth) => person.person_per_id.per_names.toLowerCase().replace(/\s+/g, '')
        .includes(text.toLowerCase().replace(/\s+/g, '')) ||
        (person.person_per_id.per_first_lastname.toLowerCase().replace(/\s+/g, '')
            .includes(text.toLowerCase().replace(/\s+/g, ''))) ||
        (person.person_per_id.per_document.replace(/\s+/g, '').includes(text.replace(/\s+/g, '')))
    )
};

export const FilterPeopleDeath = (text: string, deathDocuments: ContentTableDeath[]) => {

    return (text === '') ? deathDocuments : deathDocuments.filter((person: ContentTableDeath) => person.person_per_id.per_names.toLowerCase().replace(/\s+/g, '')
        .includes(text.toLowerCase().replace(/\s+/g, '')) ||
        (person.person_per_id.per_first_lastname.toLowerCase().replace(/\s+/g, '')
            .includes(text.toLowerCase().replace(/\s+/g, ''))) ||
        (person.person_per_id.per_document_number.replace(/\s+/g, '').includes(text.replace(/\s+/g, ''))));
}