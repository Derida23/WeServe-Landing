<template>
  <nav id="navbar">
    <HeaderLogo />
    <HeaderMenu />
    <HeaderLogin />
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="postcss">
#navbar {
  @apply flex flex-row max-w-6xl mx-auto justify-between items-center;
}
</style>