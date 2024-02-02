import '../../../src/styles.css'

export const ProfileForm = () => {
    return (
     <>   
        <div className='bg-stone-300 '>
            <div className='bg-blue-800 text-white h-10  text-justify'>Agregar Usuario</div>
                <div className='bg-neutral-500 text-white h-8 ml-3.5 mt-3 mb-4'>Completar los campos</div>
            
            <div>
                <form className='w-[40rem] h-[600px] '>
                    <div className='grid grid-cols-2 gap-4 float-start m-2 w-full'>
                        
                        <div className='mb-2'>
                            <label>Nombre: </label>
                            <input type='text' className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring' ></input>
                        </div>
                        <div>
                            <label>Apellido: </label>
                            <input type='text'className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring' ></input>
                        </div>
                        <div>
                            <label>Telefono: </label>
                            <input type='text' className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'></input>
                        </div>
                        <div>
                            <label>E-mail: </label>
                            <input type='email' className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'></input>
                        </div>
                        <div>
                            <label>Usuario: </label>
                            <input type='text' className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'></input>
                        </div>
                        <div>
                            <label>Tipo Usuario: </label>
                            <select id="opciones" name="opciones" className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'>
                            <option value="opcion1">Usuario</option>
                            <option value="opcion2">Administrador</option>
                            </select>
                        </div>
                    
                        <div>
                            <label>Password: </label>
                            <input type='password' className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'></input> 
                        </div>
                        <div>                    
                            <label>ID:</label>
                            <input type='text' className='box-content h-2 w-12 p-4 border-4'></input>
                        </div>                    
                    </div>
                    <div  className='w-full flex justify-center '>
                        <div className='grid grid-cols-3 gap-4 float-start m-2 '>
                            <button  className='bg-teal-700 text-white h-10 w-32'> Registrar</button>
                            <button className='bg-neutral-800 text-white h-10 w-32'>Cancelar</button>
                            <button className='bg-rose-800 text-white h-10 w-32'>Eliminar</button>  
                        </div>
                    </div>
                </form>
            </div>
        </div>
                
     </>
    );
  };
  