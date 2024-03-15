import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ErrorText, MessageAlert, SearchPerson, ToastAlert } from '../../components';
import { useState } from 'react';
import { DeathDocumentValidations, PersonOptions } from '../../../helpers';
import { useDeathDocsStore, useUiStore } from '../../../hooks';
import { Bounce, toast } from 'react-toastify';

export const FormRegister = ({ user }: { user: string }) => {


    const { startRegisterDeathDoc, startSendSuccessMessage } = useDeathDocsStore();
    const { onChangeStateViewForm } = useUiStore();

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
                user_user_id: user,
                person_per_id: person._id,
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
                initialValues={{ dea_date: '', codigo: '' }}
                validationSchema={DeathDocumentValidations}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="w-full">
                            <h2 className="w-full bg-gray-950 text-white font-semibold text-center py-3 rounded-lg">Datos del dinfunto</h2>

                            <div className="mt-4 flex flex-row gap-x-8">
                                <div className="w-1/2">
                                    <p className="font-semibold">Persona difunta:</p>
                                    <SearchPerson inputText='' error={errorPerson} getPerson={(person: PersonOptions) => setPerson(person)} placeHolder="Buscar al difunto..." />
                                    {(errorPerson) && <ErrorText />}
                                </div>

                                <div className="w-1/2">
                                    <label htmlFor="dea_date" className="font-semibold">Fecha de fallacimento:</label>
                                    <Field type="date" name="dea_date" className={`input_field ${(!errors.dea_date || !touched.dea_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                    <ErrorMessage name="dea_date" component={() => <MessageAlert message={errors.dea_date} />} />
                                </div>
                            </div>

                            <div className="mt-4 flex flex-row gap-x-8">
                                <div className="w-1/2">
                                    <label htmlFor="dea_date" className="font-semibold">Código de acta:</label>
                                    <Field type="text" name="codigo" placeholder="ej:dea89211" className={`input_field ${(!errors.codigo || !touched.codigo) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                    <ErrorMessage name="codigo" component={() => <MessageAlert message={errors.codigo} />} />
                                </div>
                            </div>

                            <div className="mt-20 flex justify-center gap-x-8 w-full">
                                <button type="submit" className="button_hover text-green-700 hover:before:bg-green-700 border-green-700 bg-green-50 before:bg-green-500 hover:shadow-green-800 before:left-0 hover:before:left-0"><span className="relative z-10 font-semibold">Registrar</span></button>

                                <button type="reset" className="button_hover text-red-600 hover:before:bg-red-700 border-red-700 bg-red-50 before:bg-red-500 hover:shadow-red-800 before:right-0 hover:before:right-0"><span className="relative z-10 font-semibold">Registrar</span></button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastAlert />
        </>
    );
};
