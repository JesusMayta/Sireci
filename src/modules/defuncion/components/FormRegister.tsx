import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ErrorText, MessageAlert, SearchPerson, ToastAlert } from '../../components';
import { useState } from 'react';
import { DeathDocumentValidations, PersonOptions } from '../../../helpers';
import { useAuthStore, useDeathDocsStore, useUiStore } from '../../../hooks';
import { Bounce, toast } from 'react-toastify';
import { HiDocumentArrowUp, HiXCircle } from 'react-icons/hi2';

export const FormRegister = () => {

    const { userSession } = useAuthStore();
    const { startRegisterDeathDoc, startShowMessageDeath } = useDeathDocsStore();
    const { startOpenViewForm } = useUiStore();

    const [person, setPerson] = useState<PersonOptions>({ _id: '', per_document: '', per_document_number: '', per_names: '', per_state: false, per_first_lastname: '' });
    const [errorPerson, setErrorPerson] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        if (person._id === '') {
            setErrorPerson((person._id === '') ? true : false);
            return;
        } else {
            setErrorPerson(false);
            const success = await startRegisterDeathDoc({
                ...values,
                user_user_id: userSession.id,
                person_per_id: person._id,
            });

            if (success) {
                startOpenViewForm(false)
                startShowMessageDeath('Certificado registrado exitosamente!');
            } else {
                toast.error('Ocurrio un error al momento de registrar', { transition: Bounce });
            };
        };
    };

    return (
        <>
            <Formik
                initialValues={{ dea_date: '', dea_book: '' }}
                validationSchema={DeathDocumentValidations}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="w-full mt-12 sm:mt-0">
                            <h2 className="w-full bg-gray-950 text-white font-semibold text-center py-1 sm:py-3 rounded-lg text-sm sm:text-base">Datos del dinfunto</h2>

                            <div className="mt-4 flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16 text-sm sm:text-base">
                                <div className="w-full sm:w-1/2">
                                    <p className="font-semibold">Persona difunta:</p>
                                    <SearchPerson inputText='' error={errorPerson} getPerson={(person: PersonOptions) => setPerson(person)} placeHolder="Buscar al difunto..." />
                                    {(errorPerson) && <ErrorText />}
                                </div>

                                <div className="w-full sm:w-1/2 flex flex-col mt-3 sm:mt-0">
                                    <label htmlFor="dea_date" className="font-semibold">Fecha de fallacimento:</label>
                                    <Field type="date" name="dea_date" className={`input_field ${(!errors.dea_date || !touched.dea_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                    <ErrorMessage name="dea_date" component={() => <MessageAlert message={errors.dea_date} />} />
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col text-sm sm:text-base">
                                <div className="w-full sm:w-1/2 pe-0 sm:pe-4 xl:pe-3 2xl:pe-8">
                                    <label htmlFor="dea_book" className="font-semibold">Código de acta:</label>
                                    <Field type="text" name="dea_book" placeholder="ej:dea89211" className={`input_field ${(!errors.dea_book || !touched.dea_book) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                    <ErrorMessage name="dea_book" component={() => <MessageAlert message={errors.dea_book} />} />
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
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastAlert />
        </>
    );
};
