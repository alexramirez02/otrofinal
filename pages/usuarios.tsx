/* eslint-disable jsx-a11y/alt-text */

import { UserActions } from '@/components/ui/users/UserActions';
import { useGetRoles } from '@/hooks/useGetRoles';
import { useGetUsers } from '@/hooks/useGetUsers';
import { API_ROUTES, fetcher } from '@/servicios/apiConfig';
import { UserQuery } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

const usuarios = () => {
 
  // const {data,isLoading,error} = useSWR(API_ROUTES.User,fetcher);
  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
  const { users, usersError, usersLoading } = useGetUsers();
  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
    const { roles, rolesLoading } = useGetRoles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR<UserQuery>(
    API_ROUTES.users,
    fetcher
  );
  // const {data, error } = useSWR(API_ROUTES.users,fetcher);

  // eslint-disable-next-line no-console
  console.log(data, isLoading, error);
  // console.log(useSWR)

  // if(isLoading) return  <div>isLoading </div>;
  // if(error) return  <div>error al cargar datos </div>;

  return (
    <main className='flex flex-col gap-5'>
      <Link href='/'>
        <span> Home </span>
      </Link>
      {/* <div className='flex flex-col h-screen w-full items-center justify-center '> */}
      <section>
        <div className=' flex  w-full justify-center '>Usuarios</div>
        {/* <div className=' flex flex-col h-screen w-full items-center justify-center '>
          Usuarios
        </div> */}
        {/* <div className=' <div className=" flex  w-full justify-center ">Usuarios</div>'>Usuarios</div> */}
        {/* <div className=' <div className=" flex flex-col h-screen w-full items-center justify-center ">Usuarios</div>'>Usuarios</div> */}
      </section>

      <section className='justify-center  flex w-full'>
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <Image
                      src={'user.image'}
                      alt={'User image'}
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                  </td>
                  <td>{user.name} </td>
                  <td>{user.email} </td>
                  {/* <td>{user.roleId} </td> */}
                  <td>
                    {roles?.find((el) => el.id === user.roleId)?.name ?? ''}
                  </td>

                  <td>
                    <UserActions user={user} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      {/* </div> */}
    </main>
  );
};
export default usuarios;
