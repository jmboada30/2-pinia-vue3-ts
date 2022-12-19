import { ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import clientsApi from '@/api/clients-api';
import type { Client } from '../interfaces/clients';

const getClient = async (id: number) => {
  const { data } = await clientsApi.get(`/clients/${id}`);
  return data;
};

const useClient = (id: number) => {
  const client = ref<Client>();

  const { data, isLoading } = useQuery(['client', id], () => getClient(id));

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  return {
    client,
    isLoading,
  };
};

export default useClient;
