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