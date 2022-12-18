import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';

import clientsApi from '@/api/clients-api';
import { useClientsStore } from '@/store/clients';
import type { Client } from '@/clients/interfaces/clients';

const getClients = async () => {
  const { data } = await clientsApi.get<Client[]>('/clients?_page=0');
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(store);

  const { data, isLoading } = useQuery(['clients?page=', 1], () =>
    getClients()
  );

  watch(data, (newClients) => {
    if (newClients) store.setClients(newClients);
  });

  return {
    clients,
    isLoading,
  };
};

export default useClients;
