<script setup lang="ts">
</script>

<template>
  <nav id="navbar">
    <HeaderLogo />
    <HeaderMenu />
    <HeaderLogin />
  </nav>
</template>

<style scoped lang="postcss">
#navbar {
  @apply flex flex-row max-w-6xl mx-auto justify-between items-center mt-10;
}
</style>
