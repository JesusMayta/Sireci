import { IoMdArrowBack } from "react-icons/io";

interface FormOptions {
    onCloseForm: (value: boolean) => void;
}

export const AddDocumentView = ({ onCloseForm }: FormOptions) => {


    const onBackPage = () => {
        onCloseForm(false)
    };

    return (
        <div className="h-full p-4 flex flex-row mt-4">
            <div className="w-1/2 h-full">
                <button onClick={onBackPage} className="flex items-center gap-x-2 py-1 px-3 font-bold rounded-lg hover:underline hover:bg-white hover:border hover:border-gray-700 hover:shadow-lg hover:shadow-gray-400 duration-200 ">
                    <IoMdArrowBack />
                    Volver
                </button>
                <h2 className="text-center text-lg font-semibold">Complete los campos</h2>

                <div className="mt-12">
                    <form>
                        <div className="flex flex-row w-full gap-x-3">
                            <div className="w-1/2">
                                <label htmlFor="" className="font-semibold text-sm">Nombres:</label>
                                <input type="text" className="py-2 w-full" />
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="">Primer Apellido:</label>
                                <input type="text" className="py-2 w-full" />
                            </div>
                        </div>

                        <div className="flex flex-row w-full gap-x-3">
                            <div className="w-1/2">
                                <label htmlFor="" className="font-semibold text-sm">Segundo Apellido:</label>
                                <input type="text" className="py-2 w-full" />
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="">DNI:</label>
                                <input type="text" className="py-2 w-full" />
                            </div>
                        </div>

                        <div className="flex flex-row w-full gap-x-3">
                            <div className="w-1/2">
                                <label htmlFor="" className="font-semibold text-sm">Segundo Apellido:</label>
                                <input type="text" className="py-2 w-full" />
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="">DNI:</label>
                                <input type="text" className="py-2 w-full" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="h-full w-1/2 px-16">
                <div className="bg-white h-full rounded-lg"></div>
            </div>

        </div>
        // <>
        //     <div className='bg-stone-300 w-full'>
        //         {/* <div className='bg-blue-800 text-white h-10 pt-2 pl-8 text-justify ml-3.5  mb-4 mx-3.5'>Registro de Acta de Matrimonio</div> */}
        //         <div className='grid grid-cols-2 gap-4'>
        //             <div className='bg-neutral-500 text-white pt-2 pl-8  h-8'>Datos Marido</div>
        //             <div className='bg-neutral-500 text-white pt-2  pl-8 h-8'>Datos Mujer</div>
        //         </div>
        //         <form className=' h-[600px] '>
        //             <div className='grid grid-cols-2 gap-4 float-start m-2 w-screen'>
        //                 <div className='mb-2'>
        //                     <label>Nombres</label>
        //                     <input className='ms-52 w-96  mt-1 p-2  focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Nombres</label>
        //                     <input className='ms-52 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Primer Apellido</label>
        //                     <input className='ms-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Primer Apellido</label>
        //                     <input className='ml-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Segundo Apellido</label>
        //                     <input className='ml-36 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Segundo Apellido</label>
        //                     <input className='ml-36 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>DNI</label>
        //                     <input className='ms-60 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>DNI</label>
        //                     <input className='ms-60 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Fecha registro</label>
        //                     <input className='ms-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='date'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Codigo de Acta</label>
        //                     <input className='ms-40 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div className='mb-2'>
        //                     <label>Archivo pdf</label>
        //                     <input className='ms-44 w-96  mt-1 p-2 focus:outline-none focus:ring' type='text'></input>
        //                 </div>
        //                 <div>
        //                     <button className='bg-blue-800 text-white h-10 w-48'>Examinar</button>
        //                 </div>

        //                 <div className='w-full flex justify-center'>
        //                     <div className='grid grid-cols-2 gap-4 float-start m-2 spa'>
        //                         <button className='bg-teal-700 text-white h-10 w-32'>Registrar</button>
        //                         <button className='bg-red-950  text-white h-10 w-32'>Cancelar</button>
        //                     </div>

        //                 </div>

        //             </div>
        //         </form>
        //     </div>

        // </>
    );
};
