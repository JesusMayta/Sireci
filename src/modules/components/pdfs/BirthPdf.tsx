import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { PersonOptions } from '../../../helpers';

interface PdfOptions {
    people: {
        principal_person: PersonOptions;
        birth_mother: PersonOptions;
        birth_father: PersonOptions;
    };
    codigo: string;
    birth_date: string;
    user: string;
};

const dateFormat = new Intl.DateTimeFormat('es-Es', { year: 'numeric', month: 'long', day: 'numeric' });

export const BirthPdf = ({ people, codigo, birth_date, user }: PdfOptions) => {

    const dateRegister = new Date();

    return (
        <Document>
            <Page size="A4" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingVertical: 20, paddingHorizontal: 10 }}>
                <Image src="/public/images/escudo.png" style={{ width: 60, height: 50, marginBottom: 6 }} />
                <Text style={{ textTransform: 'uppercase', fontSize: 20, marginBottom: 5 }}>República del Perú</Text>
                <View style={{ borderBottom: '1 solid #000', width: '80%', marginBottom: 3 }} />
                <Text style={{ fontSize: 12, marginBottom: 10, textTransform: 'uppercase' }}>Registro nacional de identificación y estado civil</Text>
                <Text style={{ textTransform: 'uppercase' }}>Acta de Nacimiento</Text>

                <View style={{ marginTop: 15, marginBottom: 20, flexDirection: 'column', alignItems: 'center', border: '1 solid #000', width: 140 }}>
                    <Text style={{ paddingVertical: 6, fontSize: 10, fontWeight: 'bold' }}>N° {codigo}</Text>
                    <View style={{ borderBottom: '1 solid #000', width: '100%', marginBottom: 2 }} />
                    <Text style={{ paddingVertical: 6, fontSize: 10, paddingHorizontal: 3 }}>Código único de Identificación CUI</Text>
                </View>

                <View style={{ marginTop: 20, width: '70vw', border: '1 solid #000' }}>
                    <View style={{ width: '100%', flexDirection: 'row', borderBottom: '1 solid #000' }}>
                        <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, borderRight: '1 solid #000', paddingVertical: 3 }}>Nombre:</Text>
                        <Text style={{ width: '60%', textAlign: 'center', fontSize: 10, paddingVertical: 3 }}>{`${people.principal_person.per_names} ${people.principal_person.per_first_lastname}`}</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', borderBottom: '1 solid #000' }}>
                        <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, borderRight: '1 solid #000', paddingVertical: 3 }}>DATOS DE LOS PADRES:</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3, borderRight: '1 solid #000' }}>PADRE</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3 }}>MADRE</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text style={{ width: '40%', textAlign: 'left', fontSize: 8, paddingLeft: 6, borderRight: '1 solid #000', paddingVertical: 3 }}>Prenombres:</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3, borderRight: '1 solid #000' }}>{people.birth_father.per_names}</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3 }}>{people.birth_mother.per_names}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text style={{ width: '40%', textAlign: 'left', fontSize: 8, paddingLeft: 6, borderRight: '1 solid #000', paddingVertical: 3 }}>Primer Apellido:</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3, borderRight: '1 solid #000' }}>{people.birth_father.per_first_lastname}</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3 }}>{people.birth_mother.per_first_lastname}</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', borderTop: '1 solid #000' }}>
                        <Text style={{ width: '40%', textAlign: 'left', fontSize: 8, paddingLeft: 6, borderRight: '1 solid #000', paddingVertical: 3 }}>Documento de identidad:</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3, borderRight: '1 solid #000' }}>DNI/LE {people.birth_father.per_document}</Text>
                        <Text style={{ width: '30%', textAlign: 'center', fontSize: 10, paddingVertical: 3 }}>DNI/LE {people.birth_mother.per_document}</Text>
                    </View>
                </View>

                <View style={{ marginTop: 35, width: '70vw', flexDirection: 'row' }}>
                    <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, paddingVertical: 3, fontWeight: 'black' }}>FECHA DE REGISTRO</Text>
                    <Text style={{ width: '60%', textAlign: 'left', fontSize: 10, paddingVertical: 3 }}>{dateFormat.format(dateRegister)}</Text>
                </View>

                <View style={{ marginTop: 5, width: '70vw', flexDirection: 'row' }}>
                    <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, paddingVertical: 3, fontWeight: 'black' }}>DECLARANTE/ VÍNCULO</Text>
                    <Text style={{ width: '60%', textAlign: 'left', fontSize: 10, paddingVertical: 3 }}>{`${people.birth_mother.per_names} ${people.birth_mother.per_first_lastname} / MADRE`}</Text>
                </View>

                <View style={{ marginTop: 5, width: '70vw', flexDirection: 'row' }}>
                    <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, paddingVertical: 3, fontWeight: 'black' }}>DOCUMENTO DE IDENTIDAD</Text>
                    <Text style={{ width: '60%', textAlign: 'left', fontSize: 10, paddingVertical: 3 }}>{people.birth_mother.per_document}</Text>
                </View>

                <View style={{ marginTop: 5, width: '70vw', flexDirection: 'row' }}>
                    <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, paddingVertical: 3, fontWeight: 'black' }}>DECLARANTE/ VÍNCULO</Text>
                    <Text style={{ width: '60%', textAlign: 'left', fontSize: 10, paddingVertical: 3 }}>{`${people.birth_father.per_names} ${people.birth_father.per_first_lastname}`}</Text>
                </View>

                <View style={{ marginTop: 5, width: '70vw', flexDirection: 'row' }}>
                    <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, paddingVertical: 3, fontWeight: 'black' }}>DOCUMENTO DE IDENTIDAD</Text>
                    <Text style={{ width: '60%', textAlign: 'left', fontSize: 10, paddingVertical: 3 }}>{people.birth_father.per_document}</Text>
                </View>

                <View style={{ marginTop: 5, width: '70vw', flexDirection: 'row' }}>
                    <Text style={{ width: '40%', textAlign: 'left', fontSize: 10, paddingLeft: 6, paddingVertical: 3, fontWeight: 'black' }}>REGISTRADOR CIVIL</Text>
                    <Text style={{ width: '60%', textAlign: 'left', fontSize: 10, paddingVertical: 3 }}>{user}</Text>
                </View>

            </Page>
        </Document >
    );
};