import { closeFormDocument, useAppDispatch } from '../../store';

// import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';
export const AddDocumentView = () => {
    const dispatch = useAppDispatch();

    // const onCloseFormDocument = () => {
    //     dispatch(closeFormDocument());
    // };

    const registrarUsuario = async (values) => {

        const resp = await axios.post('https://sireci-be.onrender.com/api/auth/register', {
            user_name: values.name,
            user_first: values.primerApellido
        });

        console.log(resp);

    };

    return (
        <>
            <div className='bg-stone-300 w-full'>
                {/* <div className='bg-blue-800 text-white h-10 pt-2 pl-8 text-justify ml-3.5  mb-4 mx-3.5'>Registro de Acta de Matrimonio</div> */}
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-neutral-500 text-white pt-2 pl-8  h-8'>Datos Marido</div>
                    <div className='bg-neutral-500 text-white pt-2  pl-8 h-8'>Datos Mujer</div>
                </div>
                <form className=' h-[600px] '>
                    <div className='grid grid-cols-2 gap-4 float-start m-2 w-screen'>
                        <div className='mb-2'>
                            <label>Nombres</label>
                            <input className='ms-52 w-96  mt-1 p-2  focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Nombres</label>
                            <input className='ms-52 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Primer Apellido</label>
                            <input className='ms-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Primer Apellido</label>
                            <input className='ml-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Segundo Apellido</label>
                            <input className='ml-36 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Segundo Apellido</label>
                            <input className='ml-36 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>DNI</label>
                            <input className='ms-60 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>DNI</label>
                            <input className='ms-60 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Fecha registro</label>
                            <input className='ms-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='date'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Codigo de Acta</label>
                            <input className='ms-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div className='mb-2'>
                            <label>Archivo pdf</label>
                            <input className='ms-44 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
                        </div>
                        <div>
                            <button className='bg-blue-800 text-white h-10 w-48'>Examinar</button>
                        </div>

                        <div className='w-full flex justify-center'>
                            <div className='grid grid-cols-2 gap-4 float-start m-2 spa'>
                                <button className='bg-teal-700 text-white h-10 w-32'>Registrar</button>
                                <button className='bg-red-950  text-white h-10 w-32'>Cancelar</button>
                            </div>

                        </div>

                    </div>
                </form>
            </div>

        </>
    );
};
