import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { HiDocumentArrowUp, HiXCircle } from 'react-icons/hi2';

import { MarriageDocumentValidations, PersonOptions } from '../../../helpers';
import { ErrorText, MessageAlert, SearchPerson, ToastAlert } from '../../components';
import { useAuthStore, useDocumentsStore, useUiStore } from '../../../hooks';
import { Bounce, toast } from 'react-toastify';


const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '' };

export const FormRegister = () => {

    const { userSession } = useAuthStore();
    const { startRegisterMarriageDoc, startSendSuccessMessage } = useDocumentsStore();
    const { onChangeStateViewForm } = useUiStore();

    const [errorSearch, setErrorSearch] = useState({ errorHusband: false, errorWife: false });
    const [personsToAdd, setPersonsToAdd] = useState({ mar_husband: PersonObject, mar_wife: PersonObject });

    const handleSubmit = async (values: any) => {

        if (personsToAdd.mar_husband._id === '' || personsToAdd.mar_wife._id === '') {
            setErrorSearch({ errorHusband: (personsToAdd.mar_husband._id === '') ? true : false, errorWife: (personsToAdd.mar_wife._id === '') ? true : false });
        } else {
            setErrorSearch({ errorHusband: false, errorWife: false });
            const marriageDocument = {
                user_user_id: userSession.id,
                mar_husband: personsToAdd.mar_husband._id,
                mar_wife: personsToAdd.mar_wife._id,
                mar_date: values.mar_date
            };

            const success = await startRegisterMarriageDoc(marriageDocument);
            if (success) {
                onChangeStateViewForm(false)
                startSendSuccessMessage('Certificado registrado exitosamente!');
            } else {
                toast.error('Ocurrio un error al momento de registrar', { transition: Bounce });
            };
        };
    };

    return (
        <>
            <Formik
                initialValues={{ mar_date: '', codigo: '' }}
                validationSchema={MarriageDocumentValidations}
                onSubmit={handleSubmit}
            >
                {({ errors, values }) => (
                    <Form>
                        <div className="flex flex-row w-full gap-x-4">
                            <div className="w-1/2 flex flex-col">
                                <h2 className="font-semibold bg-gray-900 text-white rounded-lg text-center py-2">Datos del marido</h2>
                                <div className="mt-2">
                                    <SearchPerson error={errorSearch.errorHusband} placeHolder="Buscar al esposo" getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, mar_husband: person })} />
                                    {(errorSearch.errorHusband) && <ErrorText />}
                                </div>
                            </div>

                            <div className="w-1/2 flex flex-col">
                                <h2 className="font-semibold bg-gray-900 text-white rounded-lg text-center py-2">Datos de la esposa</h2>
                                <div className="mt-2">
                                    <SearchPerson error={errorSearch.errorWife} placeHolder="Buscar a la esposa" getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, mar_wife: person })} />
                                    {(errorSearch.errorWife) && <ErrorText />}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-4 mt-4">
                            <div className="w-1/2">
                                <label htmlFor="codigo" className="font-semibold text-sm">Código de acta</label>
                                <Field type="text" id="codigo" name="codigo" className="text-sm mt-2 py-2 px-3 w-full rounded-lg border focus:outline-none bg-white shadow-lg shadow-gray-300 border-gray-400" />
                                <ErrorMessage name="codigo" component={() => <MessageAlert message={errors.codigo} />} />
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="mar_date" className="font-semibold text-sm">Fecha Registro</label>
                                <Field type="date" id="mar_date" name="mar_date" className="text-sm mt-2 py-2 px-3 w-full rounded-lg border focus:outline-none bg-white shadow-lg shadow-gray-300 border-gray-400" />
                                <ErrorMessage name="mar_date" component={() => <MessageAlert message={errors.mar_date} />} />
                            </div>
                        </div>

                        <div className="flex flex-row mt-24 w-full justify-center gap-x-12 text-white font-semibold">
                            <button type="submit" className="flex items-center gap-x-2 bg-green-700 px-7 py-2 rounded-lg shadow-lg shadow-green-950 hover:shadow-md hover:shadow-green-900 duration-300">
                                <HiDocumentArrowUp className="text-lg" />
                                Registrar
                            </button>
                            <button type="reset" className="flex items-center gap-x-2 bg-red-700 px-7 py-2 rounded-lg shadow-lg shadow-red-950 hover:shadow-md hover:shadow-red-900 duration-300">
                                <HiXCircle className="text-lg" />
                                Cancelar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik >
            <ToastAlert />
        </>
    );
};
