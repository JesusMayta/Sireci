export interface LoginOptions {
    email: string;
    password: string;
};

export interface AuthOptions {
    status: string;
    userSession: {
        id: string;
        name: string;
        lastName: string;
        address: string;
        email: string;
        isAdmin: number;
        isActive: number;
        username: string;
        password: string;
    };
    errorMessage: string | undefined;
};

export interface PersonOptions {
    _id: string;
    per_names: string;
    per_first_lastname: string;
    per_document: string;
    per_document_number: string;
    per_state: boolean;
};


export interface ContentTableBirth {
    _id: string;
    birth_book: string;
    birth_father: PersonOptions;
    birth_mother: PersonOptions;
    person_per_id: PersonOptions;
    birth_state: boolean;
    user_user_id: string;
    birth_date: string;
};

export interface ContentTableMarriage {
    _id: string,
    mar_book: string,
    mar_husband: PersonOptions;
    mar_wife: PersonOptions;
    mar_state: boolean;
    user_user_id: string;
    mar_date: string;
};

export interface ContentTableDeath {
    _id: string;
    dea_book: string;
    dea_state: boolean;
    person_per_id: PersonOptions;
    user_user_id: string;
    dea_date: string;
};

export interface ContentTableUsers {
    user_name: string;
    user_username: string;
    user_address: string;
    user_email: string;
    user_first_lastname: string;
    user_is_admin: number;
};

export interface ActiveCertificateBirth {
    _id: string;
    birth_book: string;
    birth_father: PersonOptions;
    birth_mother: PersonOptions;
    person_per_id: PersonOptions;
    birth_state: boolean;
    user_user_id: string;
    birth_date: string;
};

export interface ActiveCertificateMarriage {
    _id: string;
    mar_book: string;
    mar_husband: PersonOptions;
    mar_wife: PersonOptions;
    mar_state: boolean;
    user_user_id: string,
    mar_date: string;
};

export interface ActiveCertificateDeath {
    _id: string;
    dea_book: string;
    person_per_id: PersonOptions;
    user_user_id: string;
    dea_date: string;
};