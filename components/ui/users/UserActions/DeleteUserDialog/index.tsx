import { Dialog } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';
import { API_ROUTES } from '@/servicios/apiConfig';
import { User } from '@/types';
import { toast } from 'react-toastify';
import { Spinner } from '@/components/ui/Spinners';
import { mutate } from 'swr';

interface DeleteUserDialogInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
}

const DeleteUserDialog = ({
  open,
  setOpen,
  user,
}: DeleteUserDialogInterface) => {
  // const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const deleteUser = async () => {
    setLoading(true);

    try {
      await axios.request({
        method: 'DELETE',
        url: `${API_ROUTES.users}/${user.id}`,
      });
      await  mutate(API_ROUTES.users);
      // await refetchUsers();
      toast.success('Usuario eliminado correctamente');
      setOpen(false);
      // eslint-disable-next-line no-console
      console.log('Usuario eliminando correctamente');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error eliminando el usuario');
    }

    setLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      title={`Eiminar Usuario ${user.name} `}
    >
      <div className='flex flex-col items-center gap-6'>
        Esta seguro de eliminar el usuario?{' '}
      </div>
      <div className='flex gap-3'>
        <button disabled={loading} onClick={deleteUser} className='Prymary'>
          {loading ? <Spinner /> : <span> Confirmar</span>}
        </button>
        <button onClick={() => setOpen(false)} className='Secundary'>
          Cancelar
        </button>
      </div>
    </Dialog>
  );
};
export { DeleteUserDialog };
