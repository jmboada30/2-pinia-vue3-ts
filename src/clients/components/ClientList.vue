<script setup lang="ts">
import type { Client } from '@/clients/interfaces/clients';

defineProps<{
  clients: Client[];
}>();

</script>

<template>
  <ul>
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
