import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { HiDocumentArrowUp, HiXCircle } from 'react-icons/hi2';

import { MarriageDocumentValidations, PersonOptions } from '../../../helpers';
import { ErrorText, MessageAlert, SearchPerson, ToastAlert } from '../../components';
import { useAuthStore, useMarriageDocsStore, useUiStore } from '../../../hooks';
import { Bounce, toast } from 'react-toastify';


const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '' };

export const FormRegister = () => {

    const { userSession } = useAuthStore();
    const { startRegisterMarriageDoc, startShowMarriageAlert } = useMarriageDocsStore();
    const { startOpenViewForm } = useUiStore();

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
                ...values
            };

            const success = await startRegisterMarriageDoc(marriageDocument);
            if (success) {
                startOpenViewForm(false)
                startShowMarriageAlert('Certificado registrado exitosamente!');
            } else {
                toast.error('Ocurrio un error al momento de registrar', { transition: Bounce });
            };
        };
    };

    return (
        <>
            <Formik
                initialValues={{ mar_date: '', mar_book: '' }}
                validationSchema={MarriageDocumentValidations}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="flex flex-col sm:flex-row w-full gap-x-4 mt-10 sm:mt-20">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <p className="font-semibold rounded-lg text-left text-sm">Datos del esposo:</p>
                                <div className="mt-1">
                                    <SearchPerson inputText='' error={errorSearch.errorHusband} placeHolder="Buscar al esposo" getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, mar_husband: person })} />
                                    {(errorSearch.errorHusband) && <ErrorText />}
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 flex flex-col mt-4 sm:mt-0">
                                <p className="font-semibold rounded-lg text-left text-sm">Datos de la esposa:</p>
                                <div className="mt-1">
                                    <SearchPerson inputText='' error={errorSearch.errorWife} placeHolder="Buscar a la esposa" getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, mar_wife: person })} />
                                    {(errorSearch.errorWife) && <ErrorText />}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-x-4 mt-3 sm:mt-6 w-full">
                            <div className="flex flex-col w-full sm:w-1/2 mt-1 sm:mt-0">
                                <label htmlFor="mar_book" className="font-semibold text-sm">Libro de acta</label>
                                <Field type="text" id="mar_book"
                                    placeholder="mar-1221"
                                    name="mar_book"
                                    className={`input_field ${(!errors.mar_book || !touched.mar_book) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                <ErrorMessage name="mar_book" component={() => <MessageAlert message={errors.mar_book} />} />
                            </div>

                            <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0">
                                <label htmlFor="mar_date" className="font-semibold text-sm">Fecha Registro</label>
                                <Field type="date" id="mar_date" name="mar_date" className={`input_field ${(!errors.mar_date || !touched.mar_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                <ErrorMessage name="mar_date" component={() => <MessageAlert message={errors.mar_date} />} />
                            </div>
                        </div>

                        <div className="flex flex-row mt-10 pb-6 sm:mt-16 w-full justify-center gap-x-6 sm:gap-x-12 text-white font-semibold text-xs sm:text-base">
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
