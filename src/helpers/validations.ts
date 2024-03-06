import * as Yup from 'yup';

const expRegString = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

export const loginValidations = Yup.object({
    email: Yup.string().email('El Email no es válido').required('Su Email es requerido'),
    password: Yup.string().min(8, 'Debe ser de al menos 8 caracteres').required('Debes ingresar tu contraseña')
});


export const BirthDocumentValidations = Yup.object({
    // principalPerson: Yup.string().matches(expRegString, 'Ingrese solo letras').required('Este campo es requerido'),
    // motherPerson: Yup.string().matches(expRegString, 'Ingrese solo letras').required('Este campo es requerido'),
    // fatherPerson: Yup.number().required('Este campo es requerido'),
    fecha: Yup.string().required('La fecha es requerida'),
    codigo: Yup.string().required('El código de acta es requerido'),
});