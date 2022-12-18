<script setup lang="ts">
import ClientListVue from '@/clients/components/ClientList.vue';
import PaginationsNumbers from '../components/PaginationsNumbers.vue';

</script>

<template>
  <div>
    <h1>Client List</h1>

    <ClientListVue />

    <PaginationsNumbers />
  </div>
</template>

<style scoped></style>
