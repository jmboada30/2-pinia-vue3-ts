<script setup lang="ts">
import ClientListVue from '@/clients/components/ClientList.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import PaginationsNumbers from '@/clients/components/PaginationsNumbers.vue';

import useClients from '@/clients/composables/useClients';

const { isLoading } = useClients();

</script>

<template>
  <div>
    <h1>Client List</h1>

    <ClientListVue />

    <PaginationsNumbers />

    <LoadingModal v-if="isLoading"/>
  </div>
</template>

<style scoped></style>
