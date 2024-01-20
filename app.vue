<script setup lang="ts">
  import { setUp as setUpTitle } from '~/store/Title';
  setUpTitle();
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>