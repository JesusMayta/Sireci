import { Form, Formik, Field, ErrorMessage } from 'formik';
import { BirthDocumentValidations, PersonOptions } from '../../../helpers';
import { BirthPdf, MessageAlert, PdfDownload, SearchPerson } from '../../components';
import { useRef, useState } from 'react';
import styles from '../styles/BirthPage.module.css';
import { HiDocumentArrowUp, HiMiniDocumentArrowUp, HiXCircle } from 'react-icons/hi2';
import { useAuthStore, useRegisterDocs } from '../../../hooks';
import { pdf } from '@react-pdf/renderer';

const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '' };

export const FormCreatePdf = () => {

    const { userSession } = useAuthStore();
    const { registerBirthPdf } = useRegisterDocs();

    const fileInputRef = useRef<any>();

    const [pdfCreated, setCreatedPdf] = useState<boolean>(false);
    const [pdfBlob, setPdfBlob] = useState(Object);

    const [principalPerson, setPrincipalPerson] = useState<PersonOptions>(PersonObject);
    const [fatherPerson, setFatherPerson] = useState<PersonOptions>(PersonObject);
    const [motherPerson, setMotherPerson] = useState<PersonOptions>(PersonObject);


    const getPersonToRegister = (person: PersonOptions) => {
        setPrincipalPerson(person);
    };

    const getFatherPerson = (person: PersonOptions) => {
        setFatherPerson(person);
    };

    const getMotherPerson = (person: PersonOptions) => {
        setMotherPerson(person);
    };

    const onCreatePdf = async (values: any) => {
        if (principalPerson.per_names === '' || fatherPerson.per_names === '' || motherPerson.per_names === '') return;
        const blob = await pdf(<BirthPdf person={principalPerson} father={fatherPerson} mother={motherPerson} user={`${userSession.name} ${userSession.lastName}`} {...values} />).toBlob();
        setCreatedPdf(true);
        setPdfBlob(blob);
    };

    const handleSubmit = async (values: any) => {


    };

    const handleFileChange = () => {
        const pdfFile = new File([pdfBlob], 'documento.pdf', { type: 'application/pdf' });
        fileInputRef.current.files = [pdfFile];
    };

    return (
        <Formik
            initialValues={{ fecha: '', codigo: '' }}
            validationSchema={BirthDocumentValidations}
            onSubmit={handleSubmit}
        >
            {({ errors, values, touched }) => (
                <Form>
                    <div className="flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                        <div className="flex flex-col w-full sm:w-1/2">
                            <p className="text-sm font-semibold">Persona a registrar:</p>
                            <SearchPerson placeHolder="Buscar persona..." getPerson={getPersonToRegister} />
                        </div>

                        <div className="w-full sm:w-1/2 flex flex-col mt-6 sm:mt-0">
                            <p className="text-sm font-semibold">Padre de la persona:</p>
                            <SearchPerson placeHolder="Buscar al padre..." getPerson={getFatherPerson} />
                        </div>
                    </div>

                    <div className="mt-3 flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                        <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0">
                            <p className="font-semibold text-sm">Madre de la persona:</p>
                            <SearchPerson placeHolder="Buscar a la madre..." getPerson={getMotherPerson} />
                        </div>

                        <div className="w-full sm:w-1/2 flex flex-col mt-6 sm:mt-0">
                            <label htmlFor="codigo" className="text-sm font-semibold">Código de acta:</label>
                            <Field type="text" id="codigo" name="codigo" className={` ${styles.input_field} ${(!errors.codigo || !touched.codigo) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                            <ErrorMessage name="codigo" component={() => <MessageAlert message={errors.codigo} />} />
                        </div>
                    </div>

                    <div className="mt-3 flex flex-col sm:flex-row w-full gap-x-8 xl:gap-x-6 2xl:gap-x-16">
                        <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0">
                            <label htmlFor="fecha" className="font-semibold text-sm ">Fecha de nacimiento:</label>
                            <Field type="date" id="fecha" name="fecha" className={` ${styles.input_field} ${(!errors.fecha || !touched.fecha) ? 'border-gray-400' : 'border-red-600 text-red-600'}`} />
                            <ErrorMessage name="fecha" component={() => <MessageAlert message={errors.fecha} />} />
                        </div>

                        <div className="w-full sm:w-1/2 mt-6">
                            {(!pdfCreated) ?
                                <button type="submit" onClick={onCreatePdf} className="flex items-center justify-center gap-x-2 w-full py-2 shadow-lg shadow-blue-900 bg-blue-600 rounded-lg text-white focus:outline-none hover:shadow-md hover:shadow-blue-950 duration-300 font-semibold">
                                    <HiMiniDocumentArrowUp className="text-xl" />
                                    Generar PDF
                                </button> :
                                <>
                                    <PdfDownload doc={<BirthPdf person={principalPerson} father={fatherPerson} mother={motherPerson} user={`${userSession.name} ${userSession.lastName}`} {...values} />} />
                                </>
                            }
                        </div>
                    </div>

                    {(pdfCreated) && (
                        <div className="flex flex-row mt-24 w-full justify-center gap-x-12 text-white font-semibold">
                            <button type="submit" className="flex items-center gap-x-2 bg-green-700 px-7 py-2 rounded-lg shadow-lg shadow-green-950 hover:shadow-md hover:shadow-green-600">
                                <HiDocumentArrowUp className="text-lg" />
                                Registrar
                            </button>
                            <button className="flex items-center gap-x-2 bg-red-700 px-7 rounded-lg shadow-lg shadow-red-950">
                                <HiXCircle className="text-lg" />
                                Cancelar
                            </button>
                        </div>
                    )}
                </Form>
            )}
        </Formik >
    );
};
