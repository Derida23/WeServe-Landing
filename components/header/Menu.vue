<template>
  <ul class="flex flex-row gap-x-7">
    <li v-for="item in menu" :key="item.name">
      <div class="menu">
        <a :href="item.url" target="_blank"> {{ item.name }} </a>
        <IconArrowDown v-if="item.icon" filled class="!mb-0" />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const menu = reactive([
  { name: 'Products', url: '#', icon: false },
  { name: 'Services', url: '#', icon: true },
  { name: 'Pricing', url: '#', icon: false },
  { name: 'Testimonials', url: '#', icon: false },
  { name: 'Blog', url: '#', icon: false }
])
</script>

<style scoped lang="postcss">
.menu {
  @apply flex flex-row gap-1 font-medium;
}
</style>