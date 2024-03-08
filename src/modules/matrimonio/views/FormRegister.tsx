import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { HiDocumentArrowUp, HiXCircle } from 'react-icons/hi2';
import { ToastContainer } from 'react-toastify';

import { BirthDocumentValidations, PersonOptions } from '../../../helpers';
import { BirthPdf, GeneratePdf, MessageAlert, PdfDownload, SearchPerson } from '../../components';
import { useAuthStore, useDocumentsStore, useUiStore } from '../../../hooks';
import styles from '../styles/BirthPage.module.css';
import { AlertError } from '../../../config';

const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '' };

export const FormRegister = () => {

    const { userSession } = useAuthStore();
    const { startRegisterBirthDocument } = useDocumentsStore();
    const { onChangeStateViewForm } = useUiStore();

    const [pdfCreated, setCreatedPdf] = useState<boolean>(false);
    const [errorSubmit, setErrorSubmit] = useState<boolean>(false);
    const [personsToAdd, setPersonsToAdd] = useState({ mar_husband: PersonObject, mar_wife: PersonObject });

    const onCreatePdf = () => {
        // if (personsToAdd.principal_person._id === '' || personsToAdd.birth_father._id === '' || personsToAdd.birth_mother._id === '') return;
        setCreatedPdf(true);
    };

    const handleSubmit = async (values: any) => {

    };

    return (
        <>
            <Formik
                initialValues={{ mar_date: '', codigo: '' }}
                validationSchema={BirthDocumentValidations}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <div className="flex flex-row w-full gap-x-4">
                            <div className="w-1/2 flex flex-col">
                                <h2 className="font-semibold bg-gray-900 text-white rounded-lg text-center py-2">Datos del marido</h2>
                                <div className="mt-2">
                                    <SearchPerson placeHolder="Buscar al esposo" getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, mar_husband: person })} />
                                </div>
                            </div>

                            <div className="w-1/2 flex flex-col">
                                <h2 className="font-semibold bg-gray-900 text-white rounded-lg text-center py-2">Datos de la esposa</h2>
                                <div className="mt-2">
                                    <SearchPerson placeHolder="Buscar a la esposa" getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, mar_wife: person })} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-4 mt-4">
                            <div className="w-1/2">
                                <label htmlFor="codigo" className="font-semibold">Código de acta</label>
                                <Field type="text" id="codigo" name="codigo" className="text-sm mt-2 py-2 px-3 w-full rounded-lg border focus:outline-none bg-white shadow-lg shadow-gray-300 border-gray-400" />
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="mar_date" className="font-semibold">Fecha Registro</label>
                                <Field type="date" id="mar_date" name="mar_date" className="text-sm mt-2 py-2 px-3 w-full rounded-lg border focus:outline-none bg-white shadow-lg shadow-gray-300 border-gray-400" />
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 mt-6 pe-2">
                            {(!pdfCreated) && (<GeneratePdf createPdf={onCreatePdf} />)}
                        </div>
                        {(pdfCreated) && (
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
                        )}
                    </Form>
                )}
            </Formik >
        </>
    );
};
