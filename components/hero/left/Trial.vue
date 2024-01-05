import type { IconDeviceMessage } from '#build/components';
<script setup lang="ts"></script>

<template>
  <div class="trial">
    <button class="trial-button">
      Try Free Trial
    </button>
    <button>
      <div class="trial-link">
        <IconDeviceMessage filled class="text-2xl" />
        Schedule a Demo
      </div>
    </button>
  </div>
</template>

<style scoped lang="postcss">
.trial {
  @apply flex flex-row gap-x-5 justify-center md:justify-normal;

  &-button {
    @apply bg-hanPurple px-5 lg:px-10 py-3 lg:py-4 text-white rounded-full font-bold text-xs lg:text-lg;
    @apply hover:bg-cetaceanBlue
  }

  &-link {
    @apply flex flex-row gap-x-1 items-center text-hanPurple font-semibold text-xs lg:text-base;
  }
}
</style>
