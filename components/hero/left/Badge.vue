import type { IconGlobal } from '#build/components';

<script setup lang="ts"></script>

<template>
  <div class=" flex justify-center md:justify-normal">
    <div class="badge">
      <IconGlobal filled class="!mb-0 text-2xl" />
      <p class="text-xs md:text-sm lg:text-base font-semibold">
        We host more than 120,000 websites
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.badge {
  @apply flex flex-row items-center bg-white px-4 py-2 rounded-full gap-1 w-fit;
}
</style>
