// import { IoCloseOutline } from 'react-icons/io5';

export const AddDocumentView = () => {


    return (
        <div className="h-full p-4 bg-gray-300">

            <h2 className="mb-5 font-bold text-xl">Completa los campos</h2>

            <form>

                <div className="flex flex-row px-24">
                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="nombres" className="self-baseline font-medium">Nombres:</label>
                        <input id="nombres" type="text" className="py-2 ps-3 w-4/5 rounded-lg border-2 border-gray-400" placeholder="ej: Richard " />
                    </div>

                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="primerApellido" className="font-medium">Primer Apellido:</label>
                        <input id="primerApellido" type="text" className="py-2 ps-3 w-4/5 rounded-lg border-2 border-gray-400" placeholder="ej: Perez" />
                    </div>
                </div>


                <div className="flex flex-row mt-[18px] px-24">
                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="segundoApellido" className="font-medium">Segundo Apellido:</label>
                        <input id="segundoApellido" type="text" className="py-2 ps-3 w-4/5 rounded-lg border-2 border-gray-400" placeholder="ej: Gutierrez" autoCapitalize="" />
                    </div>

                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="dni" className="font-medium">DNI:</label>
                        <input id="dni" type="text" className="py-2 ps-3 w-4/5 rounded-lg border-2 border-gray-400" />
                    </div>
                </div>

                <div className="flex flex-row mt-6">
                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="fechaNacimiento" className="font-medium">Fecha de nacimiento:</label>
                        <input id="fechaNacimiento" type="date" className="py-2 px-3 w-4/5 rounded-lg" />
                    </div>

                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="codigoActa" className="font-medium">Código de acta:</label>
                        <input id="codigoActa" type="text" className="py-2 ps-3 w-4/5 rounded-lg" />
                    </div>
                </div>

                <div className="flex flex-row items-center mt-6">
                    <label htmlFor="fechaNacimiento" className="font-medium">Archivo pdf:</label>
                    <input id="fechaNacimiento" type="file" className="py-2 px-3 w-4/5 rounded-lg" />
                </div>

                <div className="bg-white h-60 w-full overflow-y-auto">
                    asd
                </div>

                <div className="flex flex-row gap-x-5 mt-6 justify-center">
                    <button className="rounded-lg bg-teal-800">Registrar</button>
                    <button className="rounded-lg bg-teal-800">Cancelar</button>
                </div>
            </form>

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
