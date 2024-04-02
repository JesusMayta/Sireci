import { PrincipalLayout } from '../../layouts';
import { FormProfile } from '../components';

export const ProfilePage = () => {

  const photoUser = "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";

  return (
    <PrincipalLayout title="Mi Perfil de usuario">
      <div className="relative h-full mt-4 p-8">
        <h2 className="text-center text-3xl font-semibold">Actualizar mis datos</h2>
        <FormProfile />
        <div className="absolute hidden md:block h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-blue-700 bottom-44 md:bottom-60 right-44 lg:right-48 shadow-lg shadow-blue-700"></div>
        <div className="absolute hidden md:block h-20 w-20 lg:h-22 lg:w-22 rounded-full bg-gray-950 bottom-24 right-48 lg:right-52 shadow-lg shadow-gray-950"></div>
        <div className="absolute hidden md:flex h-44 w-44 lg:h-48 lg:w-48 rounded-full bg-blue-700 bottom-[90px] right-0 items-center justify-center shadow-lg shadow-blue-700">
          <img src={photoUser} alt="" className="rounded-full w-24 h-24 lg:w-32 lg:h-32" />
        </div>
      </div>
    </PrincipalLayout>
  );
};
