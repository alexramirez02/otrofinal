/* eslint-disable no-restricted-imports */
import { useState } from 'react';
import { Tooltip } from '../../tooltip';
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md';
import { DeleteUserDialog } from './DeleteUserDialog';
import { User } from '@/types';
import { EditUserDialog } from '../EditUserDialog';
// eslint-disable-next-line no-restricted-imports
interface UserActionsprop{
user:User;
}
const UserActions = ({user}:UserActionsprop ) => {
 
  const [openDeleteDialog, setOpenDeleteDialog]=useState (false);
  
  return (
    <div className=' text 3x1 flex gap-2  '>
      <Tooltip description='editar el usuario'>
        <button type='button' onClick={() => setOpenDeleteDialog(true)}>
          {' '}
        </button>
        <MdDeleteOutline className=' text-gray-600 hover:text-yellow-600 hover:cursor-pointer  ' />
      </Tooltip>
      <Tooltip description='Eliminar usuario'>
        <button type='button' onClick={() => setOpenDeleteDialog(true)}>
          <MdModeEditOutline classname='hover:cursor-pointer text-gray-900 hover:text-red-700' />
        </button>
      </Tooltip>
      <DeleteUserDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        user={user}
      />
      <EditUserDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        user={user}      />
    </div>
  );
};
export { UserActions };
