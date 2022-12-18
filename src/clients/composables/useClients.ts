import { ref, watch, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';

import clientsApi from '@/api/clients-api';
import { useClientsStore } from '@/store/clients';
import type { Client } from '@/clients/interfaces/clients';

const getClients = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(store);

  const { data, isLoading } = useQuery(
    ['clients?page=', currentPage], 
    () => getClients(currentPage.value)
  );

  watch(data, (newClients) => {
    if (newClients) store.setClients(newClients);
  });

  return {
    clients,
    currentPage,
    isLoading,
    totalPages,

    // Getters
    totalPagesNumbers: computed(() =>
      [...Array(totalPages.value)].map((_, i) => i + 1)
    ),

    // Actions
    setPage(newPage: number) {
      store.setPage(newPage);
    },
  };
};

export default useClients;
