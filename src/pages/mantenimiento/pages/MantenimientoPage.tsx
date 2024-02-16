import { PrincipalLayout } from "../../layouts"

export const MantenimientoPage = () => {
  return (
    <PrincipalLayout>
      <>
        <div className="h-full p-4 bg-gray-300">
          <div className='bg-blue-800 text-white w-full h-10 pt-2 pl-10 text-justify'>Datos de la municipalidad</div>
          <form>
            <div>
              <div className="mt-16 flex items-center">
                <label  className="ml-24 font-medium">Nombre</label>
                <input id="nombre" type="text" className="ml-24 py-2  ps-3 w-9/12 rounded-lg border-2 border-gray-400 " placeholder="nombre de la municipalidad " />
              </div>
              <div className=" flex items-center">
                <label  className="ml-24 font-medium">RUC</label>
                <input id="nombre" type="text" className="ml-32 py-2  ps-3 w-9/12 rounded-lg border-2 border-gray-400 " placeholder="escriba el RUC " />
              </div>
              <div className="mt-6 flex items-center">
                <label  className="ml-24 font-medium">Sitio web</label>
                <input id="nombre" type="text" className="ml-24 py-2  ps-3 w-9/12 rounded-lg border-2 border-gray-400 " placeholder="nombre de algun sitio web " />
              </div>
              <div className="mt-6 flex items-center">
                <label  className="ml-24 font-medium">Telefono</label>
                <input id="nombre" type="text" className="ml-24 py-2  ps-3 w-9/12 rounded-lg border-2 border-gray-400 " placeholder="escriba su telefono " />
              </div>
              <div className="mt-6 flex items-center">
                <label  className="ml-24 font-medium">Direccion</label>
                <input id="nombre" type="text" className="ml-24 py-2  ps-3 w-9/12 rounded-lg border-2 border-gray-400 " placeholder="escriba su direccion " />
              </div>
              <div className="mt-6 flex items-center">
                <label  className="ml-24 font-medium">Email</label>
                <input id="nombre" type="email" className="ml-32 py-2  ps-3 w-9/12 rounded-lg border-2 border-gray-400 " placeholder="escriba su correro electrónico " />
              </div>
              <div className="flex justify-end pt-12">
                <button  className='bg-teal-700  text-white h-10 w-32 '> Guardar</button>
              </div>

            </div>             
          </form>
        </div>

        
      </>
    </PrincipalLayout>
  )
}
