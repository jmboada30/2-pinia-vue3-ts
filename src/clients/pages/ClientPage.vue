<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import useClient from '@/clients/composables/useClient';
import LoadingModal from '@/shared/components/LoadingModal.vue';

const route = useRoute();
const router = useRouter();
const { client, clientMutation, getIsLoading, getIsError } = useClient(
  +route.params.id
);

watch(getIsError, () => {
  if (getIsError.value) router.replace({ name: 'clients' });
});
</script>

<template>
  <h3 v-if="clientMutation.isLoading.value">Guardando...</h3>
  <h3 v-if="clientMutation.isSuccess.value">Guardado</h3>

  <LoadingModal v-if="getIsLoading" />

  <div v-if="client">
    <h1>{{ client.name }}</h1>

    <form @submit.prevent="clientMutation.mutate(client!)">
      <input type="text" placeholder="Nombre" v-model="client.name" />

      <br />

      <input type="text" placeholder="Direccion" v-model="client.address" />

      <br />

      <button type="submit" :disabled="clientMutation.isLoading.value">
        Guardar
      </button>
    </form>
  </div>

  <code> {{ client }} </code>
</template>

<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
}
</style>
