<script setup lang="ts">
const counter = ref(0);

const increment = () => counter.value++;
</script>

<template>
  <h1>Boilerplate :)</h1>
  <p>{{ counter }}</p>
  <button @click="increment">
    Increment
  </button>
</template>

<style scoped>
  p {
    color: red;
  }
</style>