import { ref, watch } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import clientsApi from '@/api/clients-api';
import type { Client } from '../interfaces/clients';

const getClient = async (id: number) => {
  const { data } = await clientsApi.get(`/clients/${id}`);
  return data;
};

const updateClient = async (client: Client) => {
  const { data } = await clientsApi.patch(`/clients/${client.id}`, client);
  return data;
};

const useClient = (id: number) => {
  const client = ref<Client>();

  const { data, isLoading, isError } = useQuery(
    ['client', id],
    () => getClient(id),
    { retry: false }
  );

  const clientMutation = useMutation(updateClient);

  // Update client when data changes
  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  // Reset mutation after 2 seconds
  watch(
    clientMutation.isSuccess,
    () => {
      if (clientMutation.isSuccess.value)
        setTimeout(() => clientMutation.reset(), 2000);
    },
    { immediate: true }
  );

  return {
    client,
    clientMutation,
    getIsError: isError,
    getIsLoading: isLoading,
  };
};

export default useClient;
