<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';


const counterStore = useCounterOptionsStore();
const {count, squaredCount} = storeToRefs(counterStore)

const increment = (value: number) => {
  counterStore.incrementBy(value);
};

const decrement = (value: number) => {
  counterStore.decrementBy(value);
};
</script>

<template>
  <h1>Pinia Options</h1>
  <h2>Counter: {{ count }}</h2>
  <h2>SquareCounter: {{squaredCount}}</h2>

  <br>


  <button @click="increment(1)">+1</button>
  <button @click="increment(2)">+2</button>
  <button @click="increment(5)">+5</button>

  <button @click="counterStore.$reset">Reset</button>

  <button @click="decrement(1)"> -1</button>
  <button @click="decrement(2)"> -2</button>
  <button @click="decrement(5)"> -5</button>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
