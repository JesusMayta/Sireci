import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { HiDocumentArrowUp, HiXCircle } from 'react-icons/hi2';

import { BirthDocumentValidations, PersonOptions } from '../../../helpers';
import { ErrorText, MessageAlert, SearchPerson, ToastAlert } from '../../components';
import { useAuthStore, useDocumentsStore, useUiStore } from '../../../hooks';
import { Bounce, toast } from 'react-toastify';

const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '' };

export const FormRegister = () => {

    const { userSession } = useAuthStore();
    const { startRegisterBirthDocument, startSendSuccessMessage } = useDocumentsStore();
    const { onChangeStateViewForm } = useUiStore();

    const [errorSearch, setErrorSearch] = useState({ errorPerson: false, errorFather: false, errorMother: false });
    const [personsToAdd, setPersonsToAdd] = useState({ principal_person: PersonObject, birth_mother: PersonObject, birth_father: PersonObject });

    const handleSubmit = async (values: any) => {

        if (personsToAdd.principal_person._id === '' || personsToAdd.birth_father._id === '' || personsToAdd.birth_mother._id === '') {
            setErrorSearch({
                errorFather: (personsToAdd.birth_father._id === '') ? true : false,
                errorMother: (personsToAdd.birth_mother._id === '') ? true : false,
                errorPerson: (personsToAdd.principal_person._id === '') ? true : false
            });
            return;
        } else {
            setErrorSearch({ errorPerson: false, errorMother: false, errorFather: false });
            const success = await startRegisterBirthDocument({
                ...values,
                user_user_id: userSession.id,
                person_per_id: personsToAdd.principal_person._id,
                birth_mother: personsToAdd.birth_mother._id,
                birth_father: personsToAdd.birth_father._id
            });

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
                initialValues={{ birth_date: '', codigo: '' }}
                validationSchema={BirthDocumentValidations}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <p className="text-sm font-semibold">Persona a registrar:</p>
                                <SearchPerson error={errorSearch.errorPerson} placeHolder="Buscar persona..." getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, principal_person: person })} />
                                {(errorSearch.errorPerson) && <ErrorText />}
                            </div>
                            <div className="w-full sm:w-1/2 flex flex-col mt-3 sm:mt-0">
                                <p className="text-sm font-semibold">Padre de la persona:</p>
                                <SearchPerson error={errorSearch.errorFather} placeHolder="Buscar al padre..." getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, birth_father: person })} />
                                {(errorSearch.errorFather) && <ErrorText />}
                            </div>
                        </div>

                        <div className="mt-1 sm:mt-3 flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                            <div className="flex flex-col w-full sm:w-1/2 mt-3 sm:mt-0">
                                <p className="font-semibold text-sm">Madre de la persona:</p>
                                <SearchPerson error={errorSearch.errorMother} placeHolder="Buscar a la madre..." getPerson={(person: PersonOptions) => setPersonsToAdd({ ...personsToAdd, birth_mother: person })} />
                                {(errorSearch.errorMother) && <ErrorText />}
                            </div>
                            <div className="w-full sm:w-1/2 flex flex-col mt-3 sm:mt-0">
                                <label htmlFor="codigo" className="text-sm font-semibold">Código de acta:</label>
                                <Field type="text" id="codigo" name="codigo" className={`input_field ${(!errors.codigo || !touched.codigo) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                <ErrorMessage name="codigo" component={() => <MessageAlert message={errors.codigo} />} />
                            </div>
                        </div>

                        <div className="mt-1 sm:mt-3 flex flex-col w-full">
                            <div className="flex flex-col w-full sm:w-1/2 pe-0 sm:pe-4 xl:pe-3 2xl:pe-8 mt-3 sm:mt-0">
                                <label htmlFor="birth_date" className="font-semibold text-sm ">Fecha de nacimiento:</label>
                                <Field type="date" id="birth_date" name="birth_date" className={`input_field ${(!errors.birth_date || !touched.birth_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                <ErrorMessage name="birth_date" component={() => <MessageAlert message={errors.birth_date} />} />
                            </div>
                        </div>

                        <div className="flex flex-row mt-10 sm:mt-16 w-full justify-center gap-x-12 text-white font-semibold">
                            <button type="submit" className="flex items-center gap-x-2 bg-green-700 px-7 py-2 rounded-lg shadow-lg shadow-green-950 hover:shadow-md hover:shadow-green-900 duration-300">
                                <HiDocumentArrowUp className="text-lg" />
                                Registrar
                            </button>
                            <button type="reset" className="flex items-center gap-x-2 bg-red-700 px-7 py-2 rounded-lg shadow-lg shadow-red-950 hover:shadow-md hover:shadow-red-900 duration-300">
                                <HiXCircle className="text-xl" />
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
