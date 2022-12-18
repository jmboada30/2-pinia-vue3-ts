<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  currentPage: number;
  totalPages: number;
}

interface Emits {
  (e: 'set-page', page: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();


const totalPagesNumbers = computed(() =>
  [...Array(props.totalPages)].map((_, i) => i + 1)
);
</script>

<template>
  <div>
    <button
      :disabled="currentPage === 1"
      @click="emits('set-page', currentPage - 1)"
    >
      Anterior
    </button>

    <button
      v-for="number of totalPagesNumbers"
      :key="number"
      @click="emits('set-page', number)"
      :class="{ active: currentPage === number }"
    >
      {{ number }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="emits('set-page', currentPage + 1)"
    >
      Siguiente
    </button>
  </div>
</template>

<style scoped>
div {
  margin-top: 5px;
}

button {
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  color: var(--color-text);
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  transition: all 0.3s;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  transition: all 0.3s;
}

button:disabled {
  cursor: not-allowed;
}

.active {
  background-color: hsla(160, 100%, 37%, 0.2);
  transition: all 0.3s;
}
</style>
