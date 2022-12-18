<script setup lang="ts">
import useClients from '@/clients/composables/useClients';

const { clients, isLoading } = useClients();
</script>

<template>
  <h1 v-if="isLoading">Cargando...</h1>

  <ul v-else>
    <li v-for="client of clients" :key="client.id">
      <RouterLink
        :to="{
          name: 'client-id',
          params: { id: client.id },
        }"
        >{{ client.id + ' ' + client.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
