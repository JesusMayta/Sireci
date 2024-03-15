import { IoCloseOutline } from 'react-icons/io5';
import { DeathDocumentValidations, PersonOptions } from '../../../helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MessageAlert, SearchPerson } from '../../components';
import { useState } from 'react';
import { useUiStore } from '../../../hooks';

export const ModalUpdateDeath = () => {

    const { startCloseEditModal } = useUiStore();

    const [person, setPerson] = useState<PersonOptions>({ _id: '', per_document: '', per_document_number: '', per_names: '', per_state: false, per_first_lastname: '' });

    const closeModal = () => {
        // clearActiveCertificate();
        startCloseEditModal();
    };

    const onHandleEdit = () => {

    };

    return (
        <div className="fixed bg-black/80 inset-0 w-screen h-screen flex items-center justify-center z-40 antialiased">
            <div className="relative container rounded-lg w-[90%] md:w-2/3 max-w-lg text-black bg-gray-200 pt-5 pb-6">
                <h2 className="text-xl text-center font-semibold">Actualizar datos</h2>
                <button onClick={closeModal} className="absolute right-3 top-3 p-2 bg-red-600 rounded-full">
                    <IoCloseOutline className="text-xl text-white" />
                </button>

                <Formik
                    initialValues={{ dea_date: '', codigo: '' }}
                    validationSchema={DeathDocumentValidations}
                    onSubmit={onHandleEdit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="px-8 mt-3">
                                <div className="w-full flex flex-row gap-x-4 mt-8">
                                    <div className="flex flex-col w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Datos de la persona</p>
                                        <SearchPerson inputText='' error={false} getPerson={(person: PersonOptions) => setPerson(person)} placeHolder="Datos de la persona..." />
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="mar_book" className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Fecha de defunción</label>
                                        <Field
                                            type="date" name="dea_date"
                                            className={`input_field ${(!errors.dea_date || !touched.dea_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="dea_date" component={() => <MessageAlert message={errors.dea_date} />} />
                                    </div>

                                </div>

                                <div className="w-full mt-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="mar_book" className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Libro del certificado</label>
                                        <Field
                                            placeholder="dea-2025"
                                            type="text" name="mar_book"
                                            className={`input_field ${(!errors.codigo || !touched.codigo) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="codigo" component={() => <MessageAlert message={errors.codigo} />} />
                                    </div>
                                </div>

                                <div className="w-full mt-12 flex flex-row justify-center gap-x-6">
                                    <button type="submit" className="bg-yellow-400 py-1 px-3 font-semibold border border-yellow-600 rounded-lg shadow-lg shadow-yellow-700 text-sm outline-none">
                                        Actualizar
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
