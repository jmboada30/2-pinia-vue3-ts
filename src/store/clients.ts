import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/clients';

export const useClientsStore = defineStore('Clients', () => {
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);

  return {
    // state
    clients,
    currentPage,
    totalPages,

    // getters

    // actions
    setClients(newClients: Client[]) {
      clients.value = newClients;
    },

    setPage(newPage: number) {
      if (newPage === currentPage.value) return;
      if (newPage < 1) return;
      currentPage.value = newPage;
    }
  };
});
