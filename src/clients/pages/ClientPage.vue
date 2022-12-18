<script setup lang="ts">
import useClient from '@/clients/composables/useClient';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const {client, isLoading} = useClient(+route.params.id);
</script>

<template>
  <h3>Guardando...</h3>
  <h3>Guardado</h3>

    <LoadingModal v-if="isLoading" />    

  <div>
    <h1>Joel Boada</h1>

    <form>
      <input type="text" placeholder="Nombre" />

      <br />

      <input type="text" placeholder="Direccion" />

      <br />
      <button type="submit" @click="">Guardar</button>
    </form>
  </div>

  <code> {{client}} </code>
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
