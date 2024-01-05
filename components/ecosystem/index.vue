<script setup lang="ts"></script>

<template>
  <div class="ecosystem flex items-center">
    <EcosystemLeft />
    <EcosystemRight />
  </div>
</template>

<style scoped lang="postcss">
.ecosystem {
  @apply grid grid-cols-1 md:grid-cols-2 gap-x-16
}
</style>
