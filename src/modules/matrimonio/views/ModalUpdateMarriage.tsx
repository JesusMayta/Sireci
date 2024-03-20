import { IoCloseOutline } from 'react-icons/io5';
import { useMarriageDocsStore, useUiStore } from '../../../hooks';
import { MessageAlert, SearchPerson } from '../../components';
import { useState } from 'react';
import { MarriageDocumentValidations, PersonOptions } from '../../../helpers';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Bounce, toast } from 'react-toastify';

export const ModalUpdateMarriage = () => {

    const { startOpenEditModal } = useUiStore();
    const { activeCertificateMarriage, clearActiveCertificate, isUpdateDocument, startEditMarriageDoc, startShowMarriageAlert } = useMarriageDocsStore();

    const [personsToEdit, setPersonsToEdit] = useState({
        mar_husband: activeCertificateMarriage.mar_husband, mar_wife: activeCertificateMarriage.mar_wife,
        mar_date: new Date(activeCertificateMarriage.mar_date).toISOString().substring(0, 10),
        mar_book: activeCertificateMarriage.mar_book
    });

    const onHandleEdit = async (values: any) => {
        const isEdit = await startEditMarriageDoc(activeCertificateMarriage._id, {
            mar_date: values.mar_date, mar_husband: personsToEdit.mar_husband._id, mar_wife: personsToEdit.mar_wife._id, mar_book: values.mar_book
        });
        if (isEdit) {
            startShowMarriageAlert('Certificado editado exitosamente!');
            clearActiveCertificate();
            startOpenEditModal(false);
        } else {
            toast.error('Ocurrio un error al momento de editar', { transition: Bounce });
        };
    };

    const closeModal = () => {
        clearActiveCertificate();
        startOpenEditModal(false);
    };

    return (
        <div className="fixed bg-black/60 inset-0 w-screen h-screen flex items-center justify-center z-40 antialiased">
            <div className="relative container rounded-lg w-[90%] md:w-2/3 max-w-lg text-black bg-gray-200 pt-4 pb-6 shadow-lg shadow-gray-600">
                <h2 className="text-xl text-center font-semibold">Actualizar datos</h2>
                <button onClick={closeModal} className="absolute right-3 top-3 p-2 bg-red-600 rounded-full">
                    <IoCloseOutline className="text-xl text-white" />
                </button>

                <Formik
                    initialValues={{ mar_date: personsToEdit.mar_date, mar_book: personsToEdit.mar_book }}
                    validationSchema={MarriageDocumentValidations}
                    onSubmit={onHandleEdit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="px-8 mt-3">
                                <div className="w-full flex flex-row gap-x-4 mt-8">
                                    <div className="flex flex-col w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-xs py-1 font-semibold">Datos del esposo</p>
                                        <SearchPerson inputText={`${personsToEdit.mar_husband.per_names} ${personsToEdit.mar_husband.per_first_lastname}`} error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, mar_husband: person })} placeHolder="Datos del esposo..." />
                                    </div>

                                    <div className="w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-xs py-1 font-semibold">Datos de la esposa</p>
                                        <SearchPerson inputText={`${personsToEdit.mar_wife.per_names} ${personsToEdit.mar_wife.per_first_lastname}`} error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, mar_husband: person })} placeHolder="Datos de la esposa..." />
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-x-4 mt-4">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="mar_date" className="rounded-lg text-center bg-black text-white text-xs py-1 font-semibold">Fecha de registro</label>
                                        <Field
                                            type="date" name="mar_date"
                                            className={`input_field ${(!errors.mar_date || !touched.mar_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="mar_date" component={() => <MessageAlert message={errors.mar_date} />} />
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="mar_book" className="rounded-lg text-center bg-black text-white text-xs py-1 font-semibold">Libro del certificado</label>
                                        <Field
                                            placeholder="marriage-2025"
                                            type="text" name="mar_book"
                                            className={`input_field ${(!errors.mar_book || !touched.mar_book) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="mar_book" component={() => <MessageAlert message={errors.mar_book} />} />
                                    </div>
                                </div>

                                <div className="w-full mt-12 flex flex-row justify-center gap-x-6">
                                    <button type="submit"
                                        disabled={(isUpdateDocument)}
                                        className="bg-yellow-400 py-1 px-3 font-semibold border border-yellow-600 rounded-lg shadow-lg shadow-yellow-700 text-sm outline-none">
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
