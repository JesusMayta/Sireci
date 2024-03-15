import { IoCloseOutline } from 'react-icons/io5';
import { useBirthDocsStore, useUiStore } from '../../../hooks';
import { MessageAlert, SearchPerson } from '../../components';
import { useState } from 'react';
import { BirthDocumentValidations, PersonOptions } from '../../../helpers';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Bounce, toast } from 'react-toastify';

const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '' };

export const ModalUpdateBirth = () => {

    const { startCloseEditModal } = useUiStore();
    const { clearActiveCertificate } = useBirthDocsStore();

    const [personsToEdit, setPersonsToEdit] = useState({
        principalPerson: PersonObject, fatherPerson: PersonObject, motherPerson: PersonObject
    });

    const onHandleEdit = async (values: any) => {
        // const isEdit = await startEditMarriageDoc(activeCertificateMarriage._id, {
        //     mar_date: values.mar_date, mar_husband: personsToEdit.mar_husband._id, mar_wife: personsToEdit.mar_wife._id
        // });

        // if (isEdit) {
        //     clearActiveCertificate();
        //     startSendSuccessMessage('Certificado editado exitosamente!');
        //     startCloseEditModal();
        // } else {
        //     toast.error('Ocurrio un error al momento de editar', { transition: Bounce });
        // };
    };

    const closeModal = () => {
        clearActiveCertificate();
        startCloseEditModal();
    };

    return (
        <div className="fixed bg-black/80 inset-0 w-screen h-screen flex items-center justify-center z-40 antialiased">
            <div className="relative container rounded-lg w-[90%] md:w-2/3 max-w-lg text-black bg-gray-200 pt-5 pb-6">
                <h2 className="text-xl text-center font-semibold">Actualizar datos</h2>
                <button onClick={closeModal} className="absolute right-3 top-3 p-2 bg-red-600 rounded-full">
                    <IoCloseOutline className="text-xl text-white" />
                </button>

                <Formik
                    initialValues={{ birth_date: '', codigo: '' }}
                    validationSchema={BirthDocumentValidations}
                    onSubmit={onHandleEdit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="px-8 mt-3">
                                <div className="w-full flex flex-row gap-x-4 mt-8">
                                    <div className="flex flex-col w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Datos de la persona</p>
                                        <SearchPerson inputText='' error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, principalPerson: person })} placeHolder="Datos de la persona..." />
                                    </div>

                                    <div className="w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Datos del padre</p>
                                        <SearchPerson inputText='' error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, fatherPerson: person })} placeHolder="Datos del padre.." />
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-x-4 mt-8">
                                    <div className="flex flex-col w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Datos de la madre</p>
                                        <SearchPerson inputText='' error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, principalPerson: person })} placeHolder="Datos de la madre..." />
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="mar_date" className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Fecha de nacimiento</label>
                                        <Field
                                            type="date" name="mar_date"
                                            className={`input_field ${(!errors.birth_date || !touched.birth_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="birth_date" component={() => <MessageAlert message={errors.birth_date} />} />
                                    </div>
                                </div>

                                <div className="w-full flex flex-row mt-4 pe-3">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="mar_book" className="rounded-lg text-center bg-black text-white text-sm py-1 font-semibold">Libro del certificado:</label>
                                        <Field
                                            placeholder="birth-2025"
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
