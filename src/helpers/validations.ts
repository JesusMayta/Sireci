import * as Yup from 'yup';

export const loginValidations = Yup.object({
    email: Yup.string().email('El Email no es válido').required('Su Email es requerido'),
    password: Yup.string().min(8, 'Debe ser de al menos 8 caracteres').required('Debes ingresar tu contraseña')
});
