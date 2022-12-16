<script setup lang="ts">
import { useCounterOptionsStore } from "@/store/counter-options";

const counterStore = useCounterOptionsStore();
</script>

<template>
  <h1>Counter: {{ counterStore.count }}</h1>
</template>

<style scoped></style>
