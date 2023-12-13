<script setup lang="ts">
</script>

<template>
  <div id="body">
    <nav id="navbar">
      <HeaderLogo />
      <HeaderMenu />
      <HeaderLogin />
    </nav>

    <section id="hero">
      <HeroLeft />
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste optio unde nobis minima quae
        quasi pariatur, cupiditate nulla repellendus ullam accusantium odit illum quam ipsam accusamus
      </div>
    </section>
  </div>
</template>

<style scoped lang="postcss">
#body {
  @apply max-w-6xl mx-auto;
}

#navbar {
  @apply flex flex-row justify-between items-center mt-10;
}

#hero {
  @apply grid grid-cols-2 gap-x-4 mt-28;
}
</style>
