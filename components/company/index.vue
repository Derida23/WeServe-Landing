<script setup lang="ts">
import { reactive } from 'vue'

const companies = reactive([
  { name: 'Evergrow', icon: '1' },
  { name: 'Ravention', icon: '2' },
  { name: 'Instflux', icon: '3' },
  { name: 'Counseel', icon: '1' },
  { name: 'Jarveaan', icon: '4' },
])
</script>

<template>
  <div class="company">
    <div v-for="company in companies" :key="company.name" class="company-wrapper">
      <component :is="`IconLogo${company.icon}`" class="text-2xl lg:text-3xl xl:text-4xl" />
      <p>{{ company.name }}</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.company {
  @apply grid grid-cols-5 gap-x-5 lg:gap-x-8 xl:gap-x-14;

  &-wrapper {
    @apply flex flex-row items-center gap-x-1 lg:gap-x-3;
    @apply hover:text-hanPurple cursor-pointer;

    p {
      @apply font-semibold lg:font-bold;
      @apply text-base lg:text-xl;
    }

  }
}
</style>
