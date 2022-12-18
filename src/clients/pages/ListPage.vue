<script setup lang="ts">
import ClientListVue from '@/clients/components/ClientList.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import PaginationsNumbers from '@/clients/components/PaginationsNumbers.vue';

import useClients from '@/clients/composables/useClients';

const {
  isLoading,
  clients,
  currentPage,
  totalPages,
  setPage,
} = useClients();
</script>

<template>
  <div>
    <h1>Client List</h1>

    <ClientListVue :clients="clients" />

    <PaginationsNumbers
      :current-page="currentPage"
      :total-pages="totalPages"
      @set-page="setPage"
    />

    <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped></style>
