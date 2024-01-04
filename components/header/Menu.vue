<script setup lang="ts">
const menu = [
  { name: 'Products', url: 'https://www.google.com', icon: false },
  { name: 'Services', url: 'https://www.google.com', icon: true },
  { name: 'Pricing', url: 'https://www.google.com', icon: false },
  { name: 'Testimonials', url: 'https://www.google.com', icon: false },
  { name: 'Blog', url: 'https://www.google.com', icon: false },
]
</script>

<template>
  <ul class="list">
    <li v-for="item in menu" :key="item.name">
      <div class="menu">
        <a :href="item.url" target="_blank"> {{ item.name }} </a>
        <IconArrowDown v-if="item.icon" filled class="!mb-0 text-indigo" />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="postcss">
.list {
  @apply flex flex-row gap-x-7;
}

.menu {
  @apply md:hidden;
  @apply lg:flex flex-row items-center gap-1 font-medium cursor-pointer;
  @apply hover:text-hanPurple;
}
</style>
