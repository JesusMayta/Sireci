import * as Yup from 'yup';

// const expRegString = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

export const LoginValidations = Yup.object({
    email: Yup.string().email('El Email no es válido').required('Su Email es requerido'),
    password: Yup.string().min(8, 'Debe ser de al menos 8 caracteres').required('Debes ingresar tu contraseña')
});


export const BirthDocumentValidations = Yup.object({
    birth_date: Yup.string().required('La fecha es requerida'),
    codigo: Yup.string().length(8, 'El código debe tener 8 caracteres').required('El código de acta es requerido'),
});

export const MarriageDocumentValidations = Yup.object({
    mar_date: Yup.string().required('La fecha es requerida'),
    mar_book: Yup.string().required('Este campo es requerido'),
});

export const DeathDocumentValidations = Yup.object({
    dea_date: Yup.string().required('La fecha es requerida'),
    codigo: Yup.string().length(8, 'El código debe tener 8 caracteres').required('El código de acta es requerido'),
});