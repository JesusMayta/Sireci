import * as Yup from 'yup';

// const expRegString = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

export const LoginValidations = Yup.object({
    email: Yup.string().email('El Email no es válido').required('Su Email es requerido'),
    password: Yup.string().min(8, 'Debe ser de al menos 8 caracteres').required('Debes ingresar tu contraseña')
});


export const BirthDocumentValidations = Yup.object({
    birth_date: Yup.string().required('La fecha es requerida'),
    birth_book: Yup.string().required('Este campo es requerido'),
});

export const MarriageDocumentValidations = Yup.object({
    mar_date: Yup.string().required('La fecha es requerida'),
    mar_book: Yup.string().required('Este campo es requerido'),
});

export const DeathDocumentValidations = Yup.object({
    dea_date: Yup.string().required('La fecha es requerida'),
    dea_book: Yup.string().required('El código de acta es requerido'),
});

export const UserRegisterValidations = Yup.object({
    user_name: Yup.string().matches(/^[^\d]+$/, 'El nombre no puede contener números').required('El nombre es requerido'),
    user_first_lastname: Yup.string().matches(/^[^\d]+$/, 'El apellido no puede contener números').required('El apellido es requerido'),
    user_second_lastname: Yup.string().matches(/^[^\d]+$/, 'El apellido no puede contener números'),
    user_address: Yup.string().required('La dirección es requerida'),
    user_email: Yup.string().email('No es un email válido').required('El email es requerido'),
    user_password: Yup.string().min(8, 'Debe contener mínimo 8 caracteres').required('El password es requerido'),
    user_username: Yup.string().required('Este campo es requerido'),
});