<script setup lang="ts">
  import { change as changeTitle } from '~/store/Title';
  changeTitle('Boilerplate');
</script>

<template>
  <hello-world />
</template>