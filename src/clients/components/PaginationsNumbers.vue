<script setup lang="ts"></script>

<template>
  <div>
    <button disabled>Anterior</button>
    <button>1</button>
    <button class="active">2</button>
    <button>3</button>
    <button>Siguiente</button>
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
    transition: all .3s;
}

button:hover {
    background-color: hsla(160, 100%, 37%, .2);
    transition: all .3s;
}

button:disabled {
    cursor: not-allowed;
}

.active {
    background-color: hsla(160, 100%, 37%, .2);
    transition: all .3s;
}
</style>
