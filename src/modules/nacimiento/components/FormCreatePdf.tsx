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

export const FormCreatePdf = () => {

    const { userSession } = useAuthStore();
    const { startRegisterBirthDocument } = useDocumentsStore();
    const { onChangeStateViewForm } = useUiStore();

    const [pdfCreated, setCreatedPdf] = useState<boolean>(false);
    const [errorSubmit, setErrorSubmit] = useState<boolean>(false);
    const [personsToAdd, setPersonsToAdd] = useState({ principal_person: PersonObject, birth_mother: PersonObject, birth_father: PersonObject });

    const onCreatePdf = () => {
        if (personsToAdd.principal_person._id === '' || personsToAdd.birth_father._id === '' || personsToAdd.birth_mother._id === '') return;
        setCreatedPdf(true);
    };

    const handleSubmit = async (values: any) => {

        const registerBirthDocument = {
            ...values,
            user_user_id: userSession.id,
            person_per_id: personsToAdd.principal_person._id,
            birth_mother: personsToAdd.birth_mother._id,
            birth_father: personsToAdd.birth_father._id
        };
        const success = await startRegisterBirthDocument(registerBirthDocument);

        if (success) {
            onChangeStateViewForm(false)
        } else {
            AlertError('Ocurrio un error a la hora de registrar el acta :(');
            setErrorSubmit(true);
        };
    };

    return (
        <>
            <Formik
                initialValues={{ birth_date: '', codigo: '' }}
                validationSchema={BirthDocumentValidations}
                onSubmit={handleSubmit}
            >
                {({ errors, values, touched }) => (
                    <Form>
                        <div className="flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <p className="text-sm font-semibold">Persona a registrar:</p>
                                <SearchPerson placeHolder="Buscar persona..." getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, principal_person: person })} />
                            </div>

                            <div className="w-full sm:w-1/2 flex flex-col mt-6 sm:mt-0">
                                <p className="text-sm font-semibold">Padre de la persona:</p>
                                <SearchPerson placeHolder="Buscar al padre..." getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, birth_father: person })} />
                            </div>
                        </div>

                        <div className="mt-3 flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                            <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0">
                                <p className="font-semibold text-sm">Madre de la persona:</p>
                                <SearchPerson placeHolder="Buscar a la madre..." getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, birth_mother: person })} />
                            </div>

                            <div className="w-full sm:w-1/2 flex flex-col mt-6 sm:mt-0">
                                <label htmlFor="codigo" className="text-sm font-semibold">Código de acta:</label>
                                <Field type="text" id="codigo" name="codigo" className={` ${styles.input_field} ${(!errors.codigo || !touched.codigo) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                <ErrorMessage name="codigo" component={() => <MessageAlert message={errors.codigo} />} />
                            </div>
                        </div>

                        <div className="mt-3 flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                            <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0">
                                <label htmlFor="birth_date" className="font-semibold text-sm ">Fecha de nacimiento:</label>
                                <Field type="date" id="birth_date" name="birth_date" className={` ${styles.input_field} ${(!errors.birth_date || !touched.birth_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                <ErrorMessage name="birth_date" component={() => <MessageAlert message={errors.birth_date} />} />
                            </div>

                            <div className="w-full sm:w-1/2 mt-6">
                                {(!pdfCreated) ? (<GeneratePdf createPdf={onCreatePdf} />) : (<PdfDownload doc={<BirthPdf people={personsToAdd} user={`${userSession.name} ${userSession.lastName}`} {...values} />} />)}
                            </div>
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
            {(errorSubmit) && <ToastContainer />}
        </>
    );
};
