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
    errorMessage: string | undefined
};

export interface PersonOptions {
    _id: string;
    per_names: string;
    per_first_lastname: string;
    per_document: string;
    per_state: boolean;
};


export interface ContentTableBirth {
    _id: string;
    birth_book: string;
    birth_father: string;
    birth_mother: string;
    person_per_id: {
        _id: string;
        per_names: string;
        per_first_lastname: string;
        per_document: string;
    };
    user_user_id: string;
};

export interface ContentTableMarriage {
    _id: string,
    mar_book: string,
    mar_husband: {
        _id: string,
        per_names: string;
        per_first_lastname: string;
        per_document: string;
        per_state: boolean
    },
    mar_wife: {
        _id: string;
        per_names: string;
        per_first_lastname: string,
        per_document: string;
        per_state: boolean
    },
    mar_file: string;
    mar_state: boolean;
    user_user_id: string;
    mar_date: string;
}
