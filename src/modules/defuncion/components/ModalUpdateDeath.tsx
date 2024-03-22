import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Bounce, toast } from 'react-toastify';

import { DeathDocumentValidations, PersonOptions } from '../../../helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MessageAlert, SearchPerson } from '../../components';
import { useDeathDocsStore, useUiStore } from '../../../hooks';

export const ModalUpdateDeath = () => {

    const { startOpenEditModal } = useUiStore();
    const { activeCertificateDeath, clearActiveDeathDoc, isUpdateDocument, startUpdteDeathDoc, startShowMessageDeath } = useDeathDocsStore();

    const [certificate, setCertificate] = useState<PersonOptions>(activeCertificateDeath.person_per_id);

    const closeModal = () => {
        // clearActiveCertificate();
        startOpenEditModal(false);
    };

    const onHandleEdit = async (values: any) => {
        const isEdit = await startUpdteDeathDoc(activeCertificateDeath._id, {
            dea_Date: values.dea_date, person_per_id: certificate._id, dea_book: values.dea_book
        });
        if (isEdit) {
            startShowMessageDeath('Certificado editado exitosamente!');
            clearActiveDeathDoc();
            startOpenEditModal(false);
        } else {
            toast.error('Ocurrio un error al momento de editar', { transition: Bounce });
        };
    };

    return (
        <div className="fixed bg-black/80 inset-0 w-screen h-screen flex items-center justify-center z-40 antialiased">
            <div className="relative container rounded-lg w-[90%] md:w-2/3 max-w-lg text-black bg-gray-200 pt-5 pb-6">
                <h2 className="text-xl text-center font-semibold">Actualizar datos</h2>
                <button onClick={closeModal} className="absolute right-3 top-3 p-2 bg-red-600 rounded-full">
                    <IoCloseOutline className="text-xl text-white" />
                </button>

                <Formik
                    initialValues={{ dea_date: new Date(activeCertificateDeath.dea_date).toISOString().substring(0, 10), dea_book: activeCertificateDeath.dea_book }}
                    validationSchema={DeathDocumentValidations}
                    onSubmit={onHandleEdit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="px-8 mt-3">
                                <div className="w-full flex flex-col sm:flex-row gap-x-4 mt-8">
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-xs sm:text-sm py-1 font-semibold">Datos de la persona</p>
                                        <SearchPerson inputText={`${certificate.per_names} ${certificate.per_first_lastname}`} error={false} getPerson={(person: PersonOptions) => setCertificate(person)} placeHolder="Datos de la persona..." />
                                    </div>

                                    <div className="flex flex-col w-full sm:w-1/2 mt-5 sm:mt-0">
                                        <label htmlFor="mar_book" className="rounded-lg text-center text-xs sm:text-sm bg-black text-white py-1 font-semibold">Fecha de defunción</label>
                                        <Field
                                            type="date" name="dea_date"
                                            className={`input_field ${(!errors.dea_date || !touched.dea_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="dea_date" component={() => <MessageAlert message={errors.dea_date} />} />
                                    </div>

                                </div>

                                <div className="w-full mt-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="mar_book" className="rounded-lg text-center bg-black text-white text-xs sm:text-sm py-1 font-semibold">Libro del certificado</label>
                                        <Field
                                            placeholder="dea-2025"
                                            type="text" name="dea_book"
                                            className={`input_field ${(!errors.dea_book || !touched.dea_book) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="dea_book" component={() => <MessageAlert message={errors.dea_book} />} />
                                    </div>
                                </div>

                                <div className="w-full mt-12 flex flex-row justify-center gap-x-6">
                                    <button type="submit" className="bg-yellow-400 py-1 px-3 font-semibold border border-yellow-600 rounded-lg shadow-lg shadow-yellow-700 text-sm outline-none">
                                        {(isUpdateDocument) ? (
                                            <p className="animate-pulse">Actualizando...</p>
                                        ) : (
                                            <p>Actualizar</p>
                                        )}
                                    </button>
                                    <button type="button" onClick={closeModal} className="text-white bg-red-500 py-1 px-3 rounded-lg font-semibold border border-red-600 text-sm shadow-lg shadow-red-700">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
