<script setup lang="ts">
</script>

<template>
  <div class="logo">
    <IconLogo filled class="logo-icon" />
    <h1 class="logo-header">
      weserve.
    </h1>
  </div>
</template>

<style scoped lang="postcss">
.logo {
  @apply flex flex-row gap-[0.375rem] cursor-pointer;

  &-icon {
    @apply text-[2.5rem] !mb-0;
  }

  &-header {
    @apply text-[1.75rem] font-bold;
  }
}
</style>
