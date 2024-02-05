import '../../../src/styles.css'
import {useFormik, } from 'formik';
import * as Yup from 'yup';

 

const validationSchema = Yup.object({
    nombre: Yup.string().required('Campo requerido'),
    apellido: Yup.string().required('Campo requerido'),
    telefono: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    usuario: Yup.string().required('Campo requerido'),
    tipoUsuario: Yup.string().required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
    id: Yup.string().required('Campo requerido'),
});


export const ProfileForm = () => {
  const formik  =useFormik ({
   initialValues:{
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    usuario: '',
    tipoUsuario: '',
    password: '',
    id: '',
   },
   validationSchema:validationSchema,
   onSubmit:(values)=>{
    console.log("Valores enviados",values)
   },
  });  

    return (
     <>   
        <div className='bg-stone-300 '>
            <div className='bg-blue-800 text-white h-10  text-justify'>Agregar Usuario</div>
                <div className='bg-neutral-500 text-white h-8 ml-3.5 mt-3 mb-4'>Completar los campos</div>
            <div>
                    <form className='w-[40rem] h-[600px] ' onSubmit={formik.handleSubmit}>
                        <div className='grid grid-cols-2 gap-4 float-start m-2 w-full'>
                            <div className='mb-2'>
                                <label>Nombre: </label>
                                <input 
                                type='text'
                                id='nombre'
                                name='nombre'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nombre}
                                placeholder="Ingresa tu nombre" 
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring' 
                                />
                                 {formik.touched.nombre && formik.errors.nombre ? (
                                  <div>{formik.errors.nombre}</div>
                                 ) : null}
                            </div>
                            <div>
                                <label>Apellido: </label>
                                <input 
                                type='text'
                                id='apellido'
                                name='apellido'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.apellido}
                                placeholder="Ingresa tu apellido"
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring' 
                                />
                                {formik.touched.apellido && formik.errors.apellido ? (
                                  <div>{formik.errors.apellido}</div>
                                 ) : null}
                            </div>
                            <div>
                                <label>Telefono: </label>
                                <input 
                                type='text'
                                id='telefono'
                                name='telefono'
                                placeholder="Ingresa tu numero telefonico"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.telefono}
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'
                                />
                                {formik.touched.telefono && formik.errors.telefono ? (
                                  <div>{formik.errors.telefono}</div>
                                 ) : null}

                            </div>
                            <div>
                                <label>E-mail: </label>
                                <input 
                                type='email'
                                id='email'
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="Ingresa tu email"
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'/>
                                {formik.touched.email && formik.errors.email ? (
                                  <div>{formik.errors.email}</div>
                                 ) : null}
 
                            </div>
                            <div>
                                <label>Usuario: </label>
                                <input 
                                type='text'
                                id='usuario'
                                name='usuario'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.usuario}
                                placeholder="Ingresa tu usuario" 
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'
                                />
                                {formik.touched.usuario && formik.errors.usuario ? (
                                  <div>{formik.errors.usuario}</div>
                                 ) : null}
                            </div>
                             <div>
                                <label>Tipo Usuario: </label>
                                <select 
                                id="tipoUsuario"
                                name="tipoUsuario"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.tipoUsuario} 
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'>
                                <option value="" label="Selecciona una opción" />  
                                <option value="usuario" label='usuario'></option>
                                <option value="administrador" label='administrador'></option>
                                </select>
                                {formik.touched.tipoUsuario && formik.errors.tipoUsuario ? (
                                  <div>{formik.errors.tipoUsuario}</div>
                                ) : null}
                            </div> 
                        
                            <div>
                                <label>Password: </label>
                                <input
                                type='password'
                                id='password'
                                name='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder="Ingresa tu contraseña"
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring'
                                />
                                {formik.touched.password && formik.errors.password ? (
                                  <div>{formik.errors.password}</div>
                                 ) : null}
                            </div>
                            <div>                    
                                <label>ID:</label>
                                <input 
                                type='text'
                                id='id'
                                name='id'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.id}
                                placeholder="Ingresa tu id" 
                                className='box-content h-2 w-12 p-4 border-4'
                                />
                               {formik.touched.id && formik.errors.id ? (
                                  <div>{formik.errors.id}</div>
                                ) : null}

                            </div>                    
                        </div>
                        <div  className='w-full flex justify-center '>
                            <div className='grid grid-cols-3 gap-4 float-start m-2 '>
                                <button type='submit' className='bg-teal-700 text-white h-10 w-32'> Registrar</button>
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

  