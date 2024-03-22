import { IoCloseOutline } from 'react-icons/io5';
import { useBirthDocsStore, useUiStore } from '../../../hooks';
import { MessageAlert, SearchPerson } from '../../components';
import { useState } from 'react';
import { BirthDocumentValidations, PersonOptions } from '../../../helpers';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Bounce, toast } from 'react-toastify';
// import { Bounce, toast } from 'react-toastify';

export const ModalUpdateBirth = () => {

    const { startOpenEditModal } = useUiStore();
    const { clearActiveCertificate, activeCertificateBirth, startUpdateBirthDocument, startShowBirthMessage, isUpdateDocument } = useBirthDocsStore();

    const [personsToEdit, setPersonsToEdit] = useState({
        principalPerson: activeCertificateBirth.person_per_id, fatherPerson: activeCertificateBirth.birth_father, motherPerson: activeCertificateBirth.birth_mother
    });

    const onHandleEdit = async (values: any) => {
        const isEdit = await startUpdateBirthDocument(activeCertificateBirth._id, {
            person_per_id: personsToEdit.principalPerson._id, birth_father: personsToEdit.fatherPerson._id, birth_mother: personsToEdit.motherPerson._id, ...values
        });
        if (isEdit) {
            startShowBirthMessage('Certificado editado exitosamente!');
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
        <div className="fixed bg-black/80 inset-0 w-screen h-screen flex items-center justify-center z-40 antialiased">
            <div className="relative container rounded-lg w-[90%] md:w-2/3 max-w-lg text-black bg-gray-200 pt-5 pb-6">
                <h2 className="text-xl text-center font-semibold">Actualizar datos</h2>
                <button onClick={closeModal} className="absolute right-3 top-3 p-2 bg-red-600 rounded-full">
                    <IoCloseOutline className="text-xl text-white" />
                </button>

                <Formik
                    initialValues={{ birth_date: new Date(activeCertificateBirth.birth_date).toISOString().substring(0, 10), birth_book: activeCertificateBirth.birth_book }}
                    validationSchema={BirthDocumentValidations}
                    onSubmit={onHandleEdit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="px-8 mt-3">
                                <div className="w-full flex flex-col sm:flex-row gap-x-4 mt-8">
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-xs sm:text-sm py-1 font-semibold">Datos de la persona</p>
                                        <SearchPerson inputText={`${personsToEdit.principalPerson.per_names} ${personsToEdit.principalPerson.per_first_lastname}`} error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, principalPerson: person })} placeHolder="Datos de la persona..." />
                                    </div>

                                    <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                                        <p className="rounded-lg text-center bg-black text-white text-xs sm:text-sm py-1 font-semibold">Datos del padre</p>
                                        <SearchPerson inputText={`${personsToEdit.fatherPerson.per_names} ${personsToEdit.fatherPerson.per_first_lastname}`} error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, fatherPerson: person })} placeHolder="Datos del padre.." />
                                    </div>
                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-x-4 mt-4 sm:mt-8">
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <p className="rounded-lg text-center bg-black text-white text-xs sm:text-sm py-1 font-semibold">Datos de la madre</p>
                                        <SearchPerson inputText={`${personsToEdit.motherPerson.per_names} ${personsToEdit.motherPerson.per_first_lastname}`} error={false} getPerson={(person: PersonOptions) => setPersonsToEdit({ ...personsToEdit, motherPerson: person })} placeHolder="Datos de la madre..." />
                                    </div>

                                    <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0">
                                        <label htmlFor="birth_date" className="rounded-lg text-center bg-black text-white text-xs sm:text-sm py-1 font-semibold">Fecha de nacimiento</label>
                                        <Field
                                            type="date" name="birth_date"
                                            className={`input_field ${(!errors.birth_date || !touched.birth_date) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="birth_date" component={() => <MessageAlert message={errors.birth_date} />} />
                                    </div>
                                </div>

                                <div className="w-full flex flex-col sm:flex-row mt-4 pe-0 sm:pe-3">
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <label htmlFor="mar_book" className="rounded-lg text-center bg-black text-white text-xs sm:text-sm py-1 font-semibold">Libro del certificado:</label>
                                        <Field
                                            placeholder="birth-2025"
                                            type="text" name="birth_book"
                                            className={`input_field ${(!errors.birth_book || !touched.birth_book) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                                        <ErrorMessage name="birth_book" component={() => <MessageAlert message={errors.birth_book} />} />
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
