<script setup lang="ts">
</script>

<template>
  <nav id="navbar">
    <HeaderLogo id="logo" />
    <HeaderMenu id="menu" />
    <HeaderLogin id="login" />
  </nav>
</template>

<style scoped lang="postcss">
#navbar {
  @apply flex flex-row justify-center md:justify-between items-center;
}

#menu {
  @apply hidden sm:flex md:flex lg:flex;
}

#login {
  @apply hidden sm:flex md:flex lg:flex;
}
</style>
