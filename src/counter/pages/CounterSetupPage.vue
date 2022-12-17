<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';
import { storeToRefs } from 'pinia';


const counterStore = useCounterSetupStore();
const {count, squareCount} = storeToRefs(counterStore)

const increment = (value: number) => {
  counterStore.incrementBy(value);
};

const decrement = (value: number) => {
  counterStore.decrementBy(value);
};
</script>

<template>
  <h1>Pinia Setup</h1>
  <h2>Counter: {{ count }}</h2>
  <h2>SquareCounter: {{squareCount}}</h2>

  <br>


  <button @click="increment(1)">+1</button>
  <button @click="increment(2)">+2</button>
  <button @click="increment(5)">+5</button>

  <button @click="decrement(1)"> -1</button>
  <button @click="decrement(2)"> -2</button>
  <button @click="decrement(5)"> -5</button>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
