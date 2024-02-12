import '../../../src/styles.css'
import {useFormik, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

 

const validationSchema = Yup.object({
    nombre: Yup.string().required('Campo requerido'),
    primer_apellido: Yup.string().required('Campo requerido'),
    segundo_apellido:Yup.string().required('Campo requerio'),
    direccion:Yup.string().required('Campo requerio'),
    telefono: Yup.string().required('Campo requerido'),
    email: Yup.string().email( 'Correo electrónico inválido').required('Campo requerido'),
    usuario: Yup.string().required('Campo requerido'),
    tipoUsuario: Yup.string().required('Campo requerido'),
    password: Yup.string().required('Campo requerido').min(8, 'La contraseña debe tener al menos 8 caracteres'),
});


export const ProfileForm = () => {
  const formik  =useFormik ({
   initialValues:{
    nombre: '',
    primer_apellido: '',
    segundo_apellido:'',
    direccion:'',
    telefono: '',
    email: '',
    usuario: '',
    tipoUsuario: '',
    password: '',
   },
   validationSchema:validationSchema,
   onSubmit:async(values)=>{
    const objeto={user_name:values.nombre,
      user_first_lastname:values.primer_apellido,
      user_address:values.direccion,
      user_email:values.email,
      user_is_admin:0,
      user_is_active:1,
      user_username:values.usuario,
      user_password:values.password}
    const respuesta=await axios.post("https://sireci-be.onrender.com/api/auth/register",objeto)
    console.log("Valores enviados",values)
    console.log(respuesta)
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
                                  <div className='text-red-500 text-lg'>{formik.errors.nombre}</div>
                                 ) : null}
                            </div>
                            <div>
                                <label>Primer apellido: </label>
                                <input 
                                type='text'
                                id='primer_apellido'
                                name='primer_apellido'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.primer_apellido}
                                placeholder="Ingresa tu apellido paterno"
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring' 
                                />
                                {formik.touched.primer_apellido && formik.errors.primer_apellido ? (
                                  <div className='text-red-500 text-lg'>{formik.errors.primer_apellido}</div>
                                 ) : null}
                            </div>
                            <div>
                                <label>Segundo apellido: </label>
                                <input 
                                type='text'
                                id='segundo_apellido'
                                name='segundo_apellido'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.segundo_apellido}
                                placeholder="Ingresa tu apellido materno"
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring' 
                                />
                                {formik.touched.segundo_apellido && formik.errors.segundo_apellido ? (
                                  <div className='text-red-500 text-lg'>{formik.errors.segundo_apellido}</div>
                                 ) : null}
                            </div>
                            <div>
                                <label>Direccion: </label>
                                <input 
                                type='text'
                                id='direccion'
                                name='direccion'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.direccion}
                                placeholder="Ingresa tu apellido paterno"
                                className='mt-1 p-2 border-2  w-full focus:outline-none focus:ring' 
                                />
                                {formik.touched.direccion && formik.errors.direccion ? (
                                  <div className='text-red-500 text-lg'>{formik.errors.direccion}</div>
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
                                  <div className='text-red-500 text-lg'>{formik.errors.telefono}</div>
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
                                  <div className='text-red-500 text-lg'>{formik.errors.email}</div>
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
                                  <div className='text-red-500 text-lg'>{formik.errors.usuario}</div>
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
                                <option value="1" label='usuario'></option>
                                <option value="0" label='administrador'></option>
                                </select>
                                {formik.touched.tipoUsuario && formik.errors.tipoUsuario ? (
                                  <div className='text-red-500 text-lg'>{formik.errors.tipoUsuario}</div>
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
                                  <div className='text-red-500 text-lg'>{formik.errors.password}</div>
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

  