<script setup lang="ts">
  import { get as getTitle } from '~/store/Title'
  const title = getTitle();
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <slot />
  </div>
</template>