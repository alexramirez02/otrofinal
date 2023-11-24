import { API_ROUTES, fetcher } from '@/servicios/apiConfig';
import { UserQuery } from '@/types';
import useSWR, { mutate } from 'swr';

const refetchUsers = async () => {
  await mutate(API_ROUTES.users);
};

const useGetUsers = () => {
  const { data, isLoading, error } = useSWR<UserQuery>(
    API_ROUTES.users,
    fetcher
  );

  return {
    users: data?.users,
    usersLoading: isLoading,
    usersError: error,
  };
};

export { useGetUsers, refetchUsers };
