import {  User } from '@/types';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_ROUTES } from '@/servicios/apiConfig';
import { Dialog } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import { PrimaryButton, SecondaryButton } from '../../Buttons';
import { useGetRoles } from '@/hooks/useGetRoles';
import { refetchUsers } from '@/hooks/useGetUsers';


interface EditUserDialogInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
  // role:Role;
  
}

const EditUserDialog = ({ open, setOpen, user }: EditUserDialogInterface) => {
  const { roles, rolesLoading } = useGetRoles();
  const [userInformation, setUserInformation] = useState({
    name: user.name,
    roleId: user.roleId,
  });

  const [editLoading, setEditLoading] = useState(false);

  const updateUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    setEditLoading(true);

    if (
      userInformation.name !== user.name ||
      userInformation.roleId !== user.roleId
    ) {
      try {
        await axios.request({
          method: 'PUT',
          url: `${API_ROUTES.users}/${user.id}`,
          data: { name: userInformation.name, roleId: userInformation.roleId },
        });
        await refetchUsers();
        toast.success('Usuario actualizado correctamente');
      } catch (error) {
        toast.error('Error actualizando el usuario');
      }
    }
    setOpen(false);
    setEditLoading(false);
  };

  if (rolesLoading) return <div>Loading...</div>;

  return (
    <Dialog open={open} onClose={() => setOpen(false)} title='Editar usuario'>
      <form className='flex flex-col gap-3' onSubmit={updateUser}>
        <label htmlFor='user-name'>
          <span>
            Nombre <span className='text-red-500'>*</span>
          </span>
          <input
            name='user-name'
            type='text'
            placeholder='Jhon Doe'
            required
            defaultValue={user.name}
            value={userInformation.name}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                name: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='user-role'>
          <span>
            Rol <span className='text-red-500'>*</span>
          </span>
          <select
            name='user-role'
            required
            defaultValue={user.roleId}
            value={userInformation.roleId}
            onChange={(e) => {
              setUserInformation({
                ...userInformation,
                roleId: e.target.value,
              });
            }}
          >
            <option disabled>Seleccione un rol</option>
            {roles?.map((role) => {
              return (
                <option value={role.id} key={role.id}>
                  {role.name}
                </option>
              );
            })}
          </select>
        </label>

        <div className='flex gap-3 w-full justify-center'>
          <PrimaryButton
            loading={editLoading}
            text='Guardar'
            onClick={() => {}}
            type='submit'
          />
          <SecondaryButton
            onClick={() => setOpen(false)}
            text='Cancelar'
            loading={editLoading}
          />
        </div>
      </form>
    </Dialog>
  );
};

export { EditUserDialog };